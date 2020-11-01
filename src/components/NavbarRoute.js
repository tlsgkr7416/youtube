import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar';

function NavbarRoute({ btsStart, items, component: Component, ...rest}) {
    return (
        
      <Route
        {...rest}
        render={routeProps => (
            <>
            <Navbar btsStart={btsStart}/>
            <Component {...routeProps} items={items}/>
            </>
        )}
      />

    );
  }

export default NavbarRoute;