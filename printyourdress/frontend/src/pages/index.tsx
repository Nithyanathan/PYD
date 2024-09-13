import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import DesignStudio from './DesignStudio';
import Checkout from './Checkout';

const IndexPage: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/design-studio" component={DesignStudio} />
                <Route path="/checkout" component={Checkout} />
            </Switch>
        </Router>
    );
};

export default IndexPage;