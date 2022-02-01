import React from "react";
import { Link } from "react-router-dom";
import "../../../ukti.org/css/style.css";
import "../../../ukti.org/img/favicon.png";
import "../../../ukti.org/img/apple-touch-icon.png";
// import "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800";
import "../../../ukti.org/lib/bootstrap/css/bootstrap.min.css";
// import "../../../ukti.org/lib/font-awesome/css/font-awesome.min.css";
import "../../../ukti.org/lib/animate/animate.min.css";
import "../../../ukti.org/lib/venobox/venobox.css";
import "../../../ukti.org/lib/owlcarousel/assets/owl.carousel.min.css";
import img from "../../../img/supporters/123.png";

function Home() {
  return (
    <div className="home_page">
      <section id="intro">
        <div class="intro-container wow fadeIn">
          <h1 class="mb-4 pb-0">KRITYA</h1>
          <h2 class="mb-4 pb-0">
            <span>The Cultural</span> Fest
          </h2>
          <p class="mb-4 pb-0">
            An Inter-Collegiate Fest <br />
            15th - 16th April
          </p>
          <a
            href=""
            class="venobox play-btn mb-4"
            data-vbtype="video"
            data-autoplay="true"
          ></a>

          <Link to="/login" className="about-btn scrollto">
            <i></i> Register
          </Link>
        </div>
      </section>

      <main id="main">
        <section id="about">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <h2>About The Event</h2>
                <p>
                  Kritya is an Inter-Collegiate event of Jain University, School
                  of Sciences that has been held for the last six years. It aims
                  at providing a pedestal for collaboration of students from
                  various instituitions in parading their excitement and
                  intrigue wholeheartedly. Taking place over two days, this fest
                  is a culmination of different events anctivities lined up for
                  students to showcase their talents and skills in the most
                  enthralling and graceful way.
                </p>
                <p>
                  Extra-Curriular activites form a significant current in the
                  life stream of a student and thus, it is an event that focuses
                  on refining the students' personalities and providing them
                  with a platform to foster their talents in a constructive
                  manner and with positive energy.
                </p>
              </div>
              <div class="col-lg-3">
                <h2>Where</h2>
                <p>
                  Jain University School of Sciences, 1st Cross, JC Road,
                  Bangalore - 560027
                </p>
              </div>
              <div class="col-lg-3">
                <h2>When</h2>
                <p>15th & 16th April Thursaday - Friday</p>
              </div>
            </div>
          </div>
        </section>
        <section id="speakers" class="wow fadeInUp">
          <div class="container">
            <div class="section-header">
              <h2>Clubs And Teams</h2>
              <p>The Clubs, Teams and Associaions of our College</p>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="speaker">
                  <img
                    src="img/speakers/west-dance.jpg"
                    alt="Speaker 1"
                    class="img-fluid"
                  />
                  <div class="details">
                    <h3>
                      <a href="#">EXIMIUS CREW</a>
                    </h3>
                    {/* <p>The Western Dance Team</p> */}
                    <div class="social">
                      {/* <!--<a href=""><i class="fa fa-twitter"></i></a>
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-google-plus"></i></a>
                  <a href=""><i class="fa fa-linkedin"></i></a>--> */}
                      <p>western dance team</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="speaker">
                  <img
                    src="img/speakers/photo1.jpg"
                    alt="Speaker 2"
                    class="img-fluid"
                  />
                  <div class="details">
                    <h3>
                      <a href="marco.html">MARCOGRAPHIA</a>
                    </h3>

                    <div class="social">
                      <p>the photography club</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="speaker">
                  <img
                    src="img/speakers/ind-dance1.jpg"
                    alt="Speaker 3"
                    class="img-fluid"
                  />
                  <div class="details">
                    <h3>
                      <a href="#">AMOKHA</a>
                    </h3>

                    <div class="social">
                      <p>indian dance team</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="speaker">
                  <img
                    src="img/speakers/theatre.jpg"
                    alt="Speaker 2"
                    class="img-fluid"
                  />
                  <div class="details">
                    <h3>
                      <a href="dama.html">DAMARUGA</a>
                    </h3>

                    <div class="social">
                      <p>the theatre club</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="speaker">
                  <img src="img/core.jpg" alt="Speaker 2" class="img-fluid" />
                  <div class="details">
                    <h3>
                      <a href="core.html">THE CORE COMMITEE</a>
                    </h3>

                    <div class="social">
                      <p>UKTI - Core Commitee</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="speaker">
                  <img
                    src="img/speakers/lit.jpg"
                    alt="Speaker 2"
                    class="img-fluid"
                  />
                  <div class="details">
                    <h3>
                      <a href="#">LITERATURE CLUBS</a>
                    </h3>

                    <div class="social">
                      <p>Kannada, English, Hindi, Sanskrit</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="speaker">
                  <img
                    src="img/speakers/tech.jpg"
                    alt="Speaker 4"
                    class="img-fluid"
                  />
                  <div class="details">
                    <h3>
                      <a href="#">8-bit</a>
                    </h3>

                    <div class="social">
                      <p>the technical team</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="speaker">
                  <img
                    src="img/speakers/fash1.jpg"
                    alt="Speaker 5"
                    class="img-fluid"
                  />
                  <div class="details">
                    <h3>
                      <a href="fash.html">TARASHNA</a>
                    </h3>

                    <div class="social">
                      <p>the fashion team</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="speaker">
                  <img
                    src="img/speakers/west-mus.jpg"
                    alt="Speaker 6"
                    class="img-fluid"
                  />
                  <div class="details">
                    <h3>
                      <a href="arohi.html">AROHI</a>
                    </h3>

                    <div class="social">
                      <p>western music team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="subscribe">
          <div class="container wow fadeInUp">
            <div class="section-header">
              <h2>Meta/morph</h2>
              <p>
                The inevitability of change is a universal constant. Change
                occurs in numerous forms. One such change which we all faced was
                during the recent pandemic. Meta/morph represents the need of
                change, the need of the fire to cause evolution, to mutate and
                become better versions of ourselves.
              </p>
              <p>
                {" "}
                We, Jain (deemed-to-be) University, School of Sciences, welcome
                you to join us in this process of change from the old to the
                new.
              </p>
            </div>
          </div>
        </section>
        <section id="schedule" class="section-with-bg">
          <div class="container wow fadeInUp">
            <div class="section-header">
              <h2>Event Schedule</h2>
              <p>Here is our event schedule</p>
            </div>

            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#day-1"
                  role="tab"
                  data-toggle="tab"
                >
                  Day 1
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#day-2" role="tab" data-toggle="tab">
                  Day 2
                </a>
              </li>
            </ul>

            <h3 class="sub-heading">To Be Added</h3>

            <div class="tab-content row justify-content-center">
              <div
                role="tabpanel"
                class="col-lg-9 tab-pane fade show active"
                id="day-1"
              >
                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>09:30 AM</time>
                  </div>
                  <div class="col-md-10">
                    <h4>Registration</h4>
                    <p></p>
                  </div>
                </div>

                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>10:00 AM</time>
                  </div>
                  <div class="col-md-10">
                    <img src="img/speakers/1.jpg" alt="Brenden Legros" />

                    <p></p>

                    <div id="horse" onclick="off()">
                      <div id="horse-text">Overlay text</div>
                    </div>

                    <h4 onclick="on()">
                      Event 1 <span>xyz</span>
                    </h4>
                  </div>
                </div>

                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>09:30 AM</time>
                  </div>
                  <div class="col-md-10">
                    <h4>
                      Event 2 <span>xyz</span>
                    </h4>
                    <p></p>
                  </div>
                </div>

                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>12:00 AM</time>
                  </div>
                  <div class="col-md-10">
                    <h4>
                      Event 3 <span>xyz</span>
                    </h4>
                    <p></p>
                  </div>
                </div>

                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>02:00 PM</time>
                  </div>
                  <div class="col-md-10">
                    <h4>
                      Event 4 <span>xyz</span>
                    </h4>
                    <p></p>
                  </div>
                </div>

                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>03:00 PM</time>
                  </div>
                  <div class="col-md-10">
                    <h4>
                      Event 5 <span>xyz</span>
                    </h4>
                    <p></p>
                  </div>
                </div>

                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>04:00 PM</time>
                  </div>
                  <div class="col-md-10">
                    <h4>
                      Event 6 <span>xyz</span>
                    </h4>
                    <p></p>
                  </div>
                </div>
              </div>

              <div role="tabpanel" class="col-lg-9  tab-pane fade" id="day-2">
                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>10:00 AM</time>
                  </div>
                  <div class="col-md-10">
                    <div class="speaker">
                      <img src="img/speakers/1.jpg" alt="Brenden Legros" />
                    </div>
                    <h4>
                      Libero corrupti explicabo itaque.{" "}
                      <span>Brenden Legros</span>
                    </h4>
                    <p>Facere provident incidunt quos voluptas.</p>
                  </div>
                </div>

                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>11:00 AM</time>
                  </div>
                  <div class="col-md-10">
                    <div class="speaker">
                      <img src="img/speakers/2.jpg" alt="Hubert Hirthe" />
                    </div>
                    <h4>
                      Et voluptatem iusto dicta nobis.{" "}
                      <span>Hubert Hirthe</span>
                    </h4>
                    <p>
                      Maiores dignissimos neque qui cum accusantium ut sit sint
                      inventore.
                    </p>
                  </div>
                </div>

                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>12:00 AM</time>
                  </div>
                  <div class="col-md-10">
                    <div class="speaker">
                      <img src="img/speakers/3.jpg" alt="Cole Emmerich" />
                    </div>
                    <h4>
                      Explicabo et rerum quis et ut ea.{" "}
                      <span>Cole Emmerich</span>
                    </h4>
                    <p>
                      Veniam accusantium laborum nihil eos eaque accusantium
                      aspernatur.
                    </p>
                  </div>
                </div>

                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>02:00 PM</time>
                  </div>
                  <div class="col-md-10">
                    <div class="speaker">
                      <img src="img/speakers/4.jpg" alt="Jack Christiansen" />
                    </div>
                    <h4>
                      Qui non qui vel amet culpa sequi.{" "}
                      <span>Jack Christiansen</span>
                    </h4>
                    <p>
                      Nam ex distinctio voluptatem doloremque suscipit iusto.
                    </p>
                  </div>
                </div>

                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>03:00 PM</time>
                  </div>
                  <div class="col-md-10">
                    <div class="speaker">
                      <img src="img/speakers/5.jpg" alt="Alejandrin Littel" />
                    </div>
                    <h4>
                      Quos ratione neque expedita asperiores.{" "}
                      <span>Alejandrin Littel</span>
                    </h4>
                    <p>
                      Eligendi quo eveniet est nobis et ad temporibus odio quo.
                    </p>
                  </div>
                </div>

                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>04:00 PM</time>
                  </div>
                  <div class="col-md-10">
                    <div class="speaker">
                      <img src="img/speakers/6.jpg" alt="Willow Trantow" />
                    </div>
                    <h4>
                      Quo qui praesentium nesciunt <span>Willow Trantow</span>
                    </h4>
                    <p>
                      Voluptatem et alias dolorum est aut sit enim neque
                      veritatis.
                    </p>
                  </div>
                </div>
              </div>

              <div role="tabpanel" class="col-lg-9  tab-pane fade" id="day-3">
                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>10:00 AM</time>
                  </div>
                  <div class="col-md-10">
                    <div class="speaker">
                      <img src="img/speakers/2.jpg" alt="Hubert Hirthe" />
                    </div>
                    <h4>
                      Et voluptatem iusto dicta nobis.{" "}
                      <span>Hubert Hirthe</span>
                    </h4>
                    <p>
                      Maiores dignissimos neque qui cum accusantium ut sit sint
                      inventore.
                    </p>
                  </div>
                </div>

                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>11:00 AM</time>
                  </div>
                  <div class="col-md-10">
                    <div class="speaker">
                      <img src="img/speakers/3.jpg" alt="Cole Emmerich" />
                    </div>
                    <h4>
                      Explicabo et rerum quis et ut ea.{" "}
                      <span>Cole Emmerich</span>
                    </h4>
                    <p>
                      Veniam accusantium laborum nihil eos eaque accusantium
                      aspernatur.
                    </p>
                  </div>
                </div>

                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>12:00 AM</time>
                  </div>
                  <div class="col-md-10">
                    <div class="speaker">
                      <img src="img/speakers/1.jpg" alt="Brenden Legros" />
                    </div>
                    <h4>
                      Libero corrupti explicabo itaque.{" "}
                      <span>Brenden Legros</span>
                    </h4>
                    <p>Facere provident incidunt quos voluptas.</p>
                  </div>
                </div>

                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>02:00 PM</time>
                  </div>
                  <div class="col-md-10">
                    <div class="speaker">
                      <img src="img/speakers/4.jpg" alt="Jack Christiansen" />
                    </div>
                    <h4>
                      Qui non qui vel amet culpa sequi.{" "}
                      <span>Jack Christiansen</span>
                    </h4>
                    <p>
                      Nam ex distinctio voluptatem doloremque suscipit iusto.
                    </p>
                  </div>
                </div>

                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>03:00 PM</time>
                  </div>
                  <div class="col-md-10">
                    <div class="speaker">
                      <img src="img/speakers/5.jpg" alt="Alejandrin Littel" />
                    </div>
                    <h4>
                      Quos ratione neque expedita asperiores.{" "}
                      <span>Alejandrin Littel</span>
                    </h4>
                    <p>
                      Eligendi quo eveniet est nobis et ad temporibus odio quo.
                    </p>
                  </div>
                </div>

                <div class="row schedule-item">
                  <div class="col-md-2">
                    <time>04:00 PM</time>
                  </div>
                  <div class="col-md-10">
                    <div class="speaker">
                      <img src="img/speakers/6.jpg" alt="Willow Trantow" />
                    </div>
                    <h4>
                      Quo qui praesentium nesciunt <span>Willow Trantow</span>
                    </h4>
                    <p>
                      Voluptatem et alias dolorum est aut sit enim neque
                      veritatis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="supporters" class="section-with-bg wow fadeInUp">
          <div class="container">
            <div class="section-header">
              <h2>Sponsors</h2>
            </div>

            <div class="row no-gutters supporters-wrap clearfix">
              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="supporter-logo">
                  {/* <img src={img} class="img-fluid" alt="" /> */}
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="supporter-logo">
                  <img src={img} class="img-fluid" alt="" />
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="supporter-logo">
                  <img src={img} class="img-fluid" alt="" />
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="supporter-logo">
                  <img src="img/supporters/123.png" class="img-fluid" alt="" />
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="supporter-logo">
                  {/* <img src={img} class="img-fluid" alt="" /> */}
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="supporter-logo">
                  <img src={img} class="img-fluid" alt="" />
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="supporter-logo">
                  <img src={img} class="img-fluid" alt="" />
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="supporter-logo">
                  <img src="img/supporters/123.png" class="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" class="wow fadeInUp">
          <div class="container">
            <div class="section-header">
              <h2>FAQs </h2>
            </div>

            <div class="row justify-content-center">
              <div class="col-lg-9">
                <ul id="faq-list">
                  <li>
                    <a data-toggle="collapse" class="collapsed" href="#faq1">
                      When will the Registrations begin?{" "}
                      <i class="fa fa-minus-circle"></i>
                    </a>
                    <div id="faq1" class="collapse" data-parent="#faq-list">
                      <p>Coming Soon</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" class="section-bg wow fadeInUp">
          <div class="container">
            <div class="section-header">
              <h2>Contact Us</h2>
              <p>For More Information</p>
            </div>

            <div class="row contact-info">
              <div class="col-md-4">
                <div class="contact-address">
                  <i class="ion-ios-location-outline"></i>
                  <h3>Address</h3>
                  <address>
                    Jain University School of Sciences, 1st Cross, JC Road,
                    Bangalore - 560027
                  </address>
                </div>
              </div>

              <div class="col-md-4">
                <div class="contact-phone">
                  <i class="ion-ios-telephone-outline"></i>
                  <h3>Phone Number</h3>
                  <p>
                    <a href="tel:+919148099769">+91 9148099769</a>
                  </p>
                  <p>Nithin Kamath</p>
                  <p>(Cultural Secretary)</p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="contact-email">
                  <i class="ion-ios-email-outline"></i>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:culturalforum.jgi@gmail.com">
                      culturalforum.jgi@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
