import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <a href="#" className="logo">
        <img
          src="./assets/images/logo-no-background.svg"
          height={50}
          width={160}
          alt="Epicurean - Home"
        />
      </a>
  )
}

export default Logo