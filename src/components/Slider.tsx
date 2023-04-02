import React from "react";

type Props = {
  children: React.ReactNode[];
};

export default function Slider({ children = [] }: Props) {
  return (
    <ul className="hero-slider" data-hero-slider>
      {children}
    </ul>
  );
}
