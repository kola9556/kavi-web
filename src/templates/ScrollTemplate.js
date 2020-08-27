import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

class ScrollTemplate extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}

ScrollTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ScrollTemplate;
