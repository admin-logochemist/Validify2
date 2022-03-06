import React from 'react'
import '../css/CoinPages.css'
import BTC_icon from '../images/btcpage.png'
export default function BtcCoinPage() {
  return (
    <>
       <div className="own_flex_classes">
         <div className='img_left_side_box'>
           <img src={BTC_icon}/>
           <h3>
             <stronge className='stronge_head'>Wrapped <span className='border_span'></span>QuikSwap</stronge>
             <span className='two'>WETH</span>
             <span className='three'>$4,029.17(+4.75%)</span>
           </h3>
         </div>
         <div className="market_cup">
           <h3>
             <span className="one">Market Cap</span>
             <span className="two">$ 749,582M</span>
           </h3>
         </div>
         <div className="market_cup">
           <h3>
             <span className="one">Current Price</span>
             <span className="two">$ 39,480</span>
             <button className="buy_now">Buy Now</button>
           </h3>
         </div>
       </div>
    </>
  )
}
