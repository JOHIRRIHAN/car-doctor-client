// import React from 'react'
import person from "../../assets/images/about_us/person.jpg";
import perts from "../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-x-10  lg:flex-row">
        <div className="lg:w-1/2  relative ">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={perts} className="w-1/2 right-5 absolute top-1/2 border-8 border-white rounded-lg shadow-2xl" />
        </div>
        <div className="lg:w-1/2 md:mt-10">
            <h3 className=" text-xl font-semibold text-[#FF3811]">About Us</h3>
          <h1 className="text-3xl md:text-5xl  font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6 ">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomness words which do not look even slightly believable. 
          </p>
          <p className="py-6 ">
          the majority have suffered alteration in some form, by injected humour, or randomised words which do look even slightly believable. 
          </p>
          <button className="btn  bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
