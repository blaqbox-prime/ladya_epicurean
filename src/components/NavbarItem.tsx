import React from "react";

type props = {
  link:string,
  text:string,
  active?: boolean
}

function NavbarItem({link, text,active = false} : props) {
  return (
    <li className="navbar-item">
      <a href={link} className={`navbar-link hover-underline ${active && "active"}`}>
        <div className="separator"></div>
        <span className="span">{text}</span>
      </a>
    </li>
  );
}

export default NavbarItem;
