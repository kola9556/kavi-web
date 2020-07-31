import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OnePager from 'views/OnePager';
import AboutMe from 'views/AboutMe';
import Blog from 'views/Blog';
import MainTemplate from '../templates/MainTemplate';

const Root = () => (
  <>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={OnePager} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </>
);

export default Root;
