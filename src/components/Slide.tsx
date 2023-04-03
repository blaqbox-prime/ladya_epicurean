import React from 'react'

export interface ISlide {
    imageUrl: string,
    title1: string,
    title2: string,
    subtitle: string,
    text?:string,
    linkText?: string,
    secondary?: boolean,
    active?: boolean
}

export default function Slide({active = false,imageUrl,title1,title2,subtitle,text,linkText = "View Our Menu", secondary = false}: ISlide) {
  return (
    <li className={`slider-item ${active && "active"}`}>
                <div className="slider-bg">
                  <img src={imageUrl} width={1880} height={950} alt="" className="img-cover"/>
                </div>
                
                <p className="label-2 section-subtitle slider-reveal">{subtitle}</p>

                <h1 className="display-1 hero-title slider-reveal">
                  {title1} <br />
                  {title2}
                </h1>

                <p className="body-2 hero-text slider-reveal">
                  {text}
                </p>

                <a href="#" className={`btn ${secondary ? "btn-secondary" : "btn-primary"} slider-reveal`}>
                  <span className="text text-1" >{linkText}</span>

                  <span className='text text-2' aria-hidden={true}>{linkText}</span>
                </a>

              </li>
  )
}