import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Pagination, Navigation } from "swiper/modules";

import img1 from "../../assets/images/team/1.jpg";
import img2 from "../../assets/images/team/2.jpg";
import img3 from "../../assets/images/team/3.jpg";
import { FaFacebook, FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Team = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    if (swiperRef) {
      swiperRef.prependSlide([
        `<div class="swiper-slide">Slide ${--prependNumber}</div>`,
        `<div class="swiper-slide">Slide ${--prependNumber}</div>`,
      ]);
    }
  };

  const prepend = () => {
    if (swiperRef) {
      swiperRef.prependSlide(
        `<div class="swiper-slide">Slide ${--prependNumber}</div>`
      );
    }
  };

  const append = () => {
    if (swiperRef) {
      swiperRef.appendSlide(
        `<div class="swiper-slide">Slide ${++appendNumber}</div>`
      );
    }
  };

  return (
    <div className="my-20">
      <div className="text-center mb-10">
        <h3 className="text-lg text-orange-600 font-bold">Team</h3>
        <h3 className="text-5xl font-bold my-5">Meet Our Team</h3>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{ type: "fraction" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="card md:w-80 lg:w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={img1}
                alt="Team member"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl font-bold">Car Engine Plug</h2>
              <p className="text-xl font-bold text-zinc-600">Engine Expert</p>
              <div className="card-actions text-4xl">
                <FaFacebookSquare />
                <FaLinkedin />
                <FaFacebook />
                <FaInstagram />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card md:w-80 lg:w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={img2}
                alt="Team member"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl font-bold">Car Engine Plug</h2>
              <p className="text-xl font-bold text-zinc-600">Engine Expert</p>
              <div className="card-actions text-4xl">
                <FaFacebookSquare />
                <FaLinkedin />
                <FaFacebook />
                <FaInstagram />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card md:w-80 lg:w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={img3}
                alt="Team member"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl font-bold">Car Engine Plug</h2>
              <p className="text-xl font-bold text-zinc-600">Engine Expert</p>
              <div className="card-actions text-4xl">
                <FaFacebookSquare />
                <FaLinkedin />
                <FaFacebook />
                <FaInstagram />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card md:w-80 lg:w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={img1}
                alt="Team member"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl font-bold">Car Engine Plug</h2>
              <p className="text-xl font-bold text-zinc-600">Engine Expert</p>
              <div className="card-actions text-4xl">
                <FaFacebookSquare />
                <FaLinkedin />
                <FaFacebook />
                <FaInstagram />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card md:w-80 lg:w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={img2}
                alt="Team member"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl font-bold">Car Engine Plug</h2>
              <p className="text-xl font-bold text-zinc-600">Engine Expert</p>
              <div className="card-actions text-4xl">
                <FaFacebookSquare />
                <FaLinkedin />
                <FaFacebook />
                <FaInstagram />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card md:w-80 lg:w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={img3}
                alt="Team member"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl font-bold">Car Engine Plug</h2>
              <p className="text-xl font-bold text-zinc-600">Engine Expert</p>
              <div className="card-actions text-4xl">
                <FaFacebookSquare />
                <FaLinkedin />
                <FaFacebook />
                <FaInstagram />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Team;
