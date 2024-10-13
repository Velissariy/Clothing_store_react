import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="container">
            <div className="footer__leftSide">
              <img src="/img/face.png" alt="face"/>
              <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                <span>a pulvinar purus condimentum</span>“</p>
            </div>
            <div className="footer__rightSide">
              <p>SUBSCRIBE<br/><span>FOR OUR NEWLETTER AND PROMOTION</span></p>
              <form method="post" target="#" className="footer__email">
                <label>
                  <input placeholder="Enter Your Email"/>
                </label>
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="socials">
        <div className="container">
          <div className="socials__copyright">
            <p>© 2022 Brand All Rights Reserved.</p>
          </div>
          <div className="socials__icons">
            <a href="#">
              <div className="socials__icon">
                <img src="/img/facebook.svg" alt="facebook"/>
              </div>
            </a>
            <a href="#">
              <div className="socials__icon">
                <img src="/img/instagram.svg" alt="instagram"/>
              </div>
            </a>
            <a href="#">
              <div className="socials__icon">
                <img src="/img/pinterest.svg" alt="pinterest"/>
              </div>
            </a>
            <a href="#">
              <div className="socials__icon">
                <img src="/img/twitter.svg" alt="twitter"/>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;