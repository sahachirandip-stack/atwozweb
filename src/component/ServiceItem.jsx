import Image from "next/image"

const ServiceItem = ({itemData}) => {
  return (
    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.7s">
                        <div className="feature-item border h-100 p-5">
                            <div className="btn-square bg-light rounded-circle mb-4" >
                                <Image src={itemData.icon}
                                    width={64}
                                    height={64}
                                    alt={itemData.title}
                                    className="img-fluid"
                                />
                            </div>
                            <h5 className="mb-3">{itemData.title}</h5>
                            <p>{itemData.description}</p>
                            <p className="mb-0 text-success">{itemData.technologies.join(", ")}</p>
                        </div>
                    </div>
  )
}

export default ServiceItem
