import React from 'react';

import '../css/style.scss';

const Footer = ({ className }) => {
  return (
    <footer className={className + ' footer center'}>
      <div className="container">
        <div className="content has-text-centered is-white">
          <p>
            <small>
              Copyright {new Date().getFullYear()} &copy;
              <a
                href="http://facundfortuny.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Facund Fortuny</span>
              </a>
              All rights reserved.
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
