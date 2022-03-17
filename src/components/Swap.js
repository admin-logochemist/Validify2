import React from 'react'
import '../css/CoinPages.css'
import '../css/SwapTabs.css'
<<<<<<< HEAD
import BitCoin from './BitCoin'
=======
>>>>>>> 8b6ffc91038de59fc801ff53059dc16cad7ad887
export default function Swap() {
  return (
    <>
       <div className='col-lg-3 display_one'>
            <div className="swap_box">
            <h4 className='left-right-head'>Swap</h4>
              <div class="swaps" role="tabpanel">
                  <ul class="swap-tabs" role="tablist">
                      <li role="presentation" class="active"><a href="#Swap" aria-controls="home" role="tab" data-toggle="tab">Swap</a></li>
                      <li role="presentation"><a href="#Buy" aria-controls="profile" role="tab" data-toggle="tab">Buy Crypto</a></li>
                  </ul>
                  <div class="tab-content tabs">
                      <div role="tabpanel" class="tab-pane fade in active" id="Swap">
                         <h3>Hamza</h3>
                      </div>
                      <div role="tabpanel" class="tab-pane fade" id="Buy">
<<<<<<< HEAD
                        <BitCoin/>
=======
                          <h3>Rehman</h3>
>>>>>>> 8b6ffc91038de59fc801ff53059dc16cad7ad887
                      </div>
                  </div>
              </div>
            </div>
       </div>
    </>
  )
}