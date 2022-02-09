import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, HashRouter as Router, Routes, Link } from "react-router-dom";
import Components from "./components/components.jsx";
import State from "./components/state.jsx";
import Lifecycle from "./components/lifecycle.jsx";
import HOC from "./components/hoc.jsx";
import Hooks from "./components/hooks.jsx";

const App = () => {
  return (
    <>
    <Router>
      <div className="text-center">
        <div className="display-1 mt-1 mb-5 text-white">React repeat course</div>
        <div className="h4 d-flex w-75 m-auto my-5 justify-content-evenly flex-wrap text-white">
          <Link className="link-style m-3" to="/Components">
            Components
          </Link>
          <Link className="link-style m-3" to="/State">
            State (w Redux)
          </Link>
          <Link className="link-style m-3" to="/Lifecycle">
            Lifecycle methods
          </Link>
          <Link className="link-style m-3" to="/HOC">
            Higher Order Components
          </Link>
          <Link className="link-style m-3" to="/Hooks">
            Hooks
          </Link>
        </div>

        <Routes>
          <Route path="/Components" element={<Components />} />
          <Route path="/State" element={<State />} />
          <Route path="/Lifecycle" element={<Lifecycle />} />
          <Route path="/HOC" element={<HOC />} />
          <Route path="/Hooks" element={<Hooks />} />
        </Routes>
      </div>
    </Router>
 
    </>
  );
};

export default App;
