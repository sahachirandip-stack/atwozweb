import Link from "next/link";
import ContactForm from "./ContactForm";

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
                       <ContactForm />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection
