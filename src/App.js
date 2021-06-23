import "./styles/reset.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import { useState, useContext } from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home/Home";

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
          {/*<Route path="/hoje" exact>
                <Today />
            </Route>
            <Route path="/historico" exact>
                <History />
            </Route> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
