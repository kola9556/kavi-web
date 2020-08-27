import React, { Component } from 'react';
import Navigationbar from 'components/organisms/Navigationbar/Navigationbar';
import ScrollTemplate from 'templates/ScrollTemplate';

class Blog extends Component {
  state = {};

  render() {
    return (
      <>
        <ScrollTemplate>
          <Navigationbar />
          <h1>Współpraca</h1>
        </ScrollTemplate>
      </>
    );
  }
}

export default Blog;
