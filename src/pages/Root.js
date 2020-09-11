import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutMe from 'pages/AboutMe/AboutMe';
import Blog from 'pages/Blog/Blog';
import Collaboration from 'pages/Collaboration';
import Consultation from 'pages/Consultation';
import Contact from 'pages/Contact/Contact';
import LifeQm from 'pages/LifeQm';
import OnePager from 'pages/OnePager/OnePager';
import Post from 'pages/Post';
import Shop from 'pages/Shop/Shop';
import { paths } from 'utils/paths';

import MainTemplate from '../templates/MainTemplate';

const Root = () => (
  <>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={paths.main} component={OnePager} />
          <Route exact path={paths.aboutme} component={AboutMe} />
          <Route exact path={paths.lifeqm} component={LifeQm} />
          <Route exact path={paths.blog} component={Blog} />
          <Route path={paths.post} component={Post} />
          <Route exact path={paths.consultation} component={Consultation} />
          <Route exact path={paths.shop} component={Shop} />
          <Route exact path={paths.contact} component={Contact} />
          <Route exact path={paths.collabo} component={Collaboration} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </>
);

export default Root;
