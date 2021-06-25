import "./styles/reset.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home/Home";
import Entrance from "./Components/Entrance";
import Exit from "./Components/Exit";
import { useState } from "react";
function App() {
  const userStorage = localStorage.getItem("userSaved");
  const [user, setUser] = useState(JSON.parse(userStorage));

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login user={user} setUser={setUser} />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/home" exact>
            <Home user={user} />
          </Route>
          <Route path="/entrance" exact>
            <Entrance user={user} />
          </Route>
          <Route path="/exit" exact>
            <Exit user={user} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
