import React from 'react';
import { Route } from 'react-router-dom'


// components


// pages
import Landing from './pages/Landing';
import Pricing from './pages/Pricing';
import Payments from './pages/Payments';


// layouts
import MainLayout from './layouts/MainLayout';
import PaymentLayout from './layouts/PaymentLayout';
import PricingLayout from './layouts/PricingLayout';


// styles
import './default.scss';


function App() {

  return (
    <div className="App">
      <Route exact={true} path="/" render={() => (
        <MainLayout>
          <Landing />
        </MainLayout>
      )} />
      <Route exact={true} path="/Pricing" render={() => (
        <PricingLayout>
          <Pricing />
        </PricingLayout>
      )} />
      <Route exact={true} path="/Payments" render={() => (
        <PaymentLayout>
          <Payments />
        </PaymentLayout>
      )} />
    </div>
  );
}

export default App;
