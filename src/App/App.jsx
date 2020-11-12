import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// styles
import './styles.scss';

// components
import Recommendations from '../Recommendations/Recommendations';

const App = () => {

  return (

    <Router>
      <main>

        <Switch>
          
          {/* NOTE: can add more routes here in the future */}
          <Route path="/">
            <Recommendations/>
          </Route>

        </Switch>

      </main>
    </Router>
  );

}

export default App;

