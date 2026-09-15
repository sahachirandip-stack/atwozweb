import Link from "next/link"

const AboutSection = ({aboutData}) => {
  return (
    <section className="about">
        <div className="container-xxl  my-5">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-6">
                        <div className="h-100 d-flex align-items-center justify-content-center" >
                        </div>
                    </div>
                    <div className="col-lg-6 pt-lg-5 wow fadeIn" data-wow-delay="0.5s">
                        <div className="bg-white rounded-top p-5 mt-lg-5">
                            <p className="fs-5 fw-medium text-primary">{aboutData.small_heading}</p>
                            <h2 className="display-6 mb-4">{aboutData.heading}</h2>

                            <p className="mb-4">{aboutData.description}</p>

                            <p className="mb-4">{aboutData.content}</p>

                            <Link className="btn btn-primary rounded-pill py-3 px-5" href={aboutData.button.url}>{aboutData.button.title}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
