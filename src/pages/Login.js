import React from 'react'
import Header from '../components/Header';
// import Form from '../components/Form';
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import'../css/form.css' 


export default function Login() {
  return (
    <>     
      <Header />
      <section className="contactForm">
			<div className="container">
				<div className="row contact-row">
					<div class="col-md-12">
						<span class="a-one animate"></span>
						<span class="a-two animate"></span>
						<span class="a-three animate"></span>
						<span class="a-four animate"></span>
						<span class="a-five animate"></span>
						<span class="a-six animate"></span>
						<span class="a-seven animate"></span>
						<span class="a-eight animate"></span>
						<span class="a-nine animate"></span>
						<span class="a-ten animate"></span>
					</div>
					<div className="contact-sec">
                        <form className="contact-form-horizontal">
                            <span className="cont-heading">Login Your Account</span>
                                <div className="form-group">
                                        <label className="control-label" for="exampleInputName2"><i class="fa fa-solid fa-user mt-2"></i></label>
                                        <input required="" type="email" className="form-control" id="exampleInputEmail1" placeholder='Email' />
                                </div>
                                <div className="form-group">
                                    <label className="control-label" for="exampleInputName2"><i class="fa fa-solid fa-user mt-2"></i></label>
                                    <input required="" type="password" className="form-control" placeholder='Password'></input>
                                </div>
                                <div className="msg_box">
                                    <button className="btn-contact">Login</button>
                                </div>
                        </form>
                    </div>
					
				</div>
			</div>
		</section>
      <Footer/>

         
</>

  )
}

