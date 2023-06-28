import './index.css';

const Home = () => {
  return (
    <div>
      <div class="containerss">
        <section>
          <em>WELCOME TO MEDWIN CARES</em>
          <h1>Take the world's best quality Treatment</h1>
          <h5>
            We have taken great satisfaction and pleasure in providing our
            community with the best care possible for the past 8 years, and we
            look forward to continuing to do so with the support of our many
            thousands of patients.
          </h5>
          <a href="#" class="btn1">
            Learn More
          </a>
        </section>
      </div>

      {/* <section class="section1">
        <table>
          <tr>
            <td>
              <div class="form">
                <h4>REQUEST FOR YOUR</h4>
                <h1>Consultation</h1>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="Name"
                  maxlength="60"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  maxlength="100"
                  required
                />
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder=""
                  required
                />
                <select name="service">
                  <option value="emergencyservice">Emergency Service</option>
                  <option value="certifiedservice">Certified Service</option>
                </select>
                <button type="submit" class="btn2">
                  BOOK APPOINTMENT
                </button>
              </div>
            </td>
            <td>
              <em>ABOUT US</em>
              <h1>Get better care for your health</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              </p>
            </td>
          </tr>
        </table>
      </section> */}

      {/* 
<section class="section2">
<div class="cards">
<div class="card">
<i class="fa fa-medkit"></i>
<h1>Qualified Doctors</h1>
<p>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.</p>
</div>
<div class="card">
<i class="fa fa-certificate"></i>
<h1>Certified Services</h1>
<p>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.</p>
</div>
<div class="card">
<i class="fa fa-stethoscope"></i>
<h1>Advanced Equipment</h1>
<p>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.</p>
</div>
<div class="card">
<i class="fa fa-heartbeat"></i>
<h1>Emergency Service</h1>
<p>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.</p>
</div>
</div>
</section> */}
      {/* 
      <section class="section3">
        <div class="cards">
          <div class="card">
            <section>
              <h1>Laboratory Services</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </section>
          </div>
          <div class="card">
            <section>
              <h1>General Treatment</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </section>
          </div>
          <div class="card">
            <section>
              <h1>Orthopedician</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </section>
          </div>
        </div>
        <div class="content">
          <h1>We are well experienced doctors</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </p>
        </div>
      </section> */}

      {/* <section class="section4">
<div class="title_header">
<h1>Our Gallery Portfolio</h1>
</div>
<div class="row">
<div class="column">
<img src="https://i.ibb.co/Sft7gKp/bg2.webp" style={{width:"100%"}} onclick="openModal();currentSlide(1)" class="hover-shadow cursor"/>
</div>
<div class="column">
<img src="https://i.ibb.co/Sft7gKp/bg2.webp" style={{width:"100%"}} onclick="openModal();currentSlide(2)" class="hover-shadow cursor"/>
</div>
<div class="column">
<img src="https://i.ibb.co/Sft7gKp/bg2.webp" style={{width:"100%"}} onclick="openModal();currentSlide(3)" class="hover-shadow cursor"/>
</div>
<div class="column">
<img src="https://i.ibb.co/Sft7gKp/bg2.webp" style={{width:"100%"}} onclick="openModal();currentSlide(4)" class="hover-shadow cursor"/>
</div>
<div class="column">
<img src="https://i.ibb.co/Sft7gKp/bg2.webp" style={{width:"100%"}} onclick="openModal();currentSlide(5)" class="hover-shadow cursor"/>
</div>
<div class="column">
<img src="https://i.ibb.co/Sft7gKp/bg2.webp" style={{width:"100%"}} onclick="openModal();currentSlide(6)" class="hover-shadow cursor"/>
</div>
<div class="column">
<img src="https://i.ibb.co/Sft7gKp/bg2.webp" style={{width:"100%"}} onclick="openModal();currentSlide(7)" class="hover-shadow cursor"/>
</div>
<div class="column">
<img src="https://i.ibb.co/Sft7gKp/bg2.webp" style={{width:"100%"}} onclick="openModal();currentSlide(8)" class="hover-shadow cursor"/>
</div>
</div>

<div id="myModal" class="modal">
<span class="close cursor" onclick="closeModal()">&times;</span>
<div class="modal-content">

<div class="mySlides">
<div class="numbertext">1 / 7</div>
<img src="https://i.ibb.co/Sft7gKp/bg2.webp" class="animate" style={{width:"100%"}}/>
</div>

<div class="mySlides">
<div class="numbertext">2 / 7</div>
<img src="https://i.ibb.co/Sft7gKp/bg2.webp" class="animate" style={{width:"100%"}}/>
</div>

<div class="mySlides">
<div class="numbertext">3 / 7</div>
<img src="https://i.ibb.co/Sft7gKp/bg2.webp" class="animate" style={{width:"100%"}}/>
</div>

<div class="mySlides">
<div class="numbertext">4 / 7</div>
<img src="https://i.ibb.co/Sft7gKp/bg2.webp" class="animate" style={{width:"100%"}}/>
</div>

<div class="mySlides">
<div class="numbertext">5 / 7</div>
<img src="https://i.ibb.co/Sft7gKp/bg2.webp" class="animate" style={{width:"100%"}}/>
</div>

<div class="mySlides">
<div class="numbertext">6 / 7</div>
<img src="https://i.ibb.co/Sft7gKp/bg2.webp" class="animate" style={{width:"100%"}}/>
</div>

<div class="mySlides">
<div class="numbertext">7 / 7</div>
<img src="https://i.ibb.co/Sft7gKp/bg2.webp" class="animate" style={{width:"100%"}}/>
</div>

<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>

<div class="caption-containerss">
<p id="caption"></p>
</div>
</div>
</div>
</section> */}

      {/* <img src="https://i.ibb.co/ZLHbWJz/footer.png" class="footer_image"/>
<footer>
<div class="column">
<a class="footer_title">COMPANY_NAME</a>
<a>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</a>
<a href="#" title="Facebook"><i class="fa fa-facebook"></i></a>
<a href="#" title="Instagram"><i class="fa fa-instagram"></i></a>
<a href="#" title="Twitter"><i class="fa fa-twitter"></i></a>
</div>
<div class="column">
<a class="footer_title">OTHER LINKS</a>
<a href="#">Privacy Policy</a>
<a href="#">Terms & Conditions</a>
<a href="#">Ticket</a>
<a href="#">Contact Us</a>
</div>
<div class="column">
<a class="footer_title">SHORT CUT</a>
<a href="">Our Services</a>
<a href="">Our Blog</a>
<a href="">Our Projects</a>
<a href="">About Us</a>
</div>
<div class="column">
<a class="footer_title">LATEST NEWS</a>
<a href="" title="Lorem ipsum dolor sit amet"><img src="https://source.unsplash.com/50x50/?green,trees"/></a>
<a href="" title="Lorem ipsum dolor sit amet"><img src="https://source.unsplash.com/50x50/?green,tree"/></a>
<a href="" title="Lorem ipsum dolor sit amet"><img src="https://source.unsplash.com/50x50/?green,plant"/></a>
<a href="" title="Lorem ipsum dolor sit amet"><img src="https://source.unsplash.com/50x50/?green,forest"/></a>
<a href="" title="Lorem ipsum dolor sit amet"><img src="https://source.unsplash.com/50x50/?green,afforestation"/></a>
</div>
<div class="column">
<a class="footer_title">GET IN TOUCH</a>
<a title="Address"><i class="fa fa-map-marker"></i> 007, street, province/state, country - zipcode</a>
<a href="emailto:" title="Email"><i class="fa fa-envelope"></i> email@serviceprovider.domain</a>
<a href="tel:" title="Contact"><i class="fa fa-phone"></i> +(x)-xxxx-xxxxx</a>
</div>


<div class="sub-footer">
© CopyRights 2021 Company_name || All rights reserved
</div>
</footer> */}
    </div>
  );
};
export default Home;
