import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './pages/home/home';
import ProductPage from './pages/product/product';
import PricingPage from './pages/pricing/pricing';
import AboutPage from './pages/about/about';
import DemoPage from './pages/demo/demo';
import DetailsPage from './pages/customization/customization';
import SuccessPage from './pages/success/success'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route exact path="/products" component={ProductPage} /> */}
            {/* <Route exact path="/pricing" component={PricingPage} /> */}
            {/* <Route exact path="/demo" component={DemoPage} /> */}
            {/* <Route exact path="/about" component={AboutPage} /> */}
            <Route exact path="/customization" component={DetailsPage} />
            <Route exact path="/successpage" component={SuccessPage} />
            <Route render={() => <Redirect to={{pathname: "/"}} />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
