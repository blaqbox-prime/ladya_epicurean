import React from 'react'

export interface IMenuItem {
    imgUrl: string,
    alt?: string,
    title: string,
    description: string,
    seasonal?: boolean,
    price: number,
    isNew?: boolean
}

export default function MenuItem({imgUrl,alt,title,description,seasonal = false, isNew = false,price}: IMenuItem) {
  return (
    <li>
                <div className="menu-card hover:card">
                  <figure
                    className="card-banner img-holder"
                    // style={{ width: 100, height: 100 }}
                  >
                    <img
                      src={imgUrl}
                      loading="lazy"
                      width={100}
                      height={100}
                      alt={alt}
                      className="img-cover"
                    />
                  </figure>

                  <div className="">
                    <div className="title-wrapper">
                      <h3 className="title-3">
                        <a href="#" className="card-title">
                          {title}
                        </a>
                      </h3>

                      {seasonal && <span className="badge label-1">Seasonal</span>}
                      {isNew && <span className="badge label-1">New</span>}
                      <span className="span title-2">R{price}</span>
                    </div>

                    <p className="card-text label-1">
                      {description}
                    </p>
                  </div>

                </div>
              </li>
  )
}