/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Slider from "../components/Slider";
import Slide from "../components/Slide";
import { slides } from "../utils/utils";
import Service from "../components/Service";
import MenuItem from "../components/MenuItem";
import GridList from "../components/GridList";
import LinkButton from "../components/LinkButton";

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
  const parallaxItems: NodeListOf<HTMLElement> = document.querySelectorAll(
    "[data-parallax-item]"
  );
  let x, y: number;

  window.addEventListener("mousemove", function (event) {
    x = (event.clientX / window.innerWidth) * 10 - 5;
    y = (event.clientY / window.innerHeight) * 10 - 5;

    // Negate the mumber
    x = x - x * 2;
    y = y - y * 2;

    for (let i = 0, len = parallaxItems.length; i < len; i++) {
      x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
      y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
      parallaxItems[i].style.transform = `translate3d(${x}px,${y}px,0)`;
    }
  });

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
                <img
                  src="assets/images/about-abs-image.jpg"
                  width={285}
                  height={285}
                  alt="about abs"
                  className="w-100"
                />
              </div>

              <div className="abs-img abs-img-2 has-before">
                <img
                  src="assets/images/badge-2.png"
                  width={133}
                  height={134}
                  loading="lazy"
                  alt="abs img 2"
                />
              </div>
              <img
                src="assets/images/shape-3.png"
                width={197}
                height={194}
                loading="lazy"
                alt=""
                className="shape"
              />
            </figure>
          </div>
        </section>

        {/* Special Dish */}

        <section
          className="special-dish text-center"
          aria-label="special-dish"
          id="special-dish"
        >
          <div className="special-dish-banner">
            <img
              src="assets/images/special-dish-banner.jpg"
              width={940}
              height={900}
              alt="special dish"
              className="img-cover"
              loading="lazy"
            />
          </div>

          <div className="special-dish-content bg-black-10">
            <div className="container">
              <img
                src="assets/images/badge-1.png"
                width={28}
                height={41}
                loading="lazy"
                alt="badge"
                className="abs-img"
              />
              <p className="section-subtitle label-2">Special Dish</p>
              <h2 className="headline-1 section-title">Lobster Tortellini</h2>
              <p className="section-text">
                Our signature dish, Lobster Tortellini, is a must-try for any
                seafood lover. This dish features perfectly cooked, succulent
                chunks of lobster meat wrapped in handmade tortellini pasta,
                complemented by a rich and creamy sauce. Our skilled chefs take
                great care in selecting the freshest ingredients to ensure that
                every bite is bursting with flavor. The Lobster Tortellini is
                one of our most popular menu items, and it's easy to see why.
                Come and indulge in this decadent dish and experience the true
                taste of our restaurant.
              </p>

              <div className="wrapper">
                <del className="del body-3">R428.99</del>
                <span className="span body-1">R214.99</span>
              </div>

              <a href="#" className="btn btn-primary">
                <span className="text text-1">View All Menu</span>
                <span className="text text-2" aria-hidden={true}>
                  View All Menu
                </span>
              </a>
            </div>
          </div>

          <img
            src="asets/images/shape-4.png"
            width={179}
            height={359}
            loading="lazy"
            alt=""
            className="shape shape-1"
          />
          <img
            src="asets/images/shape-9.png"
            width={351}
            height={462}
            loading="lazy"
            alt=""
            className="shape shape-2"
          />
        </section>

        {/* Menu */}
        <section className="section menu" aria-label="menu" id="menu">
          <div className="container">
            <p className="section-subtitle text-center label-2">
              Special Selection
            </p>
            <h2 className="headline-1 section-title text-center">
              Delicious Menu
            </h2>

            <GridList>
              <MenuItem
                title="Greek Salads"
                description="Tomatoes, green bell pepper, sliced cucumber onion, olives
                          and feta cheese."
                imgUrl="assets/images/menu-1.png"
                price={49.99}
                alt="greek salad"
                seasonal
              />

              <MenuItem
                 title="Lasagne"
                 description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
                 imgUrl="assets/images/menu-2.png"
                 price={39.99}
                 alt="lasagne"
              />

              <MenuItem
                title="Butternut Pumpkin"
                description="Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand."
                imgUrl="assets/images/menu-3.png"
                price={29.99}
                alt="Butternut Pumpkin"
               
              />

              <MenuItem
                title="Tokusen Wagyu"
                description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices."
                imgUrl="assets/images/menu-4.png"
                price={23.99}
                alt="Tokusen Wagyu"
                isNew
              />

              <MenuItem
                  title="Olivas Rellenas"
                  description="Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper"
                  imgUrl="assets/images/menu-5.png"
                  price={23.99}
                  alt="Olivas Rellenas"
              />

              <MenuItem
                title="Opu Fish"
                description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
                imgUrl="assets/images/menu-6.png"
                price={23.99}
                alt="Opu Fish"
              />
            </GridList>

            <p className="menu-text text-center">
              During winter daily from <span className="span">7:00 </span> am to <span className="span">9:00 pm</span> 
            </p>

            <LinkButton href="#" text="View All Menu"/>

            <img src="assets/images/shape-5.png" width={921}  height={103} loading="lazy" alt="shape" className="shape shape-2 move-anim" />

            <img src="assets/images/shape-6.png" width={343}  height={345} loading="lazy" alt="shape" className="shape shape-3 move-anim" />

          </div>
        </section>

        {/* Testimoniasl */}

        <section
          className="testimonials text-center section has-bg-image"
          aria-label="testimonials"
          id="testimonials"
          style={{backgroundImage: "url('assets/images/testimonial-bg.jpg')"}}
        >

            <div className="container">
              <div className="quote">”</div>
              <p className="headline-2 testi-text">
              I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.
              </p>

              <div className="wrapper">
                <div className="separator"></div>
                <div className="separator"></div>
                <div className="separator"></div>
              </div>

            <div className="profile">
              <img src="assets/images/testi-avatar.jpg" alt="sam" className="img" loading="lazy" height={100} width={100} />
            </div>

            <div className="label profile-name">Sam Johnson</div>

            </div>

        </section>

      </article>
    </main>
  );
}

export default Home;
