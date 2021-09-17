import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    return this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color="#f11946"
            height={4}
            progress={this.state.progress}
          />

          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={12}
                country="us"
                category="general"
              />
            </Route>
            <Route path="/business" exact>
              <News
                setProgress={this.setProgress}
                key="business"
                pageSize={12}
                country="us"
                category="business"
              />
            </Route>
            <Route path="/entertainment" exact>
              <News
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={12}
                country="us"
                category="entertainment"
              />
            </Route>
            <Route path="/health" exact>
              <News
                setProgress={this.setProgress}
                key="health"
                pageSize={12}
                country="us"
                category="health"
              />
            </Route>
            <Route path="/science" exact>
              <News
                setProgress={this.setProgress}
                key="science"
                pageSize={12}
                country="us"
                category="science"
              />
            </Route>
            <Route path="/sports" exact>
              <News
                setProgress={this.setProgress}
                key="sports"
                pageSize={12}
                country="us"
                category="sports"
              />
            </Route>
            <Route path="/technology" exact>
              <News
                setProgress={this.setProgress}
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
