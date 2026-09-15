import Link from "next/link";

const ContactSection = ({contactData,quote_form}) => {
    const apiData= contactData;
    
  return (
    
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="fs-5 fw-medium text-primary">{apiData.small_heading}</p>
                    <h2 className="display-5 mb-4">{apiData.heading}</h2>
                    <p>{apiData.description}</p>
                    <Link className="btn btn-primary rounded-pill py-3 px-5" href="contact">CONTACT US</Link>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <h2 className="mb-4">{quote_form.heading}</h2>
                       <form action="javascript:void(0);" className="home-form" id="frm-home-cnt">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Your Name"/>
                                        <label htmlFor="name">Your Name</label>
                                        <span id="name-error" className="text-danger"></span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="mail" name="email" placeholder="Your Email"/>
                                        <label htmlFor="mail">Your Email</label>
                                        <span id="email-error" className="text-danger"></span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="mobile" name="mobile" placeholder="Your Mobile"/>
                                        <label htmlFor="mobile">Your Mobile</label>
                                        <span id="mobile-error" className="text-danger"></span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <select className="form-select" id="service" name="service">
                                            <option>Please Select</option>
                                            <option value="SEO">SEO</option>
                                            <option value="Web Design">Web Design</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Social Media">Social Media</option>
                                            <option value="ORM">ORM</option>
                                            <option value="Logo Design">Logo Design</option>
                                            <option value="Video Marketing">Video Marketing</option>
                                            <option value="App Development">App Development</option>
                                        </select>
                                        <label htmlFor="service">Choose A Service</label>
                                        <span id="service-error" className="text-danger"></span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a message here" id="message" name="message"></textarea>
                                        <label htmlFor="message">Message</label>
                                        <span id="message-error" className="text-danger"></span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <div className="g-recaptcha" data-sitekey="6Le4p5cqAAAAAIF5J8H92lw2FAGzZiknuQsEqNXV" data-callback="enableSubmitBtn"></div>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <button className="btn w-100 py-3" id="submitBtn" disabled="disabled" type="submit">Submit Now</button>
                                </div>
                                <span id="message-status" className="d-none"><b></b></span>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection
