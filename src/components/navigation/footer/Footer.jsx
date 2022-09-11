import React from 'react';
import PropTypes from 'prop-types';
import { BsInstagram } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

export const Footer = ({ logoUrl, companyDescription, socialLinks, footerLinks }) => {
  return (
    <footer className="flex justify-center w-[100%] bg-on-background text-background">
      <div className="max-w-[1440px] w-[100%] px-8 py-12 pb-8 lg:p-20 lg:pb-8">
        <div className="flex justify-between flex-col lg:flex-row text-surface--variant space-y-10 lg:space-x-20 lg:space-y-0">
          <div className="flex-grow">
            <img src={logoUrl.url} alt={logoUrl.alt} width="150px" height="40px" />
            <p className="text-surface--variant max-w-[360px] text-body-sm pt-6">
              {companyDescription}
            </p>
          </div>
          <div className="flex justify-between flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-20">
            {footerLinks.map((link, i) => {
              return (
                <div className="lg:pl-4 w-[140px]" key={i}>
                  <h4 className="text-body-lg font-bold mb-4">{link.label}</h4>
                  <ul className="text-body-sm space-y-4">
                    {link.children.map((child, j) => {
                      return (
                        <li key={j}>
                          <a href={child.url}>{child.label}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-start lg:justify-end">
          <div className="flex space-x-8 pt-8 lg:pt-20">
            {socialLinks.map((link, i) => {
              return (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  key={i}
                  className="hover:cursor-pointer transition-all hover:scale-150 ease-in"
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon}
                </a>
              );
            })}
          </div>
        </div>
        <hr className="text-outline my-8" />
        <div className="text-background">
          <p className="text-body-sm">&copy; 2022 All Rights Reserved</p>
          <ul className="flex mt-4 space-y-4 lg:space-x-10 lg:space-y-0 flex-col lg:flex-row">
            <li className="text-body-sm">
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li className="text-body-sm">
              <a href="/terms">Terms of Use</a>
            </li>
            <li className="text-body-sm">
              <a href="/refunds">Sales and Refunds</a>
            </li>
            <li className="text-body-sm">
              <a href="/legal">Legal</a>
            </li>
            <li className="text-body-sm">
              <a href="/site-map">Site Map</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  /**
   * logoUrl
   */
  logoUrl: PropTypes.object,
  /**
   * CompanyDescription
   */
  companyDescription: PropTypes.string,
  /**
   * Social Media Icons
   */
  socialLinks: PropTypes.arrayOf(PropTypes.object),
  /**
   * Main Footer Links
   */
  footerLinks: PropTypes.arrayOf(PropTypes.object),
};

Footer.defaultProps = {
  logoUrl: {
    url: 'https://arkh.com/static-assets/images/logo-white.svg',
    alt: 'ARKH Logo',
  },
  companyDescription:
    'ARKH is a Spatial Computing company building the AR Layer of the Metaverse. Our goal is to introduce innovative software &amp; hardware that augment the way we interact with each other, technology, &amp; the metaverse.',
  socialLinks: [
    {
      url: 'https://www.instagram.com/arkhsocial/?hl=en',
      label: 'ARKH Instagram',
      icon: <BsInstagram className="text-background" />,
    },
    {
      url: 'https://discord.com/invite/arkh',
      label: 'ARKH Discord',
      icon: <FaDiscord className="text-background" />,
    },
    {
      url: 'https://twitter.com/arkh?lang=en',
      label: 'ARKH Twiiter',
      icon: <BsTwitter className="text-background" />,
    },
    {
      url: 'https://www.youtube.com/channel/UCc8XDwqgnzWF0Y1BrtkgUWw',
      label: 'ARKH Youtube',
      icon: <BsYoutube className="text-background" />,
    },
    {
      url: 'https://www.tiktok.com/@arkhplatform?lang=en',
      label: 'ARKH Tiktok',
      icon: <FaTiktok className="text-background" />,
    },
  ],
  footerLinks: [
    {
      label: 'Developer',
      children: [
        {
          label: 'Developer Program',
          url: '/developer-program',
        },
        {
          label: 'SDK',
          url: '/sdk',
        },
        {
          label: 'Application',
          url: '/application',
        },
      ],
    },
    {
      label: 'Support',
      children: [
        {
          label: 'Docs',
          url: '/support',
        },
        {
          label: 'News & Insights',
          url: '/support/news',
        },
        {
          label: 'FAQ',
          url: '/support/faq',
        },
        {
          label: 'Quick Start Guide',
          url: 'developer/guide',
        },
      ],
    },
    {
      label: 'Company',
      children: [
        {
          label: 'About Us',
          url: '/about',
        },
        {
          label: 'Careers',
          url: '/careers',
        },
        {
          label: 'Teams',
          url: '/teams',
        },
        {
          label: 'Contact Us',
          url: '/contact',
        },
      ],
    },
  ],
};
