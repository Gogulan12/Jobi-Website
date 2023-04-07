import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import JobListing from "./Pages/JobListing";
import JobPage from "./Pages/JobPage";
import ErrorPage from "./Pages/ErrorPage";
import AddJobPosting from "./Components/AddPosting/AddJobPosting";

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
          <Route path="/post">
            <AddJobPosting />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
