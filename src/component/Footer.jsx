import Link from "next/link"
import footerLogo from "@/assets/imgi_22_atwoz-footer-logo.png"
import mapImage from "@/assets/imgi_23_pngegg.png"

import Image from "next/image"

const Footer = () => {
  return (
    <>
      

    <footer className="footer">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-6">
                    <div className="row g-3">
                        <div className="col-12">
                            <Link href="/">
                                <Image
                                 src={footerLogo.src}
                                 width={155} 
                                 height={132}
                                 className="mb-3 " alt=""/>
                            
                            </Link>
        
                            <p>We are certified digital marketing company dedicated to offer the best industry standard services for your businesses. To get the faster ROI, please contact us today!</p>
                        </div>

                        <div className="col-lg-6">
                            <div className="heading">
                                <h5>Contact info</h5>

                                <ul className="contact-info">
                                    <li><i className="ri-map-pin-fill"></i> Kolkata, India</li>

                                   
                                    <li><Link href="mailto:admin@atwozweb.com"><i className="ri-mail-ai-line"></i> admin@atwozweb.com</Link></li>

                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 d-lg-block d-none">
                            <Image src={mapImage.src}
                            width={310}
                            height={188} className="   img-fluid" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 ms-auto">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="heading">
                                <h5>Usefull Link</h5>

                                <ul className="contact-info">
                                    <li><Link href="/">Home</Link> </li>
                                    <li><Link href="about">About</Link> </li>
                                    <li><Link href="service">Services</Link> </li>
                                    <li><Link href="portfolio">Portfolio</Link></li>
                                    <li><Link href="price">Prices</Link> </li>
                                    <li><Link href="blog">Blog</Link></li>
                                    <li><Link href="contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="heading">
                                <h5>Services</h5>

                                <ul className="contact-info">
                                    <li> <Link href="design">Design</Link>
                                      </li>
                                    <li> 
                                        <Link href="seo">Seo Services</Link>
                                    </li>
                                    <li> <Link href="development">Development</Link>
                                    </li>
                                    <li> 
                                        <Link href="smo-service">Smo Services</Link>
                                       </li>
                                    <li> 
                                        <Link href="orm-service">Orm Services</Link>
                                       </li>
                                    <li> 
                                        <Link href="logo-design">Logo Design</Link>
                                        </li>
                                    <li> 
                                        <Link href="video-making">Video Making</Link>
                                        </li>
                                    <li> 
                                        <Link href="app-development">App Development</Link></li>

                                 
                                    
                                       
                                   
                                </ul>
                            </div>
                        </div>

                        <div className="col-12">
                            <hr/>
                        </div>

                        <div className="col-12">
                            <div className="d-flex heading">
                                <h5>Follow Us :</h5>
                                <Link className="btn btn-square btn-light rounded-circle me-2" href="https://x.com/atwozweb" target="_blank"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square btn-light rounded-circle me-2" href="https://www.facebook.com/atwozweb" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square btn-light rounded-circle me-2" href="https://www.linkedin.com/company/atwozweb" target="_blank"><i className="fab fa-linkedin"></i></Link>
                                <Link className="btn btn-square btn-light rounded-circle me-2" href="https://www.instagram.com/atwozweb/" target="_blank"><i className="fab fa-instagram"></i></Link>
                                <Link className="btn btn-square btn-light rounded-circle me-2" href="https://wa.me/6290047104" target="_blank"><i className="fab fa-whatsapp"></i></Link>
                            </div>
                        </div>

                  
                    </div>
                </div>


                <div className="col-12">
                    <hr/>
                </div>

                <div className="col-12">
                    <div className="copy-right ">
                        <p>Copyright © 2024 atwozweb.com - All Rights Reserved.</p>
                </div>
            </div>
        </div>
        </div>
    </footer>
  
    <Link href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="bi bi-arrow-up"></i>
    </Link>

    </>
  )
}

export default Footer
