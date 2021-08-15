import React from 'react';
import RecommendationsForm from '../RecommendationsForm';

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
          <RecommendationsForm/>
        </ErrorBoundary>
      </Route>
    </Switch>
  </Router>
);

export default App;

