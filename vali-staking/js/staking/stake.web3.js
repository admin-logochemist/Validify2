const addZero = (x) => (x < 10 && x >= 0) ? "0" + x : x;

const WalletConnectProvider = window.WalletConnectProvider.default;
const Web3Modal = window.Web3Modal.default;

/* STAKING */
var currentAddr;
var networkID = 0;
var tokenContract = null;
var stakeContract = null;
var web3 = null;
var web3Temp = null;

var your_balance = 0;
var your_staking = 0;
var totalStaked;
var rewardPerBlock;

var priceVali = 0.01;

window.addEventListener('load', () => {
    //Reset
    currentAddr = '';
    tokenContract = null;
    stakeContract = null;
    web3 = null;
    your_balance = 0;
    totalStaked = 0;
    rewardPerBlock = 0;

    $.getJSON('https://bsc.api.0x.org/swap/v1/quote?buyToken=' + ADDRESS_TOKEN + '&sellToken=BUSD&sellAmount=100000000000000000', function(data) {
        if (data && data.price) {
            priceVali = (1 / data.price).toFixed(6);
        }
    });

    mainContractInfo();
    Connect();
})



async function mainContractInfo() {
    if (NETID == 56) {
        web3 = new Web3('https://bsc-dataseed1.binance.org:443');
    } else {
        web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
    }
    tokenContract = await new web3.eth.Contract(ABI_TOKEN, ADDRESS_TOKEN);
    stakeContract = await new web3.eth.Contract(ABI_STAKE, ADDRESS_STAKE);
    update();
}


async function walletConnect() {
    var web3Modal;
    var providerOptions;
    var provider;
  
    if (NETID == 56) {
      providerOptions = {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            rpc: {
              56: 'https://bsc-dataseed.binance.org/'
            },
          },
        },
      };
    } else {
      providerOptions = {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            rpc: {
              97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
            },
          },
        },
      };
    }
  
    web3Modal = new Web3Modal({
      cacheProvider: false, // o
      providerOptions: providerOptions, // r
      disableInjectedProvider: true, // o
      theme: "dark",
    });
  
    console.log("Opening a dialog", web3Modal);
    try {
      provider = await web3Modal.connect();
    } catch (e) {
      console.log("Could not get a wallet connection", e);
      return;
    }
    
    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
      window.location.reload();
    });
  
    // Subscribe to chainId change
    provider.on("chainChanged", (chainId9) => {
      window.location.reload();
    });
  
    web3Temp = new Web3(provider);
    runAPP();
}

async function Connect() {
    if (window.ethereum) {
        web3Temp = new Web3(window.ethereum)
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" })
            let accounts = await window.ethereum.request({ method: 'eth_accounts' })
            currentAddr = accounts[0]
            window.ethereum.on('chainChanged', (chainId) => {
                window.location.reload();
            });
            runAPP()
            return
        } catch (error) {
            console.error(error)
        }
    }
}


async function runAPP() {
    networkID = await web3Temp.eth.net.getId()
    if (networkID == NETID) {
        web3 = web3Temp;
        tokenContract = await new web3.eth.Contract(ABI_TOKEN, ADDRESS_TOKEN);
        stakeContract = await new web3.eth.Contract(ABI_STAKE, ADDRESS_STAKE);

        getCurrentWallet();
        update()
    } else {
        $("#btn-connect-meta").text("Wrong network!");

        if (window.ethereum) {
            const data = [{
                    chainId: '0x38',
                    //chainId: '0x61', //Testnet
                    chainName: 'Binance Smart Chain',
                    nativeCurrency: {
                        name: 'BNB',
                        symbol: 'BNB',
                        decimals: 18
                    },
                    rpcUrls: ['https://bsc-dataseed.binance.org/'],
                    blockExplorerUrls: ['https://bscscan.com/'],
                }]
                /* eslint-disable */
            const tx = await window.ethereum.request({ method: 'wallet_addEthereumChain', params: data }).catch()
            if (tx) {
                console.log(tx)
            }
        }
    }
}

$("#button-connect").click(() => {
    if (window.ethereum) {
        Connect();
    } else {
        alert("Please install Metamask/ Trust wallet");
    }
})

$("#btn-unlock-wallet").click(() => {
    if (window.ethereum) {
        Connect();
    } else {
        alert("Please install Metamask/ Trust wallet");
    }
})

async function getCurrentWallet() {
    const accounts = await web3.eth.getAccounts();
    if(accounts.length > 0){
        currentAddr = accounts[0];
        var connectedAddr = currentAddr[0] + currentAddr[1] + currentAddr[2] + currentAddr[3] + '...' + currentAddr[currentAddr.length - 4] + currentAddr[currentAddr.length - 3] + currentAddr[currentAddr.length - 2] + currentAddr[currentAddr.length - 1]
        $("#btn-connect-meta").text(connectedAddr);
        $("#button-connect").prop("disabled", true);

        $("#btn-unlock-wallet").css("display", "none");
        $("#btn-approve").css("display", "block");
    }
}

$("#btn-logout").click(() => {
    $("#btn-connect-meta").text("CONNECT");
    $("#button-connect").prop("disabled", false);

    $("#btn-unlock-wallet").css("display", "block");
    $("#btn-approve").css("display", "none");
    $("#btn-stake").css("display", "none");

    $("#btn-logout").css("display", "none");

    $("#your-locked").text('0');
    $("#your-unlocked").text('0');
    $("#your-time-left").text('0 days, 0:0:0');
    $("#your-unlock-date").text(new Date().toLocaleString('en-US'));
                    
    $("#your-usdc-reward").text(0);
    $("#your-share").text("0%")

    $("#your-vali-balance").text(0);

    web3 = null;
    web3Temp = null;
    currentAddr = null;
    stakeContract = null;
    tokenContract = null;
})

