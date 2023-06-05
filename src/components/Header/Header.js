import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div>
      <section class="navigation">
        <div class="nav-container">
          <div class="brand">
            <img src='/logo.png' alt='' class="logo" />
            <ul class="nav-lists">
              <li><a href="#!">Features</a></li>
              <li><a href="#!">Testimonials</a></li>
              <li><a href="#!">Pricing</a></li>
            </ul>
          </div>
          <nav>
            <div class="nav-mobile">
              <a id="nav-toggle" href="#!"><span></span></a>
            </div>
            <ul class="nav-list">
              <li><a href="#!">Sign in</a></li>
              <button class="button-blue" >Get started today</button>
            </ul>
          </nav>
        </div>
      </section>
      <div class="banner">
        <div class="banner-head">
          <h2 class="header">Account <span class="blue">made simple</span> for small business.</h2>
        </div>
        <div class="banner-para">
          <p >Most bookkeeping software is accurate, but hard to use. We make the opposite trade off, and hope you don’t get audited.</p>
        </div>
        <div class="button">
          <button class="button-black" >Get 6 months free</button>
          <button class="button-white" >Watch Video</button>
        </div>
      </div>
      <div>
        <div class="text-header">
          <p>Trusted by these six companies so far</p>
        </div>
        <div class="logo-images">
          <img src='/tuple.png' alt='' class="tuple" />
          <img src='/tuple.png' alt='' class="tuple" />
          <img src='/tuple.png' alt='' class="tuple" />
          <img src='/tuple.png' alt='' class="tuple" />
          <img src='/tuple.png' alt='' class="tuple" />
          <img src='/tuple.png' alt='' class="tuple" />
        </div>
      </div>
    </div>
  )
}

export default Header