import Image from "next/image"
import Link from "next/link"

const HeroBanner = ({heroData}) => {
  return (
    
    <div className="container-fluid px-0 mb-5">
        <div id="header-carousel" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                                        
                    <Image src={heroData.image}
                    width={1920}
                    height={828} 
                    alt={heroData.heading}
                     className="w-100 d-lg-block d-md-none d-sm-none d-none" />
                    <Image src={heroData.mob_image}
                    width={589}
                    height={1016} 
                    alt={heroData.heading}
                     className="w-100 d-lg-none d-md-block d-sm-block d-block" />
                     
                     <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-lg-7 text-lg-start text-center">
                                 
                                    <div className="heading">
                                        <h1 className="display-1 text-white mb-4 animated ">{heroData.heading}</h1>
                                        <p>{heroData.description}</p>
                                        <div className="hd_btn">
                                            <Link href={heroData.buttons[0].url} className="btn btn-primary rounded-pill py-3 px-5 animated ">{heroData.buttons[0].title}</Link>
                                            <Link href={heroData.buttons[1].url} className="btn rounded-pill py-3 px-5 animated " >{heroData.buttons[1].title}</Link>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
         
        </div>
    </div>
  )
}

export default HeroBanner
