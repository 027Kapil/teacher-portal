import React from "react";

const Footer = () => (
    <footer className="bg-dark text-white mt-5 p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h6 className="border-bottom border-primary pb-2">EXPLORE</h6>
            <ul className="list-unstyled">
              <li>For Job Seekers</li>
              <li>For Schools</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="border-bottom border-primary pb-2">QUICK LINKS</h6>
            <ul className="list-unstyled">
              <li>How it Works</li>
              <li>Browse Jobs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="border-bottom border-primary pb-2">FOLLOW</h6>
            <ul className="list-unstyled">
              <li>Linkedin</li>
              <li>Instagram</li>
              <li>Google</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="border-bottom border-primary pb-2">CONTACT</h6>
            <ul className="list-unstyled">
              <li>hello@teachersrecruiter.in</li>
              <li>+91 – 90 390 32383</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          <small>Privacy Policy | Terms Conditions & Refund Policy | Fraud Alert</small><br />
          <small>Teachers Recruiter © 2025, All Right Reserved.</small>
        </div>
      </div>
    </footer>
  );

export default Footer;
