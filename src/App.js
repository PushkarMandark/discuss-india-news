import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar color="#f11946" height={4} progress={progress} />

        <Switch>
          <Route exact path="/">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="general"
              pageSize={12}
              country="us"
              category="general"
            />
          </Route>
          <Route path="/business" exact>
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="business"
              pageSize={12}
              country="us"
              category="business"
            />
          </Route>
          <Route path="/entertainment" exact>
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="entertainment"
              pageSize={12}
              country="us"
              category="entertainment"
            />
          </Route>
          <Route path="/health" exact>
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="health"
              pageSize={12}
              country="us"
              category="health"
            />
          </Route>
          <Route path="/science" exact>
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="science"
              pageSize={12}
              country="us"
              category="science"
            />
          </Route>
          <Route path="/sports" exact>
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="sports"
              pageSize={12}
              country="us"
              category="sports"
            />
          </Route>
          <Route path="/technology" exact>
            <News
              apiKey={apiKey}
              setProgress={setProgress}
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
};

export default App;
