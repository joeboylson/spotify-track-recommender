import React from "react";
import RecommendationsForm from "../RecommendationsForm";
import Recommendations from "../Recommendations";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";
import Footer from "../../molecules/Footer";
import About from "../About";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../utils/theme";

const App = () => (
  <ThemeProvider theme={theme}>
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
  </ThemeProvider>
);

export default App;
