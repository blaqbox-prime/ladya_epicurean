import React, { HTMLProps } from 'react'

export interface IService extends HTMLProps<HTMLImageElement> {
    title: string,
    linkText: string,
    imgUrl: string,
}

function Service({title, linkText, imgUrl, width = 285, height = 336, alt} : IService) {
  return (
    <li>
                <div className="service-card">
                  <a href="" className="has-before hover:shine">
                    <figure className="card-banner img-holder" >
                      <img src={imgUrl} alt={alt} width={width} height={height} loading="lazy" className="img-cover" />
                    </figure>
                  </a>
                  <div className="card-content">
                    <h3 className="title-4 card-title">
                      <a href="#">{title}</a>
                    </h3>

                    <a href="#" className="btn-text hover-underline label-2">{linkText}</a>
                  </div>
                </div>
              </li>
  )
}

export default Service