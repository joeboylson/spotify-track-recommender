import React from "react";
import RecommendationsForm from "../RecommendationsForm";
import Recommendations from "../Recommendations";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";
import Footer from "../../molecules/Footer";
import About from "../About";

const App = () => (
  <Router>
    <Switch>
      <Route path="/tracks">
        <ErrorBoundary>
          <Recommendations />
        </ErrorBoundary>
      </Route>

      <Route path="/about">
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
      </Route>

      <Route path="/">
        <ErrorBoundary>
          <RecommendationsForm />
        </ErrorBoundary>
      </Route>
    </Switch>
    <Footer />
  </Router>
);

export default App;
