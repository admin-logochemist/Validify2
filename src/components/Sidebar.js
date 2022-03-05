import React from 'react'
import '../css/sidebar.css'
import 'font-awesome/css/font-awesome.min.css'
import footer_logo from '../images/logoFtr.svg'
import head_img from '../images/head_img.png'

function Sidebar() {
  return (
      <>
        <nav className='side_menu'>
            <div className="wrapper">
              <input type="radio" name="slider" id="menu-btn" />
              <input type="radio" name="slider" id="close-btn" />
              <ul className="side-links">
                <img src={footer_logo} className="side_img_logo" />
                <img src={head_img} className="side_img" />
                <li className='li_hover'><i class="fa fa-tachometer side_icons"></i><a href="#"> Dashboard</a></li>
                <li className='li_hover'><i class="fa fa-line-chart side_icons"></i><a href="#">Charts</a></li>

                <li>
                  <input type="checkbox" id="firstDrop" />
                  <label for="firstDrop" className="side_mobile-items">
                    <i class="fa fa-database side_icons"></i>
                      <a> Exchanges<i className="fa fa-caret-down drop_arrow"></i></a>
                  </label>
                  <ul className="drop_menu_one">
                    <li><a>Uniswap</a></li>
                    <li><a>PancakeSwap</a></li>
                    <li><a>SushiSwap</a></li>
                    <li><a>1inch</a></li>
                    <li><a>Kyber</a></li>
                    <li><a>dYdX</a></li>
                    <li><a>0x</a></li>
                    <li><a>IDEX</a></li>
                    <li><a>IDEX</a></li>
                    <li><a>Balancer</a></li>
                    <li><a>DEX.ag</a></li>
                  </ul>
                </li>

                <li className='li_hover'><i class="fa fa-globe side_icons"></i><a href="#">Whale Tarde</a></li>
                <li className='li_hover'><i class="fa fa-database side_icons"></i><a href="#">Platforms</a></li>

                <li>
                  <input type="checkbox" id="scdDrop" />
                  <label for="scdDrop" className="side_mobile-items">
                    <i class="fa fa-database side_icons"></i>
                    <a>Whale Trade  <i className="fa fa-caret-down drop_arrow"></i></a> 
                  </label>
                
                  <ul className="drop_menu_two">
                    <li><a>Charting system</a></li>
                    <li><a>Portfolio Tracker</a></li>
                    <li><a>NFT Platform</a></li>
                    <li><a>Whale Trade</a></li>
                  </ul>
                </li>

              </ul>

              <label for="menu-btn" className="btn menu-btn"><i className="fa fa-bars"></i></label>
              <label for="close-btn" className="btn close-btn"><i className="fa fa-times"></i></label>
            </div>
        </nav>
      </>
  )
}

export default Sidebar