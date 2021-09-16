import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <News
                key="general"
                pageSize={12}
                country="us"
                category="general"
              />
            </Route>
            <Route path="/business" exact>
              <News
                key="business"
                pageSize={12}
                country="us"
                category="business"
              />
            </Route>
            <Route path="/entertainment" exact>
              <News
                key="entertainment"
                pageSize={12}
                country="us"
                category="entertainment"
              />
            </Route>
            <Route path="/health" exact>
              <News key="health" pageSize={12} country="us" category="health" />
            </Route>
            <Route path="/science" exact>
              <News
                key="science"
                pageSize={12}
                country="us"
                category="science"
              />
            </Route>
            <Route path="/sports" exact>
              <News key="sports" pageSize={12} country="us" category="sports" />
            </Route>
            <Route path="/technology" exact>
              <News
                key="technology"
                pageSize={12}
                country="us"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
