/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, {
  useEffect,
  useState,
} from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Slider from "../components/Slider";
import Slide from "../components/Slide";
import { slides } from "../utils/utils";

function Home() {
  let autoSlideInterval: string | number | NodeJS.Timeout | undefined;


  const [slideIdx, setslide] = useState(0);

  // Start auto slide on load
  useEffect(() => {
    autoSlide();
    return () => clearInterval(autoSlideInterval);
  }, []);

  const autoSlide = () => {
    autoSlideInterval = setInterval(() => {
      nextSlide();
    }, 7000);
  };

  const clearAutoSlide = () => {
    clearInterval(autoSlideInterval);
  };

  const nextSlide = () => {
    setslide((slideIdx) => (slideIdx === 2 ? 0 : slideIdx + 1));
  };

  const prevSlide = () => {
    setslide((slideIdx) => (slideIdx === 0 ? 2 : slideIdx - 1));
  };

  return (
    <main>
      <article>
        {/* Hero */}

        <section className="hero text-center" aria-label="Home" id="home">
          <Slider>
            {slides.map((slide, index) => {
              const {
                imageUrl,
                title1,
                title2,
                subtitle,
                text,
                linkText,
                secondary,
              } = slide;
              return (
                <Slide
                  key={index}
                  active={index === slideIdx}
                  title1={title1}
                  title2={title2}
                  subtitle={subtitle}
                  text={text}
                  linkText={linkText}
                  imageUrl={imageUrl}
                  secondary={secondary}
                />
              );
            })}
          </Slider>

          <button
            className="slider-btn prev"
            aria-label="slide to previous"
            onClick={() => prevSlide()}
            onMouseOver={() => clearAutoSlide()}
            onMouseOut={() => autoSlide()}
          >
            <IoChevronBack />
          </button>

          <button
            className="slider-btn next"
            aria-label="slide to next"
            onClick={() => nextSlide()}
            onMouseOver={() => clearAutoSlide()}
            onMouseOut={() => autoSlide()}
          >
            <IoChevronForward />
          </button>

          <a href="#" className="hero-btn has-after">
            <img
              src="./assets/images/hero-icon.png"
              width={48}
              height={48}
              alt="booking icon"
            />
            <span className="label-2 text-center span">Book A Table</span>
          </a>
        </section>

        {/* Services */}

        <section
          className="service bg-black-10 text-center"
          aria-label="services"
        >
          <div className="container">
            <p className="section-subtitle label-2">Flavors for Royalty</p>

            <h2 className="headline-1 section-title">We Offer Top Notch</h2>
            <p className="section-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              maiores laudantium expedita voluptate natus fuga eveniet
              veritatis, dignissimos rem ratione.
            </p>

            <ul className="grid-list">

              <li>
                <div className="service-card">
                  <a href="" className="has-before hover:shine">
                    <figure className="card-banner img-holder" >
                      <img src="assets/images/service-1.jpg" alt="breakfast" width={285} height={336} loading="lazy" className="img-cover" />
                    </figure>
                  </a>
                  <div className="card-content">
                    <h3 className="title-4 card-title">
                      <a href="#">Breakfast</a>
                    </h3>

                    <a href="#" className="btn-text hover-underline label-2">View Menu</a>
                  </div>
                </div>
              </li>
            
              <li>
                <div className="service-card">
                  <a href="" className="has-before hover:shine">
                    <figure className="card-banner img-holder" >
                      <img src="assets/images/service-2.jpg" alt="appetizers" width={285} height={336} loading="lazy" className="img-cover" />
                    </figure>
                  </a>
                  <div className="card-content">
                    <h3 className="title-4 card-title">
                      <a href="#">Appetizers</a>
                    </h3>

                    <a href="#" className="btn-text hover-underline label-2">View Menu</a>
                  </div>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <a href="" className="has-before hover:shine">
                    <figure className="card-banner img-holder" >
                      <img src="assets/images/service-3.jpg" alt="drinks" width={285} height={336} loading="lazy" className="img-cover" />
                    </figure>
                  </a>
                  <div className="card-content">
                    <h3 className="title-4 card-title">
                      <a href="#">Drinks</a>
                    </h3>

                    <a href="#" className="btn-text hover-underline label-2">View Menu</a>
                  </div>
                </div>
              </li>

            </ul>

            <img src="assets/images/shape-1.png" width={246} height={412} loading="lazy" alt="shape" className="shape shape-1 move-anim" />
            <img src="assets/images/shape-2.png" width={343} height={345} loading="lazy" alt="shape" className="shape shape-2 move-anim" />

            
          </div>
        </section>
      </article>
    </main>
  );
}

export default Home;
