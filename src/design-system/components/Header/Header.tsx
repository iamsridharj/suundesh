import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <div className="container-fluid px-3 px-md-2 px-sm-3 px-lg-3 app-header navbar pb-3 pt-4">
      <div className="px-1 px-md-1 px-lg-3">
        <div className="row app-header-2 height d-flex flex-row">
          <div className="col-10">
            <img
              loading="lazy"
              src="https://media.konfhub.com/konfhub-logo-purple.svg"
              alt="Custom Icon"
              height="50"
              className="d-inline-block link-text"
            />
          </div>
          <div className="pro-nav-container d-flex align-items-center justify-content-end">
            <div className="app-menu d-flex dropdown-user ms-3">
              <div className="d-flex header-menu-item">
                <p id="dropdownMenuButton1" className="menu-text"></p>&nbsp;
                <p className="link-text far fa-user"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

