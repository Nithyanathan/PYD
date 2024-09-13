import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import DesignStudio from './pages/DesignStudio';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/design-studio" component={DesignStudio} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;