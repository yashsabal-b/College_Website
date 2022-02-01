import React from "react";
import "../../ukti.org/css/style.css";
function footer() {
  return (
    <div>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-md-8 footer-info">
                <img src="img/logo.png" alt="UKTI" />
                <p>
                  The cultural forum of Jain Deemed-to-be-University aims at
                  providing a diverse cultural work place for students to
                  showcase their cultural prowess. It is a platform that houses
                  a melange of talented individuals who are the artful masters
                  of their crafts. In order to ensure the holistic development
                  of every student UKTI hosts a plethora of events and fests,
                  which promotes a sense of kinship and sportsman ship among the
                  students of various streams within the campus and various
                  universities.
                </p>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="fa fa-angle-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i class="fa fa-angle-right"></i>{" "}
                    <a href="#about">About us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              Jain University School of Sciences, 1st Cross, JC Road, Bangalore
              - 560027
              <strong>Phone:</strong> +91 9148099769
              <strong>Email:</strong> culturalforum.jgi@gmail.com
              <div class="social-links">
                <a
                  href="https://www.facebook.com/uktitheculturalforum/"
                  class="facebook"
                >
                  <i class="fa fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/kritya.2021/"
                  class="instagram"
                >
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="https://www.jainuniversity.ac.in" class="twitter">
                  <i class="fa fa-desktop"></i>
                </a>
                <a
                  href="https://www.instagram.com/maymays.for.the.jujus/"
                  class="google-plus"
                >
                  <i class="fa fa-meh-o"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong>UKTI - The Cultural Forum</strong>. All
            Rights Reserved
          </div>
          <div class="credits">
            Designed by{" "}
            <a href="https://youtu.be/dQw4w9WgXcQ">8-bit ~ The Tech Team</a>
          </div>
        </div>
      </footer>
    </div>
  );

  {
    /* <div class="container">
          <div class="copyright">
            &copy; Copyright <strong>UKTI - The Cultural Forum</strong>. All Rights Reserved
          </div>
          <div class="credits">
        
            Designed by <a href="https://youtu.be/dQw4w9WgXcQ">8-bit ~ The Tech Team</a>
          </div>
        </div>
    </footer> */
  }
}

export default footer;
