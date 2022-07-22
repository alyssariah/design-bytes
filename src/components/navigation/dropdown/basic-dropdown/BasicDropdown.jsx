import React from 'react';
import PropTypes from 'prop-types';
import './basic-dropdown.scss';
import { MenuItem } from '../menu-item/MenuItem';
import { MdPersonOutline } from 'react-icons/md';

export const BasicDropdown = ({ items, boxShadow, ...props }) => (
  <ul className={`sb-basic-dropdown box-shadow--${boxShadow}`} {...props}>
    {items.map((item, i) => {
      return (
        <li key={i}>
          <MenuItem
            icon={item.icon ? item.icon : null}
            label={item.label}
            link={item.link}
            state={item.state}
          ></MenuItem>
        </li>
      );
    })}
  </ul>
);

BasicDropdown.propTypes = {
  /**
   * Box Shadow of dropdown
   */
  boxShadow: PropTypes.number,
  /**
   * Dropdown of links
   */
  items: PropTypes.arrayOf(PropTypes.object),
};

BasicDropdown.defaultProps = {
  boxShadow: 15,
  items: [
    {
      icon: <MdPersonOutline />,
      label: 'Web Development',
      link: 'web-development',
    },
    {
      icon: <MdPersonOutline />,
      label: 'Web Design',
      link: 'web-design',
    },
    {
      icon: <MdPersonOutline />,
      label: 'Illustration',
      link: 'illustration',
    },
    {
      icon: <MdPersonOutline />,
      label: 'Iconography',
      link: 'iconography',
    },
  ],
};
