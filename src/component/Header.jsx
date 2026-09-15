import Link from "next/link"
import logo from "@/assets/imgi_1_10horses-logo.png"
import Image from "next/image";

const Header = () => {
    
  return (
    <>
    

    <div className="top-header text-lg-start text-center">
        <div className="container">
            <div className="row g-0">
                <div className="col-lg-7 ms-auto text-lg-end text-center">
                    <b className="m-0"><Link href="mailto:admin@atwozweb.com"><i className="ri-mail-ai-line" aria-hidden="true"></i>admin@atwozweb.com</Link></b>
                </div>
            </div>
        </div>
    </div>

    <header className="small sticky-top-1 d-lg-none d-block">
        <div className="overlay"></div>
        <nav>
            <div className="container container-flex">
                <div className="logo">
                    <Link href="/"><img src={logo.src} alt="" /></Link>
                </div>
                <div className="hd_info">

                    

                    <div className="menu">
                        <i className="ri-menu-4-line"></i>
                    </div>


                </div>
                <div className="sidebar">
                    <div className="times">
                        <i className="fa fa-times"></i>
                    </div>
                    <ul className="list-unstyled p-0 m-0">
                        <li><Link href="/" className="active">home</Link></li>
                        <li><Link href="about">about</Link></li>
                        <li className="link-sm">
                            <Link href="service">services</Link>
                            <i className="fa fa-angle-down"></i>
                            <ul className="list-unstyled p-0 m-0 sub-menu-sm">
                                <li><Link href="seo">Seo Service</Link></li>
                                <li><Link href="design">Design</Link></li>
                                <li><Link href="development"> Development</Link></li>
                                <li><Link href="smo-service">Smo Service</Link></li>
                                <li><Link href="orm-service">Orm Service</Link></li>
                                <li><Link href="logo-design">Logo Design</Link></li>
                                <li><Link href="app-development">App Development</Link></li>
                                <li><Link href="video-making">Video Making</Link></li>

                            </ul>
                        </li>
                        <li>
                            <Link href="contact">contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div className="main_header d-none d-lg-block">
        <div className="container-fluid bg-white sticky-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
                 
                    <Link href="/">
                    <Image
                     src={logo.src} 
                     width={140}
                     height={119}
                     alt="" className="" /></Link>
                 
                    <div className="collapse navbar-collapse " id="navbarCollapse">
                        <div className="navbar-nav">
                            <Link href="/" className="nav-item nav-link active">Home</Link>
                            <Link href="about" className="nav-item nav-link">About</Link>
                            <div className="nav-item dropdown">
                                <Link href="service" className="nav-link dropdown-toggle" data-toggle="dropdown">Services</Link>
                                <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                    <Link href="seo" className="dropdown-item">Seo Services</Link>
                                    <Link href="design" className="dropdown-item">Design</Link>
                                    <Link href="development" className="dropdown-item">Development</Link>
                                    <Link href="smo-service" className="dropdown-item">Smo Services</Link>
                                    <Link href="orm-service" className="dropdown-item">Orm Services</Link>
                                    <Link href="logo-design" className="dropdown-item">Logo Design</Link>
                                    <Link href="video-making" className="dropdown-item">Video Making</Link>
                                    <Link href="app-development" className="dropdown-item">App Development</Link>
                                </div>
                            </div>
                            <Link href="portfolio" className="nav-item nav-link">Portfolio</Link>
                           
                            <Link href="price" className="nav-item nav-link">Price</Link>
                            <Link href="blog" className="nav-item nav-link">Blog</Link>
                            <Link href="contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        <div className=" d-none d-lg-block">
                            <Link href="contact" className="btn btn-primary rounded-pill py-2 px-3">Get A Quote</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header
