import { ISlide } from "../components/Slide";

export const addEventOnElements = function(elements: string | any[], eventType: any, callback: any): void {
    for (let i = 0, len = elements.length; i < len; i++){
      elements[i].addEventListener(eventType,callback);
    }
   }

export const slides : ISlide[] = [
  {
    active:true,
    imageUrl:"./assets/images/hero-slider-1.jpg",
    title1:"For the love of",
    title2:"delicious food",
    subtitle:"Traditional & Hygine",
    text:"Come with family & feel the joy of mouthwatering food",
    linkText:"View Our Menu",
    secondary:false,
  },
  {
    active:false,
    imageUrl:"./assets/images/hero-slider-2.jpg",
              title1:"Flavors inspired by",
              title2:"the seasons",
              subtitle:"Delightful Experience",
              text:"Come with family & feel the joy of mouthwatering food",
              linkText:"View Our Menu",
              secondary:false
  },

  {
  active:false,
  imageUrl:"./assets/images/hero-slider-3.jpg",
  title1:"Where every flavor",
  title2:"tells a story",
  subtitle:"Amazing and delicious",
  text:"Come with family & feel the joy of mouthwatering food",
  linkText:"View Our Menu",
  secondary:false
  } 

]