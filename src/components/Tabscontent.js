
import React from 'react'
import wallet_icon from '../images/wallet-solid.svg'
import BitCoin from '../components/BitCoin';
import bitcoin_icon from '../images/bitcoin.png'
import Ethcoin_icon from '../images/eth.svg'
import Tethercoin_icon from '../images/tether.png'
import Bnb_icon from '../images/bnb.svg'
import Usd_icon from '../images/usd-coin.png'
import  Xrp from '../images/xrp-symbol-white-128.png'
import LUNA from '../images/luna1557227471663.png'
import SOL from '../images/solana (1).png'
import cardano from '../images/cardano (1).png'
import avax from '../images/coin-round-red.png'
import TradingSnaps from './TradingSnaps';
import Trades from './Trades';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/tab_content.css'
import BullSays from './BullSays';
import TechnicalAnalysis from './TechnicalAnalysis';
import { CoinsTable } from "./CoinsTable";
import CoinInfo from "./CoinInfo";


function Tabscontent() {
  return (
    <div class="container own_container">
        <div class="row">
            <div class="col-lg-12 margin-top">
            <div className='vollet_btn'>
              <div className="dash_search_box">
                <input type='text' placeholder="Search Token Name/ Address"/>
                <i className="fa fa-search"></i>
              </div>
                <button>
                  <img src={wallet_icon}/>Connect Wallet
                </button>
            </div>
                <div class="tab tabs_flex" role="tabpanel">
                    <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active"><a href="#bit" aria-controls="home" role="tab" data-toggle="tab"><img src={bitcoin_icon}/>Bit</a></li>
                        <li role="presentation"><a href="#ETH" aria-controls="profile" role="tab" data-toggle="tab"><img src={Ethcoin_icon}/> ETH</a></li>
                        <li role="presentation"><a href="#tether" aria-controls="messages" role="tab" data-toggle="tab">< img src={Tethercoin_icon}/> Tether </a></li>
                        <li role="presentation"><a href="#bnb" aria-controls="messages" role="tab" data-toggle="tab">< img src={Bnb_icon}/> BNB </a></li>
                        <li role="presentation"><a href="#usd" aria-controls="messages" role="tab" data-toggle="tab">< img src={Usd_icon}/> USD </a></li>
                        <li role="presentation"><a href="#xrp" aria-controls="messages" role="tab" data-toggle="tab">< img src={Xrp}/> XRP </a></li>
                        <li role="presentation"><a href="#luna" aria-controls="messages" role="tab" data-toggle="tab">< img src={LUNA}/> LUNA </a></li>
                        <li role="presentation"><a href="#sol" aria-controls="messages" role="tab" data-toggle="tab">< img src={SOL}/> SOL </a></li>
                        <li role="presentation"><a href="#cardano" aria-controls="messages" role="tab" data-toggle="tab">< img src={cardano}/> Cardano </a></li>
                        <li role="presentation"><a href="#avax" aria-controls="messages" role="tab" data-toggle="tab">< img src={avax}/> AVALANCHE </a></li>
                    </ul>
                    <div class="tab-content tabs">
                        <div role="tabpanel" class="tab-pane fade in active" id="bit">
                          <div className='own_flex_class'>
                          {/* <BitCoin/> */}
                         
                          <CoinsTable/>
                          
                          {/* <TradingSnaps/> */}
                          {/* <Trades /> */}
                          {/* <BullSays /> */}
                          {/* <TechnicalAnalysis /> */}
                          </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="ETH">
                        <div className='own_flex_class'>
                        <CoinsTable/>
                          </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="tether">
                          <div className='own_flex_class'>
                          <CoinsTable/>
                          </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="bnb">
                          <div className='own_flex_class'>
                          <CoinsTable/>
                          </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="usd">
                          <div className='own_flex_class'>
                          <CoinsTable/>
                          </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="xrp">
                          <div className='own_flex_class'>
                          <CoinsTable/>
                          </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="luna">
                          <div className='own_flex_class'>
                          <CoinsTable/>
                          </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="sol">
                          <div className='own_flex_class'>
                          <CoinsTable/>
                          </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="cardano">
                          <div className='own_flex_class'>
                          <CoinsTable/>
                          </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="avax">
                          <div className='own_flex_class'>
                          <CoinsTable/>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tabscontent