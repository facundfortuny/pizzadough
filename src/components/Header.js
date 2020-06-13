import React from 'react';

import pizza from '../images/pizza.svg';

import '../css/style.scss';

const Header = () => (
  <section className="hero is-white has-text-centered">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column">
            <img className="header-image" src={pizza} alt="pizza" />
            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
              Pizza Dough Caculator
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Header;
