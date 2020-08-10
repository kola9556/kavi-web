import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from 'views/Contact';
import Shop from 'views/Shop';
import Consultation from 'views/Consultation';
import Collaboration from 'views/Collaboration';
import OnePager from 'views/OnePager';
import LifeQm from 'views/LifeQm';
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
