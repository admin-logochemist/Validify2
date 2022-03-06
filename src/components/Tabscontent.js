
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
import cardano from '../images/cardano (1).png'
import avax from '../images/coin-round-red.png'
import CoinInfos from './CoinInfos';
import { useWeb3 } from '@3rdweb/hooks'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/tab_content.css'
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
                        <li role="presentation"><a href="#xrp" aria-controls="messages" role="tab" data-toggle="tab">< img src={Xrp}/> XRP </a></li>
                        <li role="presentation"><a href="#luna" aria-controls="messages" role="tab" data-toggle="tab">< img src={LUNA}/> LUNA </a></li>
                        <li role="presentation"><a href="#sol" aria-controls="messages" role="tab" data-toggle="tab">< img src={SOL}/> SOL </a></li>
                        <li role="presentation"><a href="#cardano" aria-controls="messages" role="tab" data-toggle="tab">< img src={cardano}/> Cardano </a></li>
                        <li role="presentation"><a href="#avax" aria-controls="messages" role="tab" data-toggle="tab">< img src={avax}/> AVALANCHE </a></li>
                    </ul>
                    <div class="tab-content tabs">
                        <div role="tabpanel" class="tab-pane fade in active" id="bit">
                        <CoinInfos/>
                        <CoinsTable/>
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