import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { homeApi } from "@/assets/api_data/api";
import TestimonialSection from "@/component/TestimonialSection";
import FAQSection from "@/component/FAQSection";
// import ContactSection from "../component/ContactSection";
import HeroBanner from "@/component/HeroBanner";
import TechnologyServices from "@/component/TechnologyServices";
import AboutSection from "@/component/AboutSection";
import Services from "@/component/Services";
import Expertise from "@/component/Expertise";
import WhyChooseUs from "@/component/WhyChooseUs";
import ContactSection from "@/component/ContactSection";

export default function  Home() {
    const testimonialsdata = homeApi?.testimonials;
    
    console.log(homeApi);
  return (
    <>
    <HeroBanner heroData={homeApi.hero}/>  
    <TechnologyServices technologyServicesData={homeApi.technology_services} />
    <AboutSection aboutData={homeApi.about}/>
    <Services serviceItemData={homeApi.services}/>
    <WhyChooseUs whyData={homeApi.why_choose_us} />
    <Expertise expertiseData={homeApi.expertise} />
    <ContactSection contactData={homeApi.cta} quote_form={homeApi.quote_form}/>
    <FAQSection faqSectionData={homeApi.faq} />   
    <TestimonialSection testimonialData={testimonialsdata} />    
    </>
  );
}
