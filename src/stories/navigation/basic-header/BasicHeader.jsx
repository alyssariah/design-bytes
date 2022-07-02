import React from 'react';
import PropTypes from 'prop-types';

import { HamburgerMenu } from '../hamburger-menu/HamburgerMenu';
import './basic-header.scss';

export const BasicHeader = ({
  logo,
  alt,
  title,
  links,
  animationType,
  backgroundColor,
  color,
  ...props
}) => (
  <header className="sb-basic-header" style={{ backgroundColor, color }} {...props}>
    <div className="sb-basic-header__wrapper">
      <div className="sb-basic-header__title">
        <img src={logo} alt={alt} className="header-logo" />
        {title && <h2>{title}</h2>}
      </div>
      <div className="sb-basic-header__nav">
        {links.map(function (link, i) {
          return (
            <a href={link.link} key={i}>
              {link.label}
            </a>
          );
        })}
      </div>
      {/* <div className="sb-basic-header__avatar">
      <ImageAvatar></ImageAvatar>
    </div> */}
      <div className="sb-mobile-ham">
        <HamburgerMenu animationType={animationType} />
      </div>
    </div>
  </header>
);

BasicHeader.propTypes = {
  /**
   * Logo url image for header
   */
  logo: PropTypes.string,
  /**
   * Alt text for logo image
   */
  alt: PropTypes.string,
  /**
   * Optional title for header
   */
  title: PropTypes.string,
  /**
   * Links on navigation bar
   */
  links: PropTypes.arrayOf(PropTypes.object),
  /**
   * Animation type for hamburger menu
   */
  animationType: PropTypes.string,
  /**
   * Background color of header
   */
  backgroundColor: PropTypes.string,
  /**
   * Color in header
   */
  color: PropTypes.string,
};

BasicHeader.defaultProps = {
  logo: 'https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png',
  alt: 'Acme',
  title: 'Acme',
  links: [
    {
      label: 'Explore',
      link: 'explore',
    },
    {
      label: 'Stats',
      link: 'stats',
    },
    {
      label: 'Resources',
      link: 'resources',
    },
    {
      label: 'Create',
      link: 'create',
    },
  ],
  animationType: 'topX',
};
