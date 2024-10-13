import React from 'react';

const Banner = () => {
  return (
    <div className="banner">
      <div className="bigContainer">
        <img src="/img/man.png" alt="Men" className="banner__leftSide"/>
        <div className="banner__rightSide">
          <div className="banner__texts">
            <p>THE BRAND</p>
            <p className="banner__text1">OF LUXERIOUS <span className="banner__text2">FASHION</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;