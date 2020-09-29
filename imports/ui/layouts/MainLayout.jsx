import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom'
  
//   Components
import Header from '../components/Header';

//   Pages
import Dashboard from '../pages/dashboard/Dashboard';

export default function MainLayout() {
    
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
            </div>
        </Router>
    );
}
