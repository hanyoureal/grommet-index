// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

import React, { Component, PropTypes } from 'react'

class IndexerLogo extends Component {

  render() {
    var className = 'logo-icon';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }
    return (
      <svg className={className} viewBox="0 0 120 120" version="1.1">
        <g stroke="#231F20" strokeWidth="5" fill="none" fillRule="evenodd" transform="translate(-31.000000, -2.000000)">
          <g transform="translate(91.000000, 34.000000) rotate(45.000000) translate(-91.000000, -34.000000) translate(67.000000, 10.000000)">
              <path d="M37.9151515,18.9575758 C37.9151515,29.4275103 29.4275103,37.9151515 18.9575758,37.9151515 C8.48764121,37.9151515 0,29.4275103 0,18.9575758 C0,8.48764121 8.48764121,0 18.9575758,0 C29.4275103,0 37.9151515,8.48764121 37.9151515,18.9575758 L37.9151515,18.9575758 Z M32.3878788,32.3878788 L48,48 L32.3878788,32.3878788 Z" id="Shape"></path>
          </g>
          <path d="M99,34 C99,78.4890633 127.91172,102 167,102" transform="translate(133.000000, 68.000000) rotate(45.000000) translate(-133.000000, -68.000000) "></path>
          <path d="M15,33 C15,77.4890633 43.9117203,101 83,101" transform="translate(49.000000, 67.000000) scale(-1, -1) rotate(45.000000) translate(-49.000000, -67.000000) "></path>
          <g transform="translate(71.000000, 78.000000)">
            <path d="M12.5,2.5 L28.5,2.5"></path>
            <path d="M6.5,17.5 L34.5,17.5"></path>
            <path d="M0,32.5 L40,32.5"></path>
          </g>
        </g>
      </svg>
    );
  }

}

module.exports = IndexerLogo