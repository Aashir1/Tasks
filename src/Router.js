import React from 'react';
import SignUp from './signUp';
import Home from './Home';
import Login from './login';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Navbar from './Navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import createBrowserHistory from 'history/createBrowserHistory';

// const customHistory = createBrowserHistory();
const Routes = () =>(
    <Router >
        <Switch>
        <MuiThemeProvider>
            <Navbar/>
            <Route path ='/' exact component={SignUp} />
            <Route path ='/home' component={Home} />
            <Route path ='/login' component={Login} />            
            {/* <Route path ='/contact' component={Contact} />             */}
        </MuiThemeProvider>
            
        </Switch>
    </Router>
) 

export default Routes;