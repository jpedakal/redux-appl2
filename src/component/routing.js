import React from 'react';
import { BrowserRouer, Route } from 'react-router-dom';
import Home from '../container/Home';
import Header from './Header';
import Footer from './Footer';

const Routing = () => {
    return (
        <BrowserRouer>
            <Header />
            <Route path="/" component={Home}></Route>
            <Footer />
        </BrowserRouer>
    )
}

export default Routing;