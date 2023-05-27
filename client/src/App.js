import { Route, BrowserRouter, Switch } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar.jsx"
import Home from "./Views/Home/Home.jsx"
import Landing from "./Views/Landing/Landing.jsx"
import Create from "./Views/Form/Create.jsx"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={NavBar} />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/create" component={Create} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
