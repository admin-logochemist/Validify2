import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
function Iframe(props) {
    return (
        <div dangerouslySetInnerHTML={ 
            {__html:  props.iframe?props.iframe:""}
        } />
    );
  }
function BitCoin() {
    const iframe = '<iframe id="tradingview_1bbc4" src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_1bbc4&amp;symbol=BTCUSD&amp;interval=D&amp;hidesidetoolbar=1&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=F1F3F6&amp;studies=%5B%5D&amp;hideideas=1&amp;theme=Dark&amp;style=1&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=validefi.global&amp;utm_medium=widget&amp;utm_campaign=chart&amp;utm_term=BTCUSD" frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen=""></iframe>';
    return (
            <div className='col_iframe scd_width'>
                <h3 className='trandingview'>TradingView Chart</h3>
                <Iframe iframe={iframe} />
            </div>
    )
}

export default BitCoin