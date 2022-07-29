import React from 'react';
import PropTypes from 'prop-types';
import './home.scss';
import { BasicButton } from '../../components/data-display/button/basic-button/BasicButton';

/**
 * Reusable avatar component for images
 */
export const Home = ({ switchTheme }) => {
  return (
    <header className="App-header">
      <h1 className="h1 text-primary">Hello Vite + React!</h1>
      <br />
      <BasicButton onClick={switchTheme} label="Toggle Theme" boxShadow={5}></BasicButton>
    </header>
  );
};

Home.propTypes = {
  /**
   * Switch theme click handler
   */
  switchTheme: PropTypes.func,
};

Home.defaultProps = {};
