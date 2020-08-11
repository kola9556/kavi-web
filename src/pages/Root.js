import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from 'pages/Contact';
import Shop from 'pages/Shop';
import Consultation from 'pages/Consultation';
import Collaboration from 'pages/Collaboration';
import OnePager from 'pages/OnePager/OnePager';
import LifeQm from 'pages/LifeQm';
import AboutMe from 'pages/AboutMe';
import Blog from 'pages/Blog';
import MainTemplate from '../templates/MainTemplate';

const Root = () => (
  <>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={OnePager} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/lifeqm" component={LifeQm} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/consultation" component={Consultation} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/collabo" component={Collaboration} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </>
);

export default Root;
