import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";


function Footer() {
  return (
    <>
      <div class="footer">
        <img
          src="https://images.unsplash.com/photo-1502239608882-93b729c6af43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hcmJsZSUyMGJsYWNrJTIwdGV4dHVyZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <div class="list-box">
          <ul>
            <h1>More from Aki Marble</h1>
            <li>
              <a href="">about us</a>
            </li>
            <li>
              <a href="">privacy policy</a>
            </li>
            <li>
              <a href="">FaQ us</a>
            </li>
            <li>
              <a href="">tems and conditions</a>
            </li>
            <li>
              <a href="">contribute</a>
            </li>
          </ul>
          <ul>
            <h1>Categories</h1>
            <li>
              <a href="">salon at home</a>
            </li>
            <li>
              <a href="">spa at home</a>
            </li>
            <li>
              <a href="">Advanced Treatments</a>
            </li>
            <li>
              <a href="">Male Spa</a>
            </li>
            <li>
              <a href="">Male Grooming</a>
            </li>
            <li>
              <a href="">Hair Studio</a>
            </li>
            <li>
              <a href="">Pre Bridal</a>
            </li>
            <li>
              <a href="">Marble At Home</a>
            </li>
          </ul>
          <ul>
            <h1>Work with Us</h1>
            <li>
              <a href="">Franchise</a>
            </li>
          </ul>
          <ul>
            <h1>Contact & Support</h1>
            <li>
              <a href="">contact us</a>
            </li>
            <li>
              <a href="">support@akimarble.com</a>
            </li>
          </ul>

        </div>

        <div class="icon-box">
          <div className="icon">
            <FaInstagram />
          </div>
          <div className="icon">
            <FaFacebookF />
          </div>
          <div className="icon">
            <FaTwitter />
          </div>
          <div className="icon">
            <FaPinterest />
          </div>
          <div className="icon">
            <FaYoutube />
          </div>
          <div className="icon-text">
            <img
              src="https://www.yesmadam.com/static/images/logo_Ym.png"
              alt=""
            />
          </div>
          <div className="icon-img">
            <img
              src="https://www.yesmadam.com/static/images/appstore_new_icon.webp"
              alt=""
            />
          </div>
          <div className="icon-img">
            <img
              src="https://www.yesmadam.com/static/images/play_icon_new.webp"
              alt=""
            />
          </div>
        </div>
        <p style={{color:'white'}}>
          Copyright 2017-2024 @YesMadam | Powered by: Notion Online Solutions
          Private Limited
        </p>
      </div>
    </>
  );
}

export default Footer;
