/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import NavbarItem from "./NavbarItem";
import NavbarList from "./NavbarList";
import Logo from "./Logo";


type props = {
  toggleNavbar: Function | any,
  isOpen?: boolean
}

function Navbar({toggleNavbar, isOpen = false} : props) {

  return (
    <nav className={`navbar ${isOpen && "active"}`} data-navbar>
      <button className="close-btn" aria-label="close menu" id="btn-close-menu" data-nav-toggler
       onClick={() => {toggleNavbar()}}
      >
        <IoCloseOutline  size={18} />
      </button>

      <Logo />

      <NavbarList>
        <NavbarItem link="#" text="Home" active={true}/>
        <NavbarItem link="#menu" text="Menu" />
        <NavbarItem link="#news" text="News" />
        <NavbarItem link="#about" text="About Us" />
        <NavbarItem link="#contact" text="Contact" />
      </NavbarList>

      <div className="text-center">
        <p className="headline-1 navbar-title">Visit Us</p>
        <address className="body-4">
          7 Acacia St. Flora Park, <br />
          Polokwane 0699, L
        </address>

        <p className="body-4 navbar-text">Open: 9:30 am - 10:00 pm</p>

        <a href="mailto:andiswa@epicurean.com" className="body-4 sidebar-link">andiswa@epicurean.com</a>

        <div className="separator"></div>

        <p className="contact-label">Booking Request</p>

        <a href="tel:078 584 1285" className="body-1 contact-number hover-underline">078 584 1285</a>
      </div>
    </nav>
  );
}

export default Navbar;