async function updateParameters() {
    if (tokenContract) {
        if (currentAddr != null && currentAddr != undefined && currentAddr != "") {
            tokenContract.methods.balanceOf(currentAddr).call().then(res => {
                your_balance = Math.floor(res / 1e18);
                $("#your-vali-balance").text(your_balance);
            })

            tokenContract.methods.allowance(currentAddr, ADDRESS_STAKE).call().then(res => {
                if ((res / 1e18) < 10000000000) {
                    $("#btn-approve").css("display", "block");
                    $("#btn-stake").css("display", "none");
                } else {
                    $("#btn-approve").css("display", "none");
                    $("#btn-stake").css("display", "block");
                }
            })
        }
    }


    if (stakeContract) {

        var res = await stakeContract.methods.stakingEnabled().call();
        if (res == false)
            return;

        stakeContract.methods.totalStakingAmount().call().then(res => {
            totalStaked = Math.floor(res / 1e18);
            $("#info-total-staking").text(totalStaked);
            $("#info-total-staking-usd").text((totalStaked * priceVali).toFixed(2));

            if (rewardPerBlock > 0 && totalStaked > 0) {
                $("#info-apy").text(((100 * rewardPerBlock * 10512000) / (totalStaked)).toFixed(2) + "%");
            }

            if (totalStaked > 0) {
                var your_share = ((your_staking / totalStaked) * 100).toFixed(3);
                $("#your-share").text(your_share + "%")
            }
        })

        stakeContract.methods.totalDistributedUsdc().call().then(res => {
            var totalUsdcDistributed = (res / 1e18).toFixed(2);
            $("#info-total-distributed-usdc").text(totalUsdcDistributed);
        })

        stakeContract.methods.rewardPerBlock().call().then(res => {
            rewardPerBlock = (res / 1e18).toFixed(2);
            $("#info-reward-per-block").text(rewardPerBlock);

            if (rewardPerBlock > 0 && totalStaked > 0) {
                $("#info-apy").text(((100 * rewardPerBlock * 10512000) / (totalStaked)).toFixed(2) + "%");
            }
        })

        stakeContract.methods.getCurrentTurn().call().then(res => {
            $("#current-phase").text(res);
        });

        stakeContract.methods.getScheduleCurrentTurn().call().then(res => {
            var openDeposit = res.openDeposit;
            if(openDeposit > 0){
                var startDepositDate = new Date(openDeposit * 1000);
                var endDepositDate = new Date(res.startClaim * 1000);
                var endClaimDate = new Date(res.end * 1000);
                $("#current-deposit-time").text(startDepositDate.toLocaleString() + " - " + endDepositDate.toLocaleString());
                $("#current-claim-time").text(endDepositDate.toLocaleString() + " - " + endClaimDate.toLocaleString());
            }
        })

        if (currentAddr != null && currentAddr != undefined && currentAddr != "") {
            stakeContract.methods.pendingReward(currentAddr).call().then(res => {
                $("#your-usdc-reward").text((res / 1e18).toFixed(2));
            });

            stakeContract.methods.userInfo(currentAddr).call().then(res => {
                your_staking = Math.floor(parseInt(res.amount) / 1e18);
                if (totalStaked > 0) {
                    var your_share = ((your_staking / totalStaked) * 100).toFixed(3);
                    $("#your-share").text(your_share + "%")
                }

                $("#your-staking").text(your_staking.toFixed(2));
                $("#your-staking1").text(your_staking.toFixed(2));
                $("#your-staking-usd").text((priceVali * your_staking).toFixed(2));
            })
        }
    }
}

function update() {
    console.log("Update");
    updateParameters();
}
setInterval(update, 5000)


$("#btn-stake-max").click(() => {
    $("#input-stake").val(your_balance);
    updateLockBonus();
})

$("#btn-unstake-max").click(() => {
    $("#input-unstake").val(your_staking);
})


$("#btn-approve").click(() => {
    try {
        if (tokenContract && currentAddr != null && currentAddr != undefined) {
            tokenContract.methods.approve(ADDRESS_STAKE, "1000000000000000000000000000000000000000000000").send({
                value: 0,
                from: currentAddr,
            })
        }
    } catch (error) {}
})


$("#btn-stake").click(() => {
    try {
        if (stakeContract && currentAddr != null && currentAddr != undefined) {
            var amount = $("#input-stake").val();
            var tokens = web3.utils.toWei(amount, 'ether');
            stakeContract.methods.deposit(tokens).send({
                value: 0,
                from: currentAddr,
            })
        }
    } catch (error) {}
})

$("#btn-unstake").click(() => {
    try {
        if (stakeContract && currentAddr != null && currentAddr != undefined) {
            var amount = $("#input-unstake").val();
            var tokens = web3.utils.toWei(amount, 'ether');
            stakeContract.methods.withdraw(tokens).send({
                value: 0,
                from: currentAddr,
            })
        }
    } catch (error) {}
})


$("#btn-harvest").click(() => {
    try {
        if (stakeContract && currentAddr != null && currentAddr != undefined) {
            stakeContract.methods.withdraw(0).send({
                value: 0,
                from: currentAddr,
            })
        }
    } catch (error) {}
})