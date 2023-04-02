import React, { ReactNode } from 'react'

type props = {
    children: ReactNode,
}

function NavbarList({children} : props) {
  return (
    <ul className="navbar-list">
        {children}
    </ul>
  )
}

export default NavbarList