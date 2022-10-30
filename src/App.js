import React from "react";
import Topbar from "./Components/Topbar/Topbar";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">{currentUser ? <Settings /> : <Login />}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
