import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import Menu from "./shared/menu/Menu";
import UsersDetailPage from "./pages/UsersDetailPage/UsersDetailPage";

function App() {
  return (
    <Router>

      <div className="App">
        <div className="App-header">

        <Menu></Menu>

          <Switch>

          <Route path="/users/:idUser">
              <UsersDetailPage />
            </Route>

          <Route path="/users">
              <UsersPage />
            </Route>

          <Route path="/about">
              <AboutPage />
            </Route>

            <Route path="/">
              <HomePage />
            </Route>

          </Switch>

        </div>
      </div>

    </Router>

  );
}

export default App;
