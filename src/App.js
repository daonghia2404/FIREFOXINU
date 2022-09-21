import React from 'react';
import { Redirect, Router } from '@reach/router';
import { ParallaxProvider } from 'react-scroll-parallax';

import { LayoutPaths, Pages, Paths, PublicRoute } from '@/pages/routers';
import Guest from '@/layouts/Guest';

import Header from '@/containers/Header';
import Navigation from '@/containers/Navigation';

import './App.scss';

const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div className="App">
        <ParallaxProvider>
          <Router primary={false}>
            <Guest path={LayoutPaths.Guest}>
              <PublicRoute path={Paths.Home} component={Pages.Home} />

              <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.Home}`} />
            </Guest>
          </Router>
        </ParallaxProvider>
      </div>
    </>
  );
};

export default App;
