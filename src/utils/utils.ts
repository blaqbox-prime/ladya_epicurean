import { IMenuItem } from "../components/MenuItem";
import { ISlide } from "../components/Slide";

export const addEventOnElements = function (
  elements: string | any[],
  eventType: any,
  callback: any
): void {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

export const slides: ISlide[] = [
  {
    active: true,
    imageUrl: "./assets/images/hero-slider-1.jpg",
    title1: "For the love of",
    title2: "delicious food",
    subtitle: "Traditional & Hygine",
    text: "Come with family & feel the joy of mouthwatering food",
    linkText: "View Our Menu",
    secondary: false,
  },
  {
    active: false,
    imageUrl: "./assets/images/hero-slider-2.jpg",
    title1: "Flavors inspired by",
    title2: "the seasons",
    subtitle: "Delightful Experience",
    text: "Come with family & feel the joy of mouthwatering food",
    linkText: "View Our Menu",
    secondary: false,
  },

  {
    active: false,
    imageUrl: "./assets/images/hero-slider-3.jpg",
    title1: "Where every flavor",
    title2: "tells a story",
    subtitle: "Amazing and delicious",
    text: "Come with family & feel the joy of mouthwatering food",
    linkText: "View Our Menu",
    secondary: false,
  },
];

export const HomeMenuItems: IMenuItem[] = [
  {
    title: "Greek Salad",
    description:
      "Tomatoes, green bell pepper, sliced cucumber onion, olives,and feta cheese",
    imgUrl: "assets/images/menu-1.png",
    price: 49.99,
    alt: "greek salad",
    seasonal: true,
  },
  {
    title: "Lasagne",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    imgUrl: "assets/images/menu-2.png",
    price: 39.99,
    alt: "lasagne",
    seasonal: false,
  },
  {
    title: "Butternut Pumpkin",
    description:
      "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
    imgUrl: "assets/images/menu-3.png",
    price: 29.99,
    alt: "Butternut Pumpkin",
    seasonal: false,
  },
  {
    title: "Tokusen Wagyu",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    imgUrl: "assets/images/menu-4.png",
    price: 23.99,
    alt: "Tokusen Wagyu",
    seasonal: false,
    isNew: true
  },
  {
    title: "Olivas Rellenas",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper",
    imgUrl: "assets/images/menu-5.png",
    price: 23.99,
    alt: "Olivas Rellenas",
    seasonal: false,
  },
  {
    title: "Opu Fish",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    imgUrl: "assets/images/menu-6.png",
    price: 23.99,
    alt: "Opu Fish",
    seasonal: false,
  },
];
