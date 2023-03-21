import "./App.css";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Collaboration from "./Components/Collaboration";
import Quotes from "./Components/Quotes";
import Trending from "./Components/Trending";
import Center from "./Components/Center";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Trending />
      <Center />
      <Quotes />
      <Collaboration />
      <Footer />
    </div>
  );
}

export default App;
