import React from "react";
import RecommendationsForm from "../RecommendationsForm";
import Recommendations from "../Recommendations";
import CreatePlaylist from "../CreatePlaylist";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";

const App = () => (
  <Router>
    <Switch>
      <Route path="/tracks">
        <ErrorBoundary>
          <Recommendations />
        </ErrorBoundary>
      </Route>

      <Route path="/create_playlist">
        <ErrorBoundary>
          <CreatePlaylist/>
        </ErrorBoundary>
      </Route>

      <Route path="/">
        <ErrorBoundary>
          <RecommendationsForm />
        </ErrorBoundary>
      </Route>
    </Switch>
  </Router>
);

export default App;
