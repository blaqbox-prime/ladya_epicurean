import React from 'react'

type preLoader = {
    loaded : boolean,
}

function Preloader({ loaded } : preLoader) {
  return (
    <div className={`preload ${loaded && "loaded"}`} id='data-preload'>
            <div className="circle"></div>
            <div className="text">Epicurean</div>
        </div>
  )
}

export default Preloader
