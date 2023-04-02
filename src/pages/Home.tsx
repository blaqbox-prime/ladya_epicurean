import React, { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Slider from "../components/Slider";
import Slide from "../components/Slide";
import {slides} from "../utils/utils"

function Home() {

  const LAST_SLIDE = slides.length - 1;
  let autoSlideInterval: string | number | NodeJS.Timeout | undefined;

  const activeSlide = useRef<number>(0);

  const [slideIdx, setslide] = useState(0);
  
  // Start auto slide on load
  useEffect(() => {
    autoSlide();
    return () => clearInterval(autoSlideInterval);
  },[]);

  const autoSlide = () => {
    autoSlideInterval = setInterval(() => {
      nextSlide();
    },7000)
  }

  const clearAutoSlide = () => {
    clearInterval(autoSlideInterval);
  }

  const nextSlide = () => {
    setslide((slideIdx) => slideIdx === 2 ? 0 : slideIdx + 1);
}

const prevSlide = () => {
  setslide((slideIdx) => slideIdx === 0 ? 2 : slideIdx - 1);
}

  return (
    <main>
      <article>
        {/* Hero */}

        <section className="hero text-center" aria-label="Home" id="home">
          <Slider>

          {
            slides.map((slide, index) => {
              const {imageUrl,title1,title2,subtitle,text,linkText,secondary} = slide;
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
              )
            })
          }

            {/* <Slide
              active={true}
              imageUrl="./assets/images/hero-slider-1.jpg"
              title1="For the love of"
              title2="delicious food"
              subtitle="Traditional & Hygine"
              text="Come with family & feel the joy of mouthwatering food"
              linkText="View Our Menu"
            />

            <Slide
              imageUrl="./assets/images/hero-slider-2.jpg"
              title1="Flavors inspired by"
              title2="the seasons"
              subtitle="Delightful Experience"
              text="Come with family & feel the joy of mouthwatering food"
              linkText="View Our Menu"
            />

            <Slide
              imageUrl="./assets/images/hero-slider-3.jpg"
              title1="Where every flavor"
              title2="tells a story"
              subtitle="Amazing and delicious"
              text="Come with family & feel the joy of mouthwatering food"
              linkText="View Our Menu"
              secondary={true}
            /> */}
          </Slider>

          <button className="slider-btn prev" aria-label="slide to previous" onClick={() => prevSlide()} onMouseOver={() => clearAutoSlide()}  onMouseOut={() => autoSlide()}>
            <IoChevronBack />
          </button>

          <button className="slider-btn next" aria-label="slide to next" onClick={() => nextSlide()} onMouseOver={() => clearAutoSlide()} onMouseOut={() => autoSlide()} >
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
      </article>
    </main>
  );
}

export default Home;
