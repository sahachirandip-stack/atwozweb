"use client"
import React, { useState } from "react";

const WhyChooseUs = ({whyData}) => {
     const [activeIndex, setActiveIndex] = useState(0);
      const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
  return (
    
    <div className="faq-contact">
        <div className="container-xxl py-5 ">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h2 className=" display-5 mb-4">{whyData.small_heading}</h2>
                        <h3 className="fw-medium text-primary">{whyData.heading}</h3>
                        <p>{whyData.description}</p>
                    </div>

                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="faqAccordion">
              {whyData.items.map((item, index) => (
                <div
                  className={`faq-item ${activeIndex === index ? "active" : ""}`}
                  key={index}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                  >
                    <span>{item.title}</span>
                    <i
                      className={
                        activeIndex === index
                          ? "ri-arrow-up-s-line"
                          : "ri-arrow-down-s-line"
                      }
                    ></i>
                  </button>
                  <div
                    className={`faq-answer ${activeIndex === index ? "show" : ""}`}
                  ><div className="faq-answer-inner"><p>{item.description}</p></div>
                  </div></div>
              ))}
            </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs
