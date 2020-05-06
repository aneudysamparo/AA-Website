import React, { Component } from "react";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";
import Scrollspy from 'react-scrollspy';
import { AssetsGetLogo, AssetsGetLogoTheme } from '../../../core/consts/assests';


const SocialShare = [
  { Social: <FaFacebookF />, link: 'https://www.facebook.com/aneudysamparo' },
  { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/aneudysamparo' },
  { Social: <FaInstagram />, link: 'https://www.instagram.com/aneudysamparo' },
  { Social: <FaTwitter />, link: 'https://twitter.com/aneudysamparo' },
  { Social: <FaGithub />, link: 'https://github.com/aneudysamparo' }
];

interface HeaderProps {
  homeLink: string;
  themeColor: string;
  color: string;
}

const menuTrigger = () => {
  document.querySelector('.header-wrapper').classList.toggle('menu-open')
}
const closeMenuTrigger = () => {
  document.querySelector('.header-wrapper').classList.remove('menu-open')
}
const stickyHeader = () => {
  window.addEventListener('scroll', function () {
    var value = window.scrollY;
    if (value > 100) {
      document.querySelector('.header--fixed').classList.add('sticky')
    } else {
      document.querySelector('.header--fixed').classList.remove('sticky')
    }
  });
}

const subMenus = () => {
  const elements: NodeListOf<HTMLElement> = document.querySelectorAll('.has-droupdown > a') as NodeListOf<HTMLElement>;
  for (let i in elements) {
    if (elements.hasOwnProperty(i)) {
      elements[i].onclick = function () {
        elements[i].parentElement.querySelector('.submenu').classList.toggle("active");
        elements[i].classList.toggle("open");
      }
    }
  }
}

export const HeaderDefault = ({ homeLink, themeColor, color = 'default-color' }: HeaderProps) => {
  stickyHeader();
  subMenus();

  return (
    <header className={`header-area header-style-two header--fixed ${color}`}>
      <div className="header-wrapper">
        <div className="header-left d-flex align-items-center">
          <div className="logo">
            <a href={homeLink}>
            </a>
          </div>
          <nav className="mainmenunav d-lg-block ml--50">
            <Scrollspy className="mainmenu" items={['home', 'about', 'service', 'portfolio', 'blog', 'contact']} currentClassName="is-current" offset={-200}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#service">Service</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
            </Scrollspy>
          </nav>
        </div>
        <div className="header-right">
          <div className="social-share-inner">
            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
              {SocialShare.map((val, i) => (
                <li key={i}><a target="_blank" href={`${val.link}`}>{val.Social}</a></li>
              ))}
            </ul>
          </div>
          <div className="header-btn">
            <a className="rn-btn" href="#contact">
              <span>Contact Me!</span>
            </a>
          </div>
          {/* Start Humberger Menu  */}
          <div className="humberger-menu d-block d-lg-none pl--20">
            <span onClick={menuTrigger} className="menutrigger text-white"><FiMenu /></span>
          </div>
          {/* End Humberger Menu  */}
          <div className="close-menu d-block d-lg-none">
            <span onClick={closeMenuTrigger} className="closeTrigger"><FiX /></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderDefault;
