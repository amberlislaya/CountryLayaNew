import { Route, BrowserRouter, Switch, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.jsx"
import Home from "./Views/Home/Home.jsx"
import Landing from "./Views/Landing/Landing.jsx"
import Contact from "./Views/Form/Contact.jsx"
import Details from "./Views/Details/Details.jsx"
import Discover from "./Views/Create/Discover.jsx"
// import Search from "./Views/Search/Search.jsx"
import "./App.css";

function App() {
  
   const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" render={() => <Landing />} />
      <Route path="/home" render={() => <Home />} />
      <Route exact path="/details/:id" render={() => <Details />} />
      <Route exact path="/discover" render={() => <Discover />} />
      <Route exact path="/contact" render={() => <Contact />} />
    </div>
  );
}

export default App;
