import React from 'react';
import Helmet from '../theme/layout/common/helmet';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderDefault from '../theme/layout/header/header-default';
import FooterDefault from '../theme/layout/footer/footer-default';

const NotFoundPage = () => {
  return (
    <>
      <Helmet title="Not Found" description="Self-taught Software Developer based on Dominican Republic." />

      <HeaderDefault homeLink="/" themeColor="" color="color-black"></HeaderDefault>
      {/* Start Page Error  */}
      <div className="error-page-inner bg_color--4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <h1 className="title theme-gradient">404!</h1>
                <h3 className="sub-title">Page not found</h3>
                <span>The page you were looking for could not be found.</span>
                <div className="error-button">
                  <a className="rn-button-style--2 btn-solid" href="/">Back To Homepage</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Error  */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <FooterDefault />
    </>
  );
}

export default NotFoundPage;
