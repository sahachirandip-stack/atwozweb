import NewServiceItem from "./NewServiceItem"

const Services = ({serviceItemData}) => {
  return (
    <section className="service">
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" >
                    <p className="fs-5 fw-medium text-primary">{serviceItemData.small_heading}</p>
                    <h2 className="display-5 mb-5">{serviceItemData.heading}</h2>
                </div>
                <div className="row g-4">
                    {serviceItemData.items.map((item,index)=>(
                        <NewServiceItem key={index} serviceItem={item}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
