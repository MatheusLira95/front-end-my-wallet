import "./styles/reset.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import { useState, useContext } from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home/Home";
import Entrance from "./Components/Entrance";
import Exit from "./Components/Exit";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/entrance" exact>
            <Entrance />
          </Route>
          <Route path="/exit" exact>
            <Exit />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
