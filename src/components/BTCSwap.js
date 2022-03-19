import React from 'react'
import '../css/CoinPages.css'
import '../css/SwapTabs.css'
import BitCoin from './BitCoin'
export default function BTCSwap() {
  return (
    <>
       <div className='col-lg-3 display_one'>
            <div className="swap_box">
            <h4 className='left-right-head'>Swap</h4>
              <div class="swaps" role="tabpanel">
                  <ul class="swap-tabs" role="tablist">
                      <li role="presentation" class="active"><a href="#btcSwap" aria-controls="home" role="tab" data-toggle="tab">Swap</a></li>
                      <li role="presentation"><a href="#btcBuy" aria-controls="profile" role="tab" data-toggle="tab">Buy Crypto</a></li>
                  </ul>
                  <div class="tab-content tabs">
                      <div role="tabpanel" class="tab-pane fade in active" id="btcSwap">
                         <h3>Swap</h3>
                      </div>
                      <div role="tabpanel" class="tab-pane fade" id="btcBuy">
                        <BitCoin/>
                      </div>
                  </div>
              </div>
            </div>
       </div>
    </>
  )
}