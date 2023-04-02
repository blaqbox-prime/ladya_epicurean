import React from 'react'
import { IoCallOutline, IoLocationOutline, IoMailOutline, IoTimeOutline } from 'react-icons/io5';
function TopBar() {
    return (<div className="topbar">
      <div className="container">
  
        {/* Location */}
  
        <address className="topbar-item">
          <div className="icon">
            <IoLocationOutline aria-hidden={true} />
          </div>
          <span className="span">
            7 Acacia St. Flora Park, Polokwane 0699, L
          </span>
        </address>
  
        <div className="separator"></div>
  
        {/* Working Hours */}
  
        <div className="topbar-item item-2">
          <div className="icon">
            <IoTimeOutline />
          </div>
  
          <span className="span">
            Daily : 8:00 am to 10:00 pm
          </span>
  
        </div>
  
        {/* Contact */}
  
        <a href="tel:" className="topbar-item">
          <div className="icon">
            <IoCallOutline aria-hidden={true} />
          </div>
  
          <span className="span">
            075 212 3548
          </span>
  
        </a>
  
        <div className="separator"></div>
  
        <a href="mailto:" className="topbar-item">
          <div className="icon">
            <IoMailOutline aria-hidden={true} />
          </div>
  
          <span className="span">
            andiswa@epicurean.com
          </span>
  
        </a>
  
  
      </div>
    </div>)
  }

export default TopBar