"use client"
import React, { useState } from "react";

const FAQSection = ({ faqSectionData }) => {
  const apiData = faqSectionData;
  const faqs =apiData.items
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="faq-contact  py-5  wow fadeInUp" data-wow-delay="0.2s">
      <div className=" container">
        <div className="row g-lg-4 align-items-center">
          <div className="col-lg-12 mx-auto">
            <div className="heading  text-center gap">
              <h2 className="gap display-5 mb-4">{apiData.small_heading}</h2>
            </div>
            <div className="faqAccordion">
              {faqs.map((faq, index) => (
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
                    <span>{faq.question}</span>
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
                  ><div className="faq-answer-inner"><p>{faq.answer}</p></div>
                  </div></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
