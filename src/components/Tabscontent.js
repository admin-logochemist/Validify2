// import 'font-awesome/css/font-awesome.min.css'
import $ from "jquery";
import wallet_icon from '../images/wallet-solid.svg'
import BitCoin from '../components/BitCoin';
import bitcoin_icon from '../images/bitcoin.png'
import Ethcoin_icon from '../images/eth.svg'
import Tethercoin_icon from '../images/tether.png'
import Bnb_icon from '../images/bnb.svg'
import Usd_icon from '../images/usd-coin.png'
import TradingSnaps from './TradingSnaps';
import Trades from './Trades';
import { useWeb3 } from '@3rdweb/hooks'

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/tab_content.css'
import BullSays from './BullSays';
import TechnicalAnalysis from './TechnicalAnalysis';
import { CoinsTable } from "./CoinsTable";

function Tabscontent() {
  const {address,connectWallet}=useWeb3()
  return (
    <div class="container own_container">
        <div class="row">
            <div class="col-lg-12 margin-top">
            <div className='vollet_btn'>
            {address?(
        <>
        <div className="connected_btn">          
           <h1>Connected</h1>
          <p>{address}</p>
        </div>
        </>
      ):(
        <>
       <button onClick={()=>connectWallet('injected')}>  <img src={wallet_icon}/>Connect Wallet</button>
       <p> Wallet is not Connected</p>
       </>
      )
      }
          
        </div>
                <div class="tab tabs_flex" role="tabpanel">
                    <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active"><a href="#bit" aria-controls="home" role="tab" data-toggle="tab"><img src={bitcoin_icon}/>Bit</a></li>
                        <li role="presentation"><a href="#ETH" aria-controls="profile" role="tab" data-toggle="tab"><img src={Ethcoin_icon}/> ETH</a></li>
                        <li role="presentation"><a href="#tether" aria-controls="messages" role="tab" data-toggle="tab">< img src={Tethercoin_icon}/> Tether </a></li>
                        <li role="presentation"><a href="#bnb" aria-controls="messages" role="tab" data-toggle="tab">< img src={Bnb_icon}/> BNB </a></li>
                        <li role="presentation"><a href="#usd" aria-controls="messages" role="tab" data-toggle="tab">< img src={Usd_icon}/> USD </a></li>
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
                          </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="tether">
                          <div className='own_flex_class'>
                          </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="bnb">
                          <div className='own_flex_class'>
                          </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="usd">
                          <div className='own_flex_class'>
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