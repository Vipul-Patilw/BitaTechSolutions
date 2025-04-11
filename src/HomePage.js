
import React from 'react';
import './index.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="hero-section">
        <nav className="navbar">
          <h1 className="logo">YourBrand</h1>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h2>Welcome to Your Brand</h2>
          <p>Exceptional quality, timeless design, and innovation at its best.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>

      <main>
        <section id="services" className="section services">
          <h2>Our Services</h2>
          <div className="card-container">
            <div className="card">Premium Products</div>
            <div className="card">Tailored Solutions</div>
            <div className="card">Innovative Designs</div>
          </div>
        </section>
        <section id="about" className="section about">
          <h2>About Us</h2>
          <p>Your brand redefines excellence with a commitment to delivering quality and style.</p>
        </section>
        <section id="contact" className="section contact">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 YourBrand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

