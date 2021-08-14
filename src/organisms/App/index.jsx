import React from 'react';
import Recommendations from '../Recommendations';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ErrorBoundary from '../ErrorBoundary';


const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <ErrorBoundary>
          <Recommendations/>
        </ErrorBoundary>
      </Route>
    </Switch>
  </Router>
);

export default App;

