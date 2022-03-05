import React from "react";
import "../css/contactForm.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const contactForm = () => {
	return (
		<div>
			<div className="form-Contact">
				<div className="container-fluid">
					<div className="row contactFrom-row">
						<div className="col-12">
							<div className="row">
								<div className="col-3 "></div>
								<div className="col-6 ">
									<div className="form contact-Horizontal">
										<h1 className="contact-text">Contact us</h1>
										<div class="row">
											<div className="col">
												<input
													type="text"
													className="form-control input-contact"
													placeholder="First name"
													aria-label="First name"
												/>
											</div>
											<div className="col">
												<input
													type="text"
													className="form-control input-contact"
													placeholder="Last name"
													aria-label="Last name"
												/>
											</div>
                                            
										</div>
                                        <div class="row">
											<div className="col">
												<input
													type="text"
													className="form-control input-contact"
													placeholder="First name"
													aria-label="First name"
												/>
											</div>
											<div className="col">
                                          
												<input
													type="text"
													className="form-control input-contact"
													placeholder="Last name"
													aria-label="Last name"
												></input>
											</div>
                                            
										</div>
                                        <input  text='area' placeholder=""  className="text-area" />
                                        <button type="submit" className="form_btn">Submit</button>
									</div>
                                    
								</div>
                                
								<div className="col-3 "></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default contactForm;
