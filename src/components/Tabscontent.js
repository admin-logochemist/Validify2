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

import BTCCoin from './BTCCoin';
import ETHCoin from './ETHCoin';
import TetherCoin from './TetherCoin';
import BNBCoin from './BNBCoin';
import USDCoin from './USDCoin';
import XRPCoin from './XRPCoin';
import LUNACoin from './LUNACoin';
import SOLCoin from './SOLCoin';
import SHIBACoin from './SHIBACoin';
import TRONCoin from './TRONCoin';

import CoinInfos from './CoinInfos';
import Trades from "./Trades";
import Trendinghr from './Trending24hr'
import BullSays from './BullSays'
import Technical from './TechnicalAnalysis'

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
import TradesETH from './TradesETH'
import TradesTether from './TradesTether'
import TradesBNB from './TradesBNB'
import TradesUSDC from './TradesUSDC'
import TradesXRP from './TradesXRP'
import TradesTerra from './TradesTerra'
import TradesSol from './TradesSol'
import TradesShiba from './TradesShiba'
import TradesTron from './TradesTron'

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
                </>):
                (
                <div className='vollet_msg'>
                  <button onClick={()=>connectWallet('injected')}>  <img src={wallet_icon} alt="d"/>Connect Wallet</button>
                  <p> Wallet is not Connected</p>
                </div>)}
          
            </div>
                <div class="tab tabs_flex" role="tabpanel">
                    <div className='hamza'>
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active"><a href="#bit" aria-controls="home" role="tab" data-toggle="tab"><img src={bitcoin_icon} />Bit</a></li>
                            <li role="presentation"><a href="#ETH" aria-controls="profile" role="tab" data-toggle="tab"><img src={Ethcoin_icon}/> ETH</a></li>
                            <li role="presentation"><a href="#tetherss" aria-controls="messages" role="tab" data-toggle="tab">< img src={Tethercoin_icon}/> Tether </a></li>
                            <li role="presentation"><a href="#bnb" aria-controls="messages" role="tab" data-toggle="tab">< img src={Bnb_icon}/> BNB </a></li>
                            <li role="presentation"><a href="#usd" aria-controls="messages" role="tab" data-toggle="tab">< img src={Usd_icon}/> USD </a></li>
                            <li role="presentation"><a href="#xrp" aria-controls="messages" role="tab" data-toggle="tab">< img src={Xrp}/> XRP </a></li>
                            <li role="presentation"><a href="#luna" aria-controls="messages" role="tab" data-toggle="tab">< img src={LUNA}/> Terra </a></li>
                            <li role="presentation"><a href="#sol" aria-controls="messages" role="tab" data-toggle="tab">< img src={SOL}/> SOL </a></li>
                            <li role="presentation"><a href="#cardano" aria-controls="messages" role="tab" data-toggle="tab">< img src={rond}/> Bitshiba </a></li>
                            <li role="presentation"><a href="#avax" aria-controls="messages" role="tab" data-toggle="tab">< img src={tron}/> Tron </a></li>
                        </ul>
                    </div>
                    <div class="tab-content tabs container-fluid">

                        <div role="tabpanel" name="bitcoin" class="tab-pane fade in active row justify-content-center" id="bit">
                          <BTCSwap />
                          <div className='col-lg-9 responsive_col'>
                            <CoinInfos id="bitcoin"/>
                            <BTCCoin/>
                          </div>
                          <Portfolio />
                          <BTCSwaptwo />
                          <div className='col-lg-6 trades_col mt-5'>
                              <Trades/>
                          </div>
                          <div className='col-lg-6 responsive_col mt-5'>
                            <BullSays/>
                          </div>
                          <div className='col-lg-12 responsive_col mt-5'>
                            <Trendinghr/>
                          </div>
                        </div>

                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="ETH">
                            <ETHSwap />
                            <div className='col-lg-9 responsive_col'>
                              <CoinInfos id="ethereum" />
                              <ETHCoin/>
                            </div>
                            <Portfolio />
                            <ETHSwaptow />
                            <div className='col-lg-6 trades_col mt-5'>
                              <TradesETH/>
                            </div>
                            <div className='col-lg-6 responsive_col mt-5'>
                              <BullSays/>
                            </div>
                            <div className='col-lg-12 responsive_col mt-5'>
                              <Trendinghr/>
                            </div>
                        </div>

                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="tetherss">
                            <TETSwap />
                            <div className='col-lg-9 responsive_col'>
                              <CoinInfos id="tether" />
                              <TetherCoin/>
                            </div>
                            <Portfolio />
                            <TETSwaptwo />
                            <div className='col-lg-6 trades_col mt-5'>
                              <TradesTether/>
                            </div>
                            <div className='col-lg-6 responsive_col mt-5'>
                              <BullSays/>
                            </div>
                            <div className='col-lg-12 responsive_col mt-5'>
                              <Trendinghr/>
                            </div>
                        </div>

                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="bnb">
                            <BNBSwap />
                            <div className='col-lg-9 responsive_col'>
                              <CoinInfos id="binancecoin" />
                              <BNBCoin/>
                            </div>
                            <Portfolio />
                            <BNBSwaptow />
                            <div className='col-lg-6 trades_col mt-5'>
                              <TradesBNB/>
                            </div>
                            <div className='col-lg-6 responsive_col mt-5'>
                              <BullSays/>
                            </div>
                            <div className='col-lg-12 responsive_col mt-5'>
                              <Trendinghr/>
                            </div>
                        </div>

                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="usd">
                              <USDSwap />
                              <div className='col-lg-9 responsive_col'>
                                  <CoinInfos id="usd-coin" />
                                  <USDCoin/>
                              </div>
                              <Portfolio />
                              <USDSwaptow />
                              <div className='col-lg-6 trades_col mt-5'>
                                <TradesUSDC/>
                              </div>
                              <div className='col-lg-6 responsive_col mt-5'>
                                <BullSays/>
                              </div>
                              <div className='col-lg-12 responsive_col mt-5'>
                                <Trendinghr/>
                              </div>
                        </div>

                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="xrp">
                            <XRPSwap />
                            <div className='col-lg-9 responsive_col'>
                                <CoinInfos id="ripple" />
                                <XRPCoin/>
                            </div>
                            <Portfolio />
                            <XRPSwaptow />
                            <div className='col-lg-6 trades_col mt-5'>
                                  <TradesXRP/>
                            </div>
                            <div className='col-lg-6 responsive_col mt-5'>
                              <BullSays/>
                            </div>
                            <div className='col-lg-12 responsive_col mt-5'>
                              <Trendinghr/>
                            </div>
                        </div>

                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="luna">
                            <LUNASwap />
                            <div className='col-lg-9 responsive_col'>
                                <CoinInfos id="terra-luna" />
                                <LUNACoin/>
                            </div>
                            <Portfolio />
                            <LUNASwaptow />
                            <div className='col-lg-6 trades_col mt-5'>
                                  <TradesTerra/>
                            </div>
                            <div className='col-lg-6 responsive_col mt-5'>
                              <BullSays/>
                            </div>
                            <div className='col-lg-12 responsive_col mt-5'>
                              <Trendinghr/>
                            </div>
                        </div>

                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="sol">
                              <SOLSwap />
                              <div className='col-lg-9 responsive_col'>
                                  <CoinInfos id="solana" />
                                  <SOLCoin/>
                              </div>
                              <Portfolio />
                              <SOLSwaptow />
                              <div className='col-lg-6 trades_col mt-5'>
                                  <TradesSol/>
                              </div>
                              <div className='col-lg-6 responsive_col mt-5'>
                                <BullSays/>
                              </div>
                              <div className='col-lg-12 responsive_col mt-5'>
                                <Trendinghr/>
                              </div>
                        </div>

                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="cardano">
                            <BITSwap />
                            <div className='col-lg-9 responsive_col'>
                                  <CoinInfos id="bitshiba" />
                                  <SHIBACoin/>
                              </div>
                              <Portfolio />
                              <BITSwaptow />
                              <div className='col-lg-6 trades_col mt-5'>
                                  <TradesShiba/>
                              </div>
                              <div className='col-lg-6 responsive_col mt-5'>
                                <BullSays/>
                              </div>
                              <div className='col-lg-12 responsive_col mt-5'>
                                <Trendinghr/>
                              </div>
                        </div>

                        <div role="tabpanel" className="tab-pane fade row justify-content-center" id="avax">
                            <TRONSwap />
                            <div className='col-lg-9 responsive_col'>
                                <CoinInfos id="tron" />
                                <TRONCoin/>
                            </div>
                            <Portfolio />
                            <TRONSwaptow />
                            <div className='col-lg-6 trades_col mt-5'>
                                  <TradesTron/>
                            </div>
                            <div className='col-lg-6 responsive_col mt-5'>
                              <BullSays/>
                            </div>
                            <div className='col-lg-12 responsive_col mt-5'>
                              <Trendinghr/>
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