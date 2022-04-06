import React, { useCallback } from 'react'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../css/home.css'
import RetPlayer from 'react-player/lazy'
import video from '../video/proVid.mp4';
import Cardslider from '../components/Cardslider'
import sec_img from '../images/about image.png'
import head_img from '../images/logoIcon.svg'
import chain from '../images/portfolio.svg'
import multichain from '../images/Icon_awesome-coins.svg'
import titan from '../images/crypto-wallet.svg'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
AOS.init();

function Home() {
  return (
    <div>
       <Header />
       
       <div className='container-fluid banner-clss'>
          <div className='row'>
            <div className='col-lg-6'>
                <div className='validate'>
                  <small>VALID Price</small>
                  <h3>$00.00</h3>
                  <div className='main_title_banner'>
                    <h4 className='banner_h4'>ENHANCE YOUR TRADING EXPERIENCE THRU VALID DEFI</h4>
                    <p className='banner_phara'>VALIDEFI An All-in-One crypto platform backed by the valid token,
                       that was made to blur the lines between traditional finance and true financial freedom thru it's multi use case platforms.</p>
                  </div>
                  <div className='btn_banner'>
                    <Link to='' className='link_btn_one'><button className='btn_one Read_more'>Get a Token</button></Link>
                    <Link to="/About" className='link_btn_one'><button className='btn_two Read_more'>Read More</button></Link>
                  </div>
                </div>
            </div>
            <div className='col-lg-6 video'>
              <RetPlayer 
                  playing="playing"
                  preload="true"
                  autoplay="true" 
                  controls="true"
                  muted="true"
                  // url={video}
                  url='https://validefi.global/video/proVid.mp4' 
                  onReady={() => console.log('onReady Callback')}
                  onStart={() => console.log('onStart Callback')}
                  onPause={() => console.log('onPause Callback')}
                  onEnded={() => console.log('onEnded Callback')}
                  onError={() => console.log('onError Callback')}
              />
            </div>
          </div>
       </div>
       <Cardslider />

       {/* valid TOKEN SECTION */}
       <section className='section'>
          <div className='container-fluid'>
            <div className='row'>

              <div className='col-lg-6'>
                <div className='token_sec_img'>
                  <div> <img src={sec_img}/></div>
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='token_sec_text'>
                  <div className='token_head'>
                     <img src={head_img}/>
                     <h4 className='head'>valid TOKEN <span className='border_bnottom'></span></h4>
                  </div>
                  <h3 className='heading'>
                          valid Token Powers the entire VALIDEFI Network without forcing you to own it in order to access its tools platform.
                  </h3>
                  <p className='para_text'>
                  <br/>
                      Unlike like other Multi Use Platforms that force you to buy and own their utility token in order to access its premium features,
                      VALIDEFI gives you access without forcing you to purchase anything.
                      <br/>
                      <br/>
                      Instead VALIDEFI takes a completely unique approach and offers
                      its holders a share in the profitability of the platform thru a completely custom staking and tokenomic system. Unlike typical reflection 
                      rewards tokens valid Holders receive a monthly payout on its PSP (profit sharing platform) that is paid in the form of BUSD Stablecoin.
                  </p>
                  <div className='btn_banner'>
                    <a className='link_btn_one' href="https://validefi.global/pdf/Validefi_Whitepaper_V2_20220329.pdf" target='_blank'><button className='btn_two scd_btn'>Whitepaper</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </section>

       <section>
          <div className="container-fluid custom_conatiner">
            <div className='row'>
              <h4 className='services_heading'>
                <span className='border_head left'></span>
                  Our Services
                <span className='border_head  right'></span>
                </h4>
              </div>
            <div className="row" data-aos='zoom-in' data-aos-offset="300">
                <div className="col-lg-4 col_one">
                    <div className="service-icon">
                        <span><img src={chain}/></span>
                    </div>
                    <div className="serviceBox">
                        <h3 className="title">MultiChain DEX, Charting and <br/> Portfolio Platform</h3>
                        <p className="description">
                           VALIDEFI DX is an All-In-One Multi Chain Charting & Portfolio Tracker with the added benefits of Cross Chain Swapping.
                           <br/>
                           <br/>
                           Take control of your finances.
                        </p>
                        <br/>
                        <div className='btn_banner'>
                           <Link to="/Dashboard" className='link_btn_one' target='_blank' ><button className='btn_one services_btn'>Launch App</button></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col_one">
                    <div className="service-icon">
                        <span><img src={multichain}/></span>
                    </div>
                    <div className="serviceBox">
                        <h3 className="title">MultiChain <br/> NFT Portfolio</h3>
                        <p className="description">
                          T-Link is the first Portfolio of its kind in the ever growing NFT space with Cross Chain Compatibility and Multi Wallet Management.
                          <br/>
                          <br/>
                          All of your NFTS in one place
                        </p>
                        <br/>
                        <div className='btn_banner'>
                           <Link to="" className='link_btn_one'><button className='btn_one services_btn'>Coming Soon</button></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col_large">
                      <div className="service-icon">
                           <span><img src={titan}/></span>
                      </div>
                    <div className="serviceBox">
                        <h3 className="title">Titan Crypto <br/> Wallet</h3>
                        <p className="description">
                          VALIDEFI's TITAN Wallet is a fully functional, cross-chain wallet which 
                          gives retail investors secure access to decentralized cryptocurrency trading, staking, 
                          dAPPS and NFTs with easy access to their funds all from a single, native application.
                        </p>
                        <br/>
                        <div className='btn_banner'>
                            <Link to="/Signup" className='link_btn_one'><button className='btn_one services_btn'>Launch App</button></Link>
                        </div>
                    </div>
                </div>
            </div>
          </div>
       </section>

       <section className='section'>
          <div className='container-fluid custom_conatiner'>
             <div className='row justify-content-centent'>
               <div className='col-lg-12'>
                 <div className='subscripe'>
                    <h4>Subscribe to our Medium Page</h4>
                    <p>Receive an email whenever VALIDEFI Network Publishes a story.</p>
                 </div>
                 <div className='subcripe_field'>
                   <div>
                     <div className='btn_banner'>
                           <a className='link_btn_one' href="https://validefi.medium.com/subscribe" target='_blank'><button className='btn_one scd_btn'>Subscribe</button></a>
                      </div>
                  </div>
                 </div>
               </div>
               {/* <div className='col-lg-6'>
                 <div className='subcripe_field'>
                   <div>
                     <input type='text' placeholder='Your Email'/>
                     <div className='btn_banner'>
                           <button className='btn_one'><a href='https://validefi.medium.com/subscribe'>Subscribe</a></button>
                      </div>
                  </div>
                 </div>
               </div> */}
             </div>
          </div>
       </section>

       <Footer />
       
    </div>
  )
}

export default Home