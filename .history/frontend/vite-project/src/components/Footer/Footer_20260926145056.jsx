import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.jpg'
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-main">
          <div className="footer-brand-block">
            <a className="footer-brand" href="#home" aria-label="Sneakers home">
              <span className="footer-brand-mark"><img src={logo} alt="Sneakers logo" /></span>
              <span>SNEAKERS</span>
            </a>
            <p>Step into everyday comfort with iconic styles made for your pace.</p>
            <div className="footer-socials" aria-label="Social media links">
              <a href="#instagram" aria-label="Instagram"><i className="bi bi-instagram" aria-hidden="true" /></a>
              <a href="#facebook" aria-label="Facebook"><i className="bi bi-facebook" aria-hidden="true" /></a>
              <a href="#twitter" aria-label="Twitter"><i className="bi bi-twitter-x" aria-hidden="true" /></a>
              <a href="#youtube" aria-label="YouTube"><i className="bi bi-youtube" aria-hidden="true" /></a>
            </div>
          </div>

          <div className="footer-links-block">
            <h2>Explore</h2>
            <a href="#shop">Shop all</a>
            <a href="#collections">New arrivals</a>
            <a href="#collections">Best sellers</a>
            <a href="#about">Our story</a>
          </div>

          <div className="footer-links-block">
            <h2>Help</h2>
            <a href="#shipping">Shipping &amp; returns</a>
            <a href="#size-guide">Size guide</a>
            <a href="#contact">Contact us</a>
            <a href="#faq">FAQs</a>
          </div>

          <div className="footer-newsletter">
            <span className="footer-eyebrow">Stay in the loop</span>
            <h2>Fresh drops, straight to your inbox.</h2>
            <form onSubmit={(event) => event.preventDefault()}>
              <label className="visually-hidden" htmlFor="footer-email">Email address</label>
              <input id="footer-email" type="email" placeholder="Your email address" required />
              <button type="submit" aria-label="Subscribe to newsletter"><i className="bi bi-arrow-up-right" aria-hidden="true" /></button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Copyright 2026 Sneakers. All rights reserved.</span>
          <div>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
