import React from 'react'
import'../css/Teaminfo.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Valliam_img from '../images/valliam.jpg'
import Kristiana_img from '../images/KRISTIANA.jpg'
import Steve_img from '../images/STEVE.jpg'
import Miranda_img from '../images/MIRANDA.jpg'


export default function Teaminfo() {
  return (
     <>
    <div className="container">
       <div className='row' >
           <h3 className='Team-heading'>
           <span className='border_head left'></span>
                 validefi team
                <span className='border_head  right'></span>
               </h3>
               <p className='team-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
           </div>
    <div className="row our-team-row">
        <div className="col-md-4 col-sm-4">
            <div className="our-team">
                <div className="pic">   
                   <div> <img src={Valliam_img} /> </div >
                </div>
                <h3 className="title">Williamson</h3>
                <span className="post">Trading Advisor</span>
                <ul className="social">
                    <li><a href="#" className="fa fab fa-facebook"></a></li>
                    <li><a href="#" className="fa fab fa-twitter"></a></li>
                    <li><a href="#" className="fa fab fa-google-plus"></a></li>
                    <li><a href="#" className="fa fab fa-linkedin"></a></li>
                </ul>
            </div>
        </div>
        <div className="col-md-4 col-sm-4">
            <div className="our-team">
                <div className="pic">
                    <img src={Kristiana_img} />
                </div>
                <h3 className="title">Kristiana</h3>
                <span className="post">Sales Officer</span>
                <ul className="social">
                    <li><a href="#" className="fa fab fa-facebook"></a></li>
                    <li><a href="#" className="fa fab fa-twitter"></a></li>
                    <li><a href="#" className="fa fab fa-google-plus"></a></li>
                    <li><a href="#" className="fa fab fa-linkedin"></a></li>
                </ul>
            </div>
        </div>
        <div className="col-md-4 col-sm-4">
            <div className="our-team">
                <div className="pic">
                    <img src={Steve_img} />
                </div>
                <h3 className="title">STEVE</h3>
                <span className="post">Editor</span>
                <ul className="social">
                    <li><a href="#" className="fa fab fa-facebook"></a></li>
                    <li><a href="#" className="fa fab fa-twitter"></a></li>
                    <li><a href="#" className="fa fab fa-google-plus"></a></li>
                    <li><a href="#" className="fa fab fa-linkedin"></a></li>
                </ul>
            </div>
        </div>
        {/* <div className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={Miranda_img} />
                </div>
                <h3 className="title">Kristiana</h3>
                <span className="post">Web Designer</span>
                <ul className="social">
                    <li><a href="#" className="fa fab fa-facebook"></a></li>
                    <li><a href="#" className="fa fab fa-twitter"></a></li>
                    <li><a href="#" className="fa fab fa-google-plus"></a></li>
                    <li><a href="#" className="fa fab fa-linkedin"></a></li>
                </ul>
            </div>
        </div> */}
    </div>
</div>
  <div className='container'>
   <div className="row our-team-row1">
        <div className="col-md-4 col-sm-4">
            <div className="our-team1">
                <div className="pic">   
                   <div> <img src={Valliam_img} /> </div >
                </div>
                <h3 className="title">Williamson</h3>
                <span className="post">Trading Advisor</span>
                <ul className="social">
                    <li><a href="#" className="fa fab fa-facebook"></a></li>
                    <li><a href="#" className="fa fab fa-twitter"></a></li>
                    <li><a href="#" className="fa fab fa-google-plus"></a></li>
                    <li><a href="#" className="fa fab fa-linkedin"></a></li>
                </ul>
            </div>
        </div>
        <div className="col-md-4 col-sm-4">
            <div className="our-team1">
                <div className="pic">
                    <img src={Kristiana_img} />
                </div>
                <h3 className="title">Kristiana</h3>
                <span className="post">Sales Officer</span>
                <ul className="social">
                    <li><a href="#" className="fa fab fa-facebook"></a></li>
                    <li><a href="#" className="fa fab fa-twitter"></a></li>
                    <li><a href="#" className="fa fab fa-google-plus"></a></li>
                    <li><a href="#" className="fa fab fa-linkedin"></a></li>
                </ul>
            </div>
        </div>
        <div className="col-md-4 col-sm-4">
            <div className="our-team1">
                <div className="pic">
                    <img src={Steve_img} />
                </div>
                <h3 className="title">STEVE</h3>
                <span className="post">Editor</span>
                <ul className="social">
                    <li><a href="#" className="fa fab fa-facebook"></a></li>
                    <li><a href="#" className="fa fab fa-twitter"></a></li>
                    <li><a href="#" className="fa fab fa-google-plus"></a></li>
                    <li><a href="#" className="fa fab fa-linkedin"></a></li>
                </ul>
            </div>
        </div>
        {/* <div className="col-md-4 col-sm-4">
            <div className="our-team1">
                <div className="pic">
                    <img src={Kristiana_img} />
                </div>
                <h3 className="title">Kristiana</h3>
                <span className="post">Web Designer</span>
                <ul className="social">
                    <li><a href="#" className="fa fab fa-facebook"></a></li>
                    <li><a href="#" className="fa fab fa-twitter"></a></li>
                    <li><a href="#" className="fa fab fa-google-plus"></a></li>
                    <li><a href="#" className="fa fab fa-linkedin"></a></li>
                </ul>
            </div>
        </div>
        <div className="col-md-4 col-sm-4">
            <div className="our-team1">
                <div className="pic">
                    <img src={Steve_img} />
                </div>
                <h3 className="title">Kristiana</h3>
                <span className="post">Web Designer</span>
                <ul className="social">
                    <li><a href="#" className="fa fab fa-facebook"></a></li>
                    <li><a href="#" className="fa fab fa-twitter"></a></li>
                    <li><a href="#" className="fa fab fa-google-plus"></a></li>
                    <li><a href="#" className="fa fab fa-linkedin"></a></li>
                </ul>
            </div>
        </div> */}
    </div>
       </div>

   </>
  )
}
