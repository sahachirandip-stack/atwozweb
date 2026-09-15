import Image from "next/image"
import Link from "next/link"

const NewServiceItem = ({serviceItem}) => {
  return (
    
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item position-relative h-100">
                            <div className="service-text rounded p-4">
                                <div className="btn-square bg-light rounded-circle mx-auto mb-4">
                                    <Image
                                     className="img-fluid" 
                                     height={64}
                                     width={64}
                                     src={serviceItem.image} 
                                     alt="Icon"/>
                                </div>
                                <h5 className="mb-3">{serviceItem.title}</h5>
                                    <p className="mb-0">{serviceItem.description}</p>
                            </div>
                            <div className="service-btn rounded-0 rounded-bottom">
                                <Link className="text-primary fw-medium" href={serviceItem.url}>Read More<i
                                        className="bi bi-chevron-double-right ms-2"></i></Link>
                            </div>
                        </div>
                    </div>
  )
}

export default NewServiceItem
