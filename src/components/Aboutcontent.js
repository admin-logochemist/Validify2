import React from 'react'
import '../css/About.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import left_img from '../images/about_bg.png'

const Aboutcontent = () => {
  return (
    <section className='bg_about'> 
        <div className="container about_container">
            <div className="row about-row side">
                <div className="col-lg-6 own_col">
                    <h1 className='about_heading mt-5'>About Us</h1>
                    <p className='about_para'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam neque interdum arcu dignissim, ut tempor magna viverra.
                      Suspendisse suscipit est erat, quis tincidunt ex posuere vestibulum. Suspendisse fringilla urna vel finibus aliquam.
                      Fusce laoreet egestas purus sit amet iaculis. Vestibulum sollicitudin, dui a molestie lacinia,
                      neque turpis molestie odio, in rhoncus mauris sapien vitae ipsum. Integer nisi felis, elementum at erat at,
                      sollicitudin ornare lacus. Nunc porttitor tortor vitae odio suscipit auctor. Cras laoreet, 
                      dolor ac vulputate rhoncus, neque nunc lacinia libero, at rhoncus justo elit in leo. Nulla
                      ornare tristique ex, vitae ullamcorper orci. Integer ultricies sit amet elit at commodo. 
                      Donec venenatis, dui vel tincidunt vehicula, sapien est sagittis nulla, ac commodo leo mauris feugiat nisl.
                      Pellentesque vel risus vestibulum mauris ultricies vulputate. Donec euismod mauris eget faucibus bibendum.
                      Nam et mi imperdiet, laoreet elit eu, dapibus odio.
                    </p>
                </div>
                <div className="col-lg-6 right-side own_col">
                  <img src={left_img}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutcontent