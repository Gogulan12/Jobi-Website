import "./App.css";
// import Navigation from "./Components/Navigation";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import Collaboration from "./Components/Collaboration";
// import Quotes from "./Components/Quotes";
// import Trending from "./Components/Trending";
// import Center from "./Components/Center";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import JobListing from "./Pages/JobListing";
import JobPage from "./Pages/JobPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navigation />
      <Header />
      <Trending />
      <Center />
      <Quotes />
      <Collaboration />
      <Footer /> */}

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/listing">
            <JobListing />
          </Route>
          <Route path="/job">
            <JobPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
