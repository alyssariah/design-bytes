import React from 'react';
import PropTypes from 'prop-types';
import './menu-item.scss';

export const MenuItem = ({ icon, label, state, link, ...props }) => (
  <a href={{ link }} className={`sb-dropdown-menu-item sb-dropdown-menu-item--${state}`} {...props}>
    {icon && icon}
    <span className="t2">{label}</span>
  </a>
);

MenuItem.propTypes = {
  /**
   * Icon on menu item
   */
  icon: PropTypes.element,
  /**
   * Label of menu item
   */
  label: PropTypes.string,
  /**
   * Link of menu item
   */
  link: PropTypes.string,
  /**
   * If menu item is active
   */
  state: PropTypes.oneOf(['selected', 'unselected']),
};

MenuItem.defaultProps = {
  icon: null,
  label: 'Item',
  link: '',
  state: 'unselected',
};
