import React from 'react';
import Particles from 'react-particles-js';
import Helmet from '../theme/layout/common/Helmet';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import TextLoop from "react-text-loop";
import HeaderDefault from '../theme/layout/header/header-default';
import TabTwo from '../theme/elements/tabs/tab-two';
import ServiceListDefault from '../theme/elements/services/service-list-default';
import FooterDefault from '../theme/layout/footer/footer-default';
import ContactDefault from '../theme/elements/contact/contact-default';

const SlideList = [
  {
    textPosition: 'text-left',
    category: 'Welcome to my website',
    description: '',
    buttonText: '',
    buttonLink: ''
  }
]
export const HomeDarkPage = () => {
  let title = 'Aneudys Amparo',
    description = `
    Hey! I\'m Self-taught Fullstack, Frontend, Mobile App and Backend Developer based on Santo Domingo, Dominican Republic.
    I have over 8+ year of Software Development on Web and Mobile, I work with the latest technologies,
    language programming and framework like Javascript, Angular, ReacJS (this website),
    NodeJS, Swift, Kotlin, Dart(Flutter), MongoDB, SQL and more.
    I also worked with the most popular CMS called Wordpress.
    I develop any kind of webapp or mobile app like business website, e-commerce, general mobile apps and more.
    Contact me if you want any of my service.`;

  return (
    <div className="active-dark">
      <Helmet title={title} description="Fullstack, Frontend, Mobile App and Backend Developer based on Santo Domingo, Dominican Republic." />

      <HeaderDefault homeLink="/" themeColor="" color="color-black"></HeaderDefault>
      {/* Start Slider Area   */}
      <div id="home" className="fix with-particles">
        <div className="frame-layout__particles">
          <Particles
            params={{
              "particles": {
                "number": {
                  "value": 50
                },
                "size": {
                  "value": 4
                }
              },
              "interactivity": {
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "repulse"
                  }
                }
              }
            }}
          />
        </div>
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {SlideList.map((value, index) => (
            <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex bg_image bg_image--1" key={index} data-black-overlay="6">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ''}
                      <h1 className="title">Hi, I’m Aneudys Amparo <br />
                        <TextLoop>
                          <span> FullStack Web Developer.</span>
                          <span> Mobile Developer.</span>
                          <span> FrontEnd Developer.</span>
                          <span> Backend Developer.</span>
                        </TextLoop>{" "}
                      </h1>
                      <h2>from Dominican Republic.</h2>
                      {value.description ? <p className="description">{value.description}</p> : ''}
                      {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Slide */}
        </div>
      </div>
      {/* End Slider Area   */}

      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img className="w-100" src="/assets/images/about/about-8.jpg" alt="About Images" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <TabTwo tabStyle="tab-style--1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area */}

      {/* Start Service Area  */}
      <div id="service" className="fix">
        <div className="service-area creative-service-wrapper ptb--120 bg_color--5" >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">How could I help you?</h2>
                  <p>There are many ways of how I could give value to you, but here the most of me.</p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceListDefault items={6} column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div id="portfolio" className="fix">
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title">My Latest Project</h2>
                    <p>I'm building this section, please stay tuned of just contact me if you need to know anything else</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <p>Building it :)</p>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="view-more-btn mt--60 mt_sm--30 text-center">
                    <a className="rn-button-style--2 btn-solid" href="#contact"><span>Know More</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start Contact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120 bg_color--1">
          <ContactDefault image="/assets/images/about/about-8.jpg" title="Contact Me." />
        </div>
      </div>
      {/* End Contact Area */}

      <FooterDefault />
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={3700}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default HomeDarkPage;
