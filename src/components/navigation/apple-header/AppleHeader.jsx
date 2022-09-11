import React from 'react';
import { HamburgerMenu } from '../hamburger-menu/HamburgerMenu';
import styles from './apple-header.module.scss';
import { RiShoppingCartLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

export const AppleHeader = ({ logoUrl, animationType, links, stickyHeader }) => {
  return (
    <header
      className={
        styles.header +
        ' flex justify-center w[100%] lg:px-2 header ' +
        (stickyHeader ? 'sticky top-[0px]' : '')
      }
    >
      <div className="flex justify-between items-center w-[100%] max-w-[1440px] pr-4 lg:px-4 ">
        <div className="block lg:hidden w-[60px]">
          <HamburgerMenu animationType={animationType} stroke="#FFFFFF" />
        </div>
        <div className="lg:w-[100px] flex justify-start items-center hover:cursor-pointer">
          <a href="/">
            <img src={logoUrl} alt="ARKH logo" width="100px" height="23px" />
          </a>
        </div>
        <ul className="hidden lg:flex justify-around">
          {links.map((link, i) => {
            return (
              <li key={i} className="text-label-md mx-4 hover:text-[#ffffff] text-surface--variant">
                <a href={link.url}>{link.label}</a>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-end w-[60px] lg:w-[100px]">
          <RiShoppingCartLine className="text-[28px] lg:text-[21px] text-background hover:cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

AppleHeader.propTypes = {
  /**
   * Sticky header
   */
  stickyHeader: PropTypes.bool,
  /**
   * Logo URL string
   */
  logoUrl: PropTypes.string,
  /**
   * animationType
   */
  animationType: PropTypes.oneOf([
    'topX',
    'middleArrow',
    'close',
    'snakeX',
    'rotateArrow',
    'sweetX',
    'bottomX',
    'rotateX',
  ]),
  /**
   * Navigation bar links
   */
  links: PropTypes.arrayOf(PropTypes.object),
};

AppleHeader.defaultProps = {
  stickyHeader: true,
  logoUrl: 'https://arkh.com/static-assets/images/logo-white.svg',
  animationType: 'sweetX',
  links: [
    {
      label: 'Controller',
      url: '/controller',
    },
    {
      label: 'Experiences',
      url: '/experiences',
    },
    {
      label: 'Developer',
      url: 'developer',
    },
    {
      label: 'Support',
      url: '/support',
    },
  ],
};
