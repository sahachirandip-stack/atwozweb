import ServiceItem from "./ServiceItem"

const TechnologyServices = ({technologyServicesData}) => {
  return (
    <section className="features">
        <div className="container-xxl py-5">
            <div className="container">
                <div className="heading text-center mb-5">
                    <h2 className="display-6 mb-4">{technologyServicesData.heading}</h2>
                    <p>{technologyServicesData.description}</p>
                </div>
                <div className="row g-0 feature-row">
                    {technologyServicesData.items.map((item,index)=>(
                        <ServiceItem key={index} itemData={item} />
                    ))}


                </div>
            </div>
        </div>
    </section>
  )
}

export default TechnologyServices
