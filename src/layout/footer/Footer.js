import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer-area footer--light">
      <div className="footer-big">
        {/* <!-- start .container --> */}
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div className="footer-widget">
                <div className="widget-about">
                  <img
                    src="http://placehold.it/250x80"
                    alt=""
                    className="img-fluid"
                  />
                  {/* <p>lorem ipsum</p> */}
                  <ul className="contact-details">
                    <li>
                      <span className="icon-earphones"></span> Call Us:
                      <a href="tel:344-755-111">+923353473257</a>
                    </li>
                    <li>
                      <span className="icon-envelope-open"></span>
                      <a href="mailto:support@aazztech.com">
                        kamikamran660@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Ends: .footer-widget --> */}
            </div>
            {/* <!-- end /.col-md-4 --> */}
            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu footer-menu--1">
                  <h4 className="footer-widget-title text-start">Popular Category</h4>
                  <ul>
                    <li>
                      <a href="#">Wordpress</a>
                    </li>
                    <li>
                      <a href="#">React Website</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- end /.footer-menu --> */}
              </div>
              {/* <!-- Ends: .footer-widget --> */}
            </div>
            {/* <!-- end /.col-md-3 --> */}

            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu">
                  <h4 className="footer-widget-title text-start">Our Company</h4>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#how-it-works">How It Works</a>
                    </li>
                    <li>
                      <a href="#testimonials">Testimonials</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#plan">Plan &amp; Pricing</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- end /.footer-menu --> */}
              </div>
              {/* <!-- Ends: .footer-widget --> */}
            </div>
            {/* <!-- end /.col-lg-3 --> */}

            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu no-padding">
                  <h4 className="footer-widget-title text-start">Help Support</h4>
                  <ul>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#">Refund Policy</a>
                    </li>
                    <li>
                      <a href="#faq">FAQs</a>
                    </li>
                    <li>
                      <a href="https://metaperficient.com/" target="_blank">Blog</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mini-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-text">
                <p>
                  © 2022
                  <a href="#">MetaPer</a>. All rights reserved. Created
                  by
                  <a href="https://metaperficient.com/" target="_blank">MetaPerficient</a>
                </p>
              </div>

              <div className="go_top">
                <span className="icon-arrow-up"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
