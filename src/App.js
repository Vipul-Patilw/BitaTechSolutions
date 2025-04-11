import React, { useEffect } from 'react';
import AOS from 'aos';
import Swiper from 'swiper';
import 'aos/dist/aos.css';
import 'swiper/css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init();

    const countUp = (el, target, duration) => {
      let start = 0;
      const step = Math.ceil(duration / target);
      const interval = setInterval(() => {
        start++;
        el.textContent = start;
        if (start >= target) clearInterval(interval);
      }, step);
    };

    countUp(document.getElementById('stat1'), 200, 50);
    countUp(document.getElementById('stat2'), 300, 50);
    countUp(document.getElementById('stat3'), 400, 50);

    new Swiper('.swiper', {
      loop: true,
      autoplay: { delay: 3000 },
    });
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="logo">BitaTech Solutions</div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1 data-aos="fade-up">Grow Your Brand with BitaTech Solutions</h1>
        <p data-aos="fade-up" data-aos-delay="100">
          We build stunning websites, engaging digital campaigns & captivating videos
        </p>
        <a href="#" className="cta-btn" data-aos="fade-up" data-aos-delay="200">
          Let's Work Together
        </a>
        <img
          src="https://emeritus.org/in/wp-content/uploads/sites/3/2022/12/What-is-Digital-Transformation-and-Why-is-it-important.jpg.optimal.jpg"
          alt="Dashboard"
          data-aos="zoom-in"
          data-aos-delay="300"
          style={{ height: '340px', maxWidth: '90%', marginTop: '40px' }}
        />
      </section>

      <section className="brands" data-aos="fade-up">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" />
      </section>

      <section className="features">
        <div className="feature" data-aos="fade-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
            alt="Web Dev"
            width="80"
            style={{ marginBottom: '15px' }}
          />
          <h3>Web Development</h3>
          <p>
            Modern, scalable, and secure websites and web apps tailored for your business needs.
          </p>
        </div>
        <div className="feature" data-aos="fade-up">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4149/4149640.png"
            alt="Marketing"
            width="80"
            style={{ marginBottom: '15px' }}
          />
          <h3>Digital Marketing</h3>
          <p>
            SEO, social media, and email marketing to expand your reach and drive real results.
          </p>
        </div>
        <div className="feature" data-aos="fade-left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2920/2920210.png"
            alt="Video Editing"
            width="80"
            style={{ marginBottom: '15px' }}
          />
          <h3>Video Editing</h3>
          <p>
            Creative and impactful video content for branding, promotions, and social platforms.
          </p>
        </div>
      </section>

      <section className="stats">
        <div className="stat">
          <h2 id="stat1">0</h2>
          <p>Happy Clients</p>
        </div>
        <div className="stat">
          <h2 id="stat2">0</h2>
          <p>Projects Completed</p>
        </div>
        <div className="stat">
          <h2 id="stat3">0</h2>
          <p>Videos Delivered</p>
        </div>
      </section>

      <section className="testimonials" data-aos="fade-up">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              "BitaTech transformed our business website!" – Neha, CEO
            </div>
            <div className="swiper-slide">
              "Their marketing strategy brought us 3x traffic!" – Rakesh, Entrepreneur
            </div>
            <div className="swiper-slide">
              "Amazing video edits for our ads. Highly recommended." – Priya, Brand Manager
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 BitaTech Solutions. All rights reserved.</p>
       
      </footer>
    </>
  );
}

export default App;
