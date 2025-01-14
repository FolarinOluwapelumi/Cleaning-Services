import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import ServiceCard from "../Components/ServiceCard";
import HowItWorks from "../Components/HowItWorks";
import StatsCard from "../Components/StatsCard"; 
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import clients from "../assets/SatisfiedClients.png"
import CleaningStaff from "../assets/CleaningStaff.png"
import CompleteProjects from "../assets/CompleteProjects.png"
import Reviews from "../assets/Reviews.png"
import ArtisanBg from "../assets/ArtisanBg.png" 






export default function HomePage() {

  return (
    <div className="relative" style={{ backgroundImage: `url("${ArtisanBg}")` }}>
      <div className="absolute inset-0 bg-blue-100 bg-opacity-20"></div>
      <Header />
        <Hero />
        <section className="py-16 px-4  text-center flex flex-col justify-center items-center"> 
          <div>
          <span className="bg-sky-600 text-white px-3 py-1 rounded-full  text-sm font-semibold tracking-wide ">
              What We Do
            </span>
            <h2 className="md:text-3xl text-[1.5rem] font-bold mt-4">What We Do</h2>
            <p className="text-center md:px-[4rem] lg:px-[6rem]">we specialize in delivering top-notch cleaning services tailored to meet your unique needs. Our expert team is dedicated to providing a pristine environment for your home, office, or commercial space. </p>
          </div>
          <div className="grid grrid-cols-1 lg:grid-cols-4 md:grid-cols-2 place-items-center gap-6 mt-16 z-10 md:px-[3rem] lg:px-[6rem]">
            <ServiceCard img={clients} title="Office Cleaning" className="text-blue-500 bg-white rounded-br-[4rem]" content="Monitor the exact location of waste collection vehicles in nthe real-time,ensuring timely and efficient waste pickup." />
            <ServiceCard img={clients} title="House Cleaning" className="text-white bg-sky-600 rounded-br-[4rem] md:-translate-y-8" content="Monitor the exact location of waste collection vehicles in nthe real-time,ensuring timely and efficient waste pickup."/>
            <ServiceCard img={clients} title="Window Cleaning" className="text-blue-500 bg-white rounded-br-[4rem]" content="Monitor the exact location of waste collection vehicles in nthe real-time,ensuring timely and efficient waste pickup."/>
            <ServiceCard img={clients} title="Pipes Cleaning" className="text-white bg-sky-600 rounded-br-[4rem] md:-translate-y-8" content="Monitor the exact location of waste collection vehicles in nthe real-time,ensuring timely and efficient waste pickup."/>
            <ServiceCard img={clients} title="Toilet Cleaning" className="text-blue-500 bg-white rounded-br-[4rem]" content="Monitor the exact location of waste collection vehicles in nthe real-time,ensuring timely and efficient waste pickup."/>
            <ServiceCard img={clients} title="Mirror Cleaning" className="text-white bg-sky-600 rounded-br-[4rem] md:-translate-y-8" content="Monitor the exact location of waste collection vehicles in nthe real-time,ensuring timely and efficient waste pickup."/>
            <ServiceCard img={clients} title="Floor Cleaning" className="text-blue-500 bg-white rounded-br-[4rem]" content="Monitor the exact location of waste collection vehicles in nthe real-time,ensuring timely and efficient waste pickup."/>
            <ServiceCard img={clients} title="Kitchen Cleaning" className="text-white bg-sky-600 rounded-br-[4rem] md:-translate-y-8" content="Monitor the exact location of waste collection vehicles in nthe real-time,ensuring timely and efficient waste pickup."/>
          </div>
        </section>
        <HowItWorks />
        <div className="grid  bg-blue-200 bg-opacity-50 grid-cols-2 place-items-center gap-3 md:gap-5 px-4 py-5 md:px-[4rem] md:py-[2.5rem]  md:rounded-[3rem] w-[100%]">
          <StatsCard img={clients} rounded="bottom-right" />
          <StatsCard img={CleaningStaff} rounded="bottom-left" />
          <StatsCard img={Reviews} rounded="bottom-right" />
          <StatsCard img={CompleteProjects} rounded="bottom-left" />
        </div>
        <section className="py-16 px-4 text-center flex flex-col justify-center items-center"> 
          <div>
            <p className="bg-sky-600 w-[35%] md:w-[15%] rounded-2xl mx-auto  md:px-3 md:py-1 px-1 py-1 text-white font-semibold mb-4">Testimonials</p>
            <h2 className="md:text-3xl text-[1.5rem] font-bold md:mb-2"> User Testimonials</h2>
            <p className="text-center"> Hear from residents and partners who have experienced their positive impact of our Cleaning service in their daily lives. </p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-[90%] md:w-[60%] z-10">
            <div className="bg-white px-2 py-2 text-center flex flex-col justify-center items-center">
              <p className="text-[.8rem] md:text-[1rem]">Thanks To The ICT Hub, Our Business Has Transformed And Reached New Heights!</p>
              <img src={clients} className="mt-5 h-10 w-10" />
              <p className="text-sm font-bold text-gray-500">Jerimiah Sunday</p>
            </div>
            <div className="bg-white px-2 py-2 text-center flex flex-col justify-center items-center">
              <p className="text-[.8rem] md:text-[1rem]">Thanks To The ICT Hub, Our Business Has Transformed And Reached New Heights!</p>
              <img src={clients} className="mt-5 h-10 w-10" />
              <p className="text-sm font-bold text-gray-500">Jerimiah Sunday</p>
            </div>
          </div>
        </section>
        <CTA />
        <Footer />
    </div>
  );
}