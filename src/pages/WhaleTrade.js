import React from 'react'
import '../css/WhaleTrades.css'
import PriceTickers from '../components/PriceTickers'
import DashFooter from '../components/DashFooter'
function WhaleTrade() {
  return (
      <>
          <section className='bannerAdds_whale_trade'></section>
          {/* <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                </div>
            </div>
          </div> */}
                <PriceTickers />

          <DashFooter/>
      </>
  )
}

export default WhaleTrade