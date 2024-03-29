import React from "react";
import '../App.css'
const Footer = () => {
  return (
    <footer className="footer-area footer--light col-xl-12">
      <div className="footer-big col-md-12">
        {/* <!-- start .container --> */}
        {/* <div className="p-1"> */}
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
                  <ul className="contact-details no-padding">
                    <li>
                      <span className="icon-earphones"></span> Call Us:
                      <a href="tel:335-347-325-7" className="small">+923353473257</a>
                    </li>
                    <li>
                      <span className="icon-envelope-open"></span>
                      <a href="kamikamran660@gmail.com" className="small">
                        kamikamran660@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Ends: .footer-widget --> */}
            </div>
            {/* <!-- end /.col-md-4 --> */}
            <div className="col-md-3 col-sm-12">
              <div className="footer-widget">
                <div className="footer-menu ">
                  <h4 className="footer-widget-title ">Popular Category</h4>
                  <ul className="no-padding">
                    <li>
                      Wordpress
                    </li>
                    <li>
                      React Website
                    </li>
                  </ul>
                </div>
                {/* <!-- end /.footer-menu --> */}
              </div>
              {/* <!-- Ends: .footer-widget --> */}
            </div>
            {/* <!-- end /.col-md-3 --> */}

            <div className="col-md-3 col-sm-12">
              <div className="footer-widget">
                <div className="footer-menu">
                  <h4 className="footer-widget-title ">Our Company</h4>
                  <ul className="no-padding">
                    <li>
                      About Us
                    </li>
                    <li>
                      <a href="#how-it-works">How It Works</a>
                    </li>
                    <li>
                      <a href="#testimonials">Testimonials</a>
                    </li>
                    <li>
                      Contact Us
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

            <div className="col-md-3 col-sm-12">
              <div className="footer-widget">
                <div className="footer-menu no-padding">
                  <h4 className="footer-widget-title">Help Support</h4>
                  <ul className="no-padding">
                    <li>
                      Terms &amp; Conditions
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      Refund Policy
                    </li>
                    <li>
                      <a href="#faq">FAQs</a>
                    </li>
                    <li>
                      <a href="https://metaperficient.com/" rel="noopener noreferrer" target="_blank">Blog</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>

      <div className="mini-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-text">
                <p>
                  © 2022
                  MetaPer. All rights reserved. Created
                  by
                  <a href="https://metaperficient.com/" rel="noopener noreferrer" target="_blank">MetaPerficient</a>
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
