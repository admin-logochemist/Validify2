import React from 'react'
import '../css/header_dashboard.css'
import us from '../images/US.svg'
import bit from '../images/XTVCBTC.svg'
import eth from '../images/XTVCETH.svg'
function Dashheader() {
  return (
    <>
     <div className='own_containered'>
        <div className='header_banner'></div>
     </div>
     <div className='left_to_right'>
        <marquee>
          <div className='animation'>
            <h4 className='coin_names'>
                <img src={us}/>
                <span className='name'>S&P</span>
                <span className='price'>500</span>
                <span className='current_value'>4374.7</span>
                <span className='value'>-10.3(-.24%)</span>
              </h4>
          </div>
          <div className='animation'>
            <h4 className='coin_names'>
                <img src={us}/>
                <span className='name'>Nasdaq</span>
                <span className='price'>100</span>
                <span className='current_value'>4374.7</span>
                <span className='value'>-10.3(-.24%)</span>
              </h4>
          </div>
          <div className='animation'>
            <h4 className='coin_names'>
                <img src={us}/>
                <span className='name'>EUR/USD</span>
                {/* <span className='price'>500</span> */}
                <span className='current_value'>4374.7</span>
                <span className='value'>-10.3(-.24%)</span>
              </h4>
          </div>
          <div className='animation'>
            <h4 className='coin_names'>
                <img src={bit}/>
                <span className='name'>BTC/USD</span>
                {/* <span className='price'>500</span> */}
                <span className='current_value'>4374.7</span>
                <span className='value'>-10.3(-.24%)</span>
              </h4>
          </div>
          <div className='animation'>
            <h4 className='coin_names'>
                <img src={eth}/>
                <span className='name'>ETH/USD</span>
                {/* <span className='price'>500</span> */}
                <span className='current_value'>4374.7</span>
                <span className='value'>-10.3(-.24%)</span>
              </h4>
          </div>
          <div className='animation'>
            <h4 className='coin_names'>
                <img src={eth}/>
                <span className='name'>ETH/USD</span>
                {/* <span className='price'>500</span> */}
                <span className='current_value'>4374.7</span>
                <span className='value'>-10.3(-.24%)</span>
              </h4>
          </div>
          <div className='animation'>
            <h4 className='coin_names'>
                <img src={eth}/>
                <span className='name'>ETH/USD</span>
                {/* <span className='price'>500</span> */}
                <span className='current_value'>4374.7</span>
                <span className='value'>-10.3(-.24%)</span>
              </h4>
          </div>
          <div className='animation'>
            <h4 className='coin_names'>
                <img src={eth}/>
                <span className='name'>ETH/USD</span>
                {/* <span className='price'>500</span> */}
                <span className='current_value'>4374.7</span>
                <span className='value'>-10.3(-.24%)</span>
              </h4>
          </div>
          <div className='animation'>
            <h4 className='coin_names'>
                <img src={eth}/>
                <span className='name'>ETH/USD</span>
                {/* <span className='price'>500</span> */}
                <span className='current_value'>4374.7</span>
                <span className='value'>-10.3(-.24%)</span>
              </h4>
          </div>
        </marquee>
     </div>
    </>
  )
}

export default Dashheader