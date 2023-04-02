/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Slider from "../components/Slider";
import Slide from "../components/Slide";
import { slides } from "../utils/utils";
import Service from "../components/Service";

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

  // Parallax
  const parallaxItems : NodeListOf<HTMLElement> = document.querySelectorAll("[data-parallax-item]");
  let x,y : number;

  window.addEventListener("mousemove", function(event){

    x = (event.clientX / window.innerWidth * 10) - 5;
    y = (event.clientY / window.innerHeight * 10) - 5;

    // Negate the mumber
    x = x - (x*2);
    y = y - (y*2);

    for (let i =0, len = parallaxItems.length; i < len; i++){
      x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
      y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
      parallaxItems[i].style.transform = `translate3d(${x}px,${y}px,0)`;
    }
  })

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
              <Service
                title="Breakfast"
                imgUrl="assets/images/service-1.jpg"
                alt="breakfast"
                linkText="View Menu"
              />
              <Service
                title="Appetizer"
                imgUrl="assets/images/service-2.jpg"
                alt="appetizer"
                linkText="View Menu"
              />
              <Service
                title="Drinks"
                imgUrl="assets/images/service-3.jpg"
                alt="drinks"
                linkText="View Menu"
              />
            </ul>

            <img
              src="assets/images/shape-1.png"
              width={246}
              height={412}
              loading="lazy"
              alt="shape"
              className="shape shape-1 move-anim"
            />
            <img
              src="assets/images/shape-2.png"
              width={343}
              height={345}
              loading="lazy"
              alt="shape"
              className="shape shape-2 move-anim"
            />
          </div>
        </section>

        {/* About  */}

        <section
          className="section about text-center"
          aria-label="about"
          id="about"
        >
          <div className="container">
            <div className="about-content">
              <p className="label-2 section-subtitle" aria-label="about-label">
                Our Story
              </p>
              <h2 className="headline-1 section-title">
                Every Flavor Tells a Story
              </h2>

              <p className="section-text">
                Welcome to Epicurean! As the chef and owner, I, Andiswa, take
                pride in crafting a range of delicious dishes with care and
                passion. With years of culinary experience and having worked in
                renowned kitchens around the world, I'm excited to bring my
                expertise to our community. Fun fact about me - my passion for
                cooking was ignited when I was a child, watching my mother
                prepare traditional South African dishes in the kitchen. Today,
                I infuse my dishes with my own creative flair, blending local
                ingredients with global influences to create a unique and
                unforgettable dining experience. I invite you to join me for a
                meal at Epicurean and taste the magic of my cuisine for
                yourself.
              </p>

              <div className="content-label">Book Through Call</div>

              <a
                href="tel:0749851245"
                className="body-1 contact-number hover-underline"
              >
                074 985 1245
              </a>

              <a href="#" className="btn btn-primary">
                <span className="text text-1">Read More</span>
                <span className="text text-2" aria-hidden={true}>
                  {" "}
                  Read More
                </span>
              </a>
            </div>

            <figure className="about-banner">
              <img
                src="assets/images/about-banner.jpg"
                width={570}
                height={570}
                loading="lazy"
                alt=""
                className="w-100"
                data-parallax-item
                data-parallax-speed="1"
              />

              <div
                className="abs-img abs-img-1 has-before"
                data-parallax-item
                data-parallax-speed="1.75"
              >
                <img src="assets/images/about-abs-image.jpg" width={285} height={285} alt="about abs" className="w-100" />
              </div>

              <div className="abs-img abs-img-2 has-before">
                <img src="assets/images/badge-2.png" width={133} height={134} loading="lazy" alt="abs img 2" />
              </div>
              <img src="assets/images/shape-3.png" width={197} height={194} loading="lazy" alt="" className="shape" />
            </figure>
        
          </div>
        </section>

        {/* Special Dish */}

        

      </article>
    </main>
  );
}

export default Home;
