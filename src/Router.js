import React from 'react';
import SignUp from './signUp';
import Home from './Home'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';

// const customHistory = createBrowserHistory();

const Routes = () =>(
    <Router >
        <Switch>
            <Route path ='/' exact component={SignUp} />
            <Route path ='/about' component={Home} />
            {/* <Route path ='/contact' component={Contact} />             */}
        </Switch>
    </Router>
) 

export default Routes;