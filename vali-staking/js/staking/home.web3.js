const addZero = (x) => (x < 10 && x >= 0) ? "0" + x : x;

const WalletConnectProvider = window.WalletConnectProvider.default;
const Web3Modal = window.Web3Modal.default;

/* STAKING */
var currentAddr;
var networkID = 0;
var tokenContract = null;
var wBNBContract = null;
var web3 = null;
var web3Temp = null;

var priceVali = 0.01;

window.addEventListener('load', () => {
    //Reset
    currentAddr = '';
    tokenContract = null;
    wBNBContract = null;
    web3 = null;

    $.getJSON('https://bsc.api.0x.org/swap/v1/quote?buyToken=' + ADDRESS_TOKEN + '&sellToken=BUSD&sellAmount=100000000000000000', function(data) {
        if (data && data.price) {
            priceVali = (1 / data.price).toFixed(6);
            $("#vali-price").text(priceVali + " USD");
            $("#vali-cap").text((priceVali* 500000000).toFixed(0) + " USD");
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
    wBNBContract = await new web3.eth.Contract(ABI_TOKEN, ADDRESS_WBNB);
    update();
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
        wBNBContract = await new web3.eth.Contract(ABI_TOKEN, ADDRESS_WBNB);

        getCurrentWallet();
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

async function getCurrentWallet() {
    const accounts = await web3.eth.getAccounts();
    if(accounts.length > 0){
        currentAddr = accounts[0];
        var connectedAddr = currentAddr[0] + currentAddr[1] + currentAddr[2] + currentAddr[3] + '...' + currentAddr[currentAddr.length - 4] + currentAddr[currentAddr.length - 3] + currentAddr[currentAddr.length - 2] + currentAddr[currentAddr.length - 1]
        $("#btn-connect-meta").text(connectedAddr);
        $("#button-connect").prop("disabled", true);
    }
}

async function updateParameters() {

    if (tokenContract) {
        tokenContract.methods.uniswapV2Pair().call().then(res => {
            var pair = res;
            if (wBNBContract) {
                wBNBContract.methods.balanceOf(pair).call().then(res1 => {
                    $("#liquid-bnb").text((res1/1e18).toFixed(2) + " BNB");
                })
            }   
        })
    
    }   


}

function update() {
    console.log("Update");
    updateParameters();
}
setInterval(update, 5000)