import React from 'react';
import PropTypes from 'prop-types';
import './basic-dropdown.scss';

export const BasicDropdown = ({ label, link, dropdown, ...props }) => (
  <span className="sb-dropdown-link" {...props}>
    <a href={link} className="sb-link">
      {label}
    </a>
    <ul className="sb-dropdown">
      {dropdown.map((item, i) => {
        return (
          <li key={i}>
            <a href={item.link}>{item.label}</a>
          </li>
        );
      })}
    </ul>
  </span>
);

BasicDropdown.propTypes = {
  /**
   * Label of link
   */
  label: PropTypes.string,
  /**
   * Link for parent label
   */
  link: PropTypes.string,
  /**
   * Dropdown of links
   */
  dropdown: PropTypes.arrayOf(PropTypes.object),
};

BasicDropdown.defaultProps = {
  label: 'Work',
  link: 'work',
  dropdown: [
    {
      label: 'Web Development',
      link: 'web-development',
    },
    {
      label: 'Web Design',
      link: 'web-design',
    },
    {
      label: 'Illustration',
      link: 'illustration',
    },
    {
      label: 'Iconography',
      link: 'iconography',
    },
  ],
};
