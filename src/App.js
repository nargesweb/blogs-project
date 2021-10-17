import React from 'react';
import { Route ,Switch} from 'react-router-dom';

import Home from './Components/Home';
import Login from './Components/Login';
import Products from './Components/Products';

import Navbar from './Components/navcomponents/Navbar';
import Footer from './Components/footercomponent/Footer';

const App = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path='/products' component={Products} />
                <Route path='/login' component={Login} />
                <Route path='/' component={Home} />
            </Switch>
            <Footer/>
        </div>
    );
};

export default App;