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
import BTCSwap from './BTCSwap'
import Portfolio from './Portfolio'
import BTCSwaptwo from './BTCSwaptwo'
import ETHSwap from './ETHSwap'
import ETHSwaptow from './ETHSwaptow'
import TETSwap from './TETSwap'
import TETSwaptwo from './TETSwaptwo'
import BNBSwap from './BNBSwap'
import BNBSwaptow from './BNBSwaptwo'
import USDSwap from './USDSwap'
import USDSwaptow from './USDSwaptwo'
import XRPSwap from './XRPSwap'
import XRPSwaptow from './XRPSwaptwo'
import LUNASwap from './LUNASwap'
import LUNASwaptow from './LUNASwaptwo'
import SOLSwap from './SOLSwap'
import SOLSwaptow from './SOLSwaptwo'
import BITSwap from './BITSwap'
import BITSwaptow from './BITSwaptwo'
import TRONSwap from './TRONSwap'
import TRONSwaptow from './TRONSwaptwo'

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
                        <li role="presentation"><a href="#cardano" aria-controls="messages" role="tab" data-toggle="tab">< img src={rond}/> Bitshiba </a></li>
                        <li role="presentation"><a href="#avax" aria-controls="messages" role="tab" data-toggle="tab">< img src={tron}/> Tron </a></li>
                    </ul>
                    <div class="tab-content tabs container-fluid">
                        <div role="tabpanel" name="bitcoin" class="tab-pane fade in active row justify-content-center" id="bit">
                        {/* <div className='col-lg-3'></div> */}
                        <BTCSwap />
                        <CoinInfos id="bitcoin"/>
                        <Portfolio />
                        <BTCSwaptwo />
                        </div>
                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="ETH">
                        <ETHSwap />
                        <CoinInfos id="ethereum" />
                        <Portfolio />
                        <ETHSwaptow />
                        </div>
                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="tetherss">
                        <TETSwap />
                        <CoinInfos id="tether" />
                        <Portfolio/>
                        <TETSwaptwo/>
                        </div>
                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="bnb">
                        <BNBSwap />
                        <CoinInfos id="binancecoin" />
                        <Portfolio />
                        <BNBSwaptow />
                        </div>
                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="usd">
                        <USDSwap />
                        <CoinInfos id="usd-coin"/>
                        <Portfolio />
                        <USDSwaptow />
                        </div>
                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="xrp">
                        <XRPSwap />
                        <CoinInfos id="ripple"/>
                        <Portfolio />
                        <XRPSwaptow />
                        </div>
                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="luna">
                        <LUNASwap />
                        <CoinInfos id="terra-luna" />
                        <Portfolio />
                        <LUNASwaptow />
                        </div>
                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="sol">
                        <SOLSwap />
                        <CoinInfos id="solana" />
                        <Portfolio />
                        <SOLSwaptow />
                        </div>
                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="cardano">
                        <BITSwap />
                        <CoinInfos id="bitshiba" />
                        <Portfolio />
                        <BITSwaptow />
                        </div>
                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="avax">
                        <TRONSwap />
                        <CoinInfos id="tron" />
                        <Portfolio />
                        <TRONSwaptow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tabscontent