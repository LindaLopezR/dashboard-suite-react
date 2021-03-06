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
import NotFound from '../pages/notFound/NotFound';
import Statistics from '../pages/statistics/Statistics';

export default function MainLayout() {
    
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/statistics" component={Statistics} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}
