import React from 'react'
import wallet_icon from '../images/wallet-solid.svg'
import bitcoin_icon from '../images/bitcoin.png'
import Ethcoin_icon from '../images/eth.svg'
import Tethercoin_icon from '../images/tether.png'
import Bnb_icon from '../images/bnb.svg'
import Usd_icon from '../images/usd-coin.png'
import  Xrp from '../images/xrp-symbol-white-128.png'
import LUNA from '../images/luna1557227471663.png'
import SOL from '../images/solana (1).png'
import rond from '../images/elrond-egld-logo-487BD97FF9-seeklogo.com.png'
import tron from '../images/415-4156138_trx-tron-hd-png-download.png'
// import cardano from '../images/cardano (1).png'
// import avax from '../images/coin-round-red.png'
import CoinInfos from './CoinInfos';
import { useWeb3 } from '@3rdweb/hooks'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/tab_content.css'
import Swap from './Swap'
import Portfolio from './Portfolio'
import Swaptwo from './Swaptwo'

function Tabscontent() {
  const {address,connectWallet}=useWeb3()
  return (
    <div class="container own_container">
        <div class="row">
            <div class="col-lg-12 margin-top">
            <div className='vollet_btn'>
            <div className="dash_search_box">
                <input type='text' placeholder="Search Token Name/ Address"/>
                <i className="fa fa-search"></i>
              </div>
              {address?(
                <>
                  <div className="connected_btn">          
                    <h1>Connected</h1>
                    <p>{address}</p>
                  </div>
                </>
      ):(
                <div className='vollet_msg'>
                  <button onClick={()=>connectWallet('injected')}>  <img src={wallet_icon} alt="d"/>Connect Wallet</button>
                  <p> Wallet is not Connected</p>
                </div>
      )}
          
            </div>
                <div class="tab tabs_flex" role="tabpanel">
                <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active"><a href="#bit" aria-controls="home" role="tab" data-toggle="tab"><img src={bitcoin_icon} />Bit</a></li>
                        <li role="presentation"><a href="#ETH" aria-controls="profile" role="tab" data-toggle="tab"><img src={Ethcoin_icon}/> ETH</a></li>
                        <li role="presentation"><a href="#tetherss" aria-controls="messages" role="tab" data-toggle="tab">< img src={Tethercoin_icon}/> Tether </a></li>
                        <li role="presentation"><a href="#bnb" aria-controls="messages" role="tab" data-toggle="tab">< img src={Bnb_icon}/> BNB </a></li>
                        <li role="presentation"><a href="#usd" aria-controls="messages" role="tab" data-toggle="tab">< img src={Usd_icon}/> USD </a></li>
                        <li role="presentation"><a href="#xrp" aria-controls="messages" role="tab" data-toggle="tab">< img src={Xrp}/> XRP </a></li>
                        <li role="presentation"><a href="#luna" aria-controls="messages" role="tab" data-toggle="tab">< img src={LUNA}/> LUNA </a></li>
                        <li role="presentation"><a href="#sol" aria-controls="messages" role="tab" data-toggle="tab">< img src={SOL}/> SOL </a></li>
                        <li role="presentation"><a href="#cardano" aria-controls="messages" role="tab" data-toggle="tab">< img src={rond}/> Elrond-erd </a></li>
                        <li role="presentation"><a href="#avax" aria-controls="messages" role="tab" data-toggle="tab">< img src={tron}/> Tron </a></li>
                    </ul>
                    <div class="tab-content tabs container-fluid">
                        <div role="tabpanel" name="bitcoin" class="tab-pane fade in active row justify-content-center" id="bit">
                        {/* <div className='col-lg-3'></div> */}
                        <Swap />
                        <CoinInfos id="bitcoin"/>
                        <Portfolio/>
                        <Swaptwo/>
                        </div>
                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="ETH">
                        <Swap />
                        <CoinInfos id="ethereum"/>
                        <Portfolio/>
                        <Swaptwo/>
                        </div>
                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="tetherss">
                        <Swap />
                        <CoinInfos id="tether"/>
                        <Portfolio/>
                        <Swaptwo/>
                        </div>
                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="bnb">
                        <Swap />
                        <CoinInfos id="binancecoin"/>
                        <Portfolio/>
                        <Swaptwo/>
                        </div>
                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="usd">
                        <Swap />
                        <CoinInfos id="usd-coin"/>
                        <Portfolio/>
                        <Swaptwo/>
                        </div>
                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="xrp">
                        <Swap />
                        <CoinInfos id="ripple"/>
                        <Portfolio/>
                        <Swaptwo/>
                        </div>
                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="luna">
                        <Swap />
                        <CoinInfos id="terra-luna"/>
                        <Portfolio/>
                        <Swaptwo/>
                        </div>
                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="sol">
                        <Swap />
                        <CoinInfos id="solana"/>
                        <Portfolio/>
                        <Swaptwo/>
                        </div>
                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="cardano">
                        <Swap />
                        <CoinInfos id="shiba-inu"/>
                        <Portfolio/>
                        <Swaptwo/>
                        </div>
                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="avax">
                        <Swap />
                        <CoinInfos id="tron"/>
                        <Portfolio/>
                        <Swaptwo/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tabscontent