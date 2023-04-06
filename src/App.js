import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import JobListing from "./Pages/JobListing";
import JobPage from "./Pages/JobPage";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/listing">
            <JobListing />
          </Route>
          <Route path="/listing/:id">
            {/* /listing/:id */}
            <JobPage />
          </Route>
          <Route path="/404">
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
