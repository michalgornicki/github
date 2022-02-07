import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, HashRouter as Router, Routes, Link } from "react-router-dom";
import DOM from "./components/dom.jsx";
import Components from "./components/components.jsx";
import State from "./components/state.jsx";
import Props from "./components/props.jsx";
import Lifecycle from "./components/lifecycle.jsx";
import Conditional from "./components/conditional.jsx";
import Refs from "./components/refs.jsx";
import Fragments from "./components/fragments.jsx";
import HOC from "./components/hoc.jsx";
import Hooks from "./components/hooks.jsx";

const App = () => {
  return (
    <Router>
      <div className="text-center">
        <div className="display-1 mt-1 mb-5 text-white">React repeat course</div>

        <div className="h4 d-flex w-75 m-auto my-5 justify-content-evenly flex-wrap text-white">
          <Link className="link-style m-3" to="/Components">
            Components
          </Link>
          <Link className="link-style m-3" to="/State">
            State (Context)
          </Link>
          <Link className="link-style m-3" to="/Lifecycle">
            Lifecycle methods
          </Link>
          <Link className="link-style m-3" to="/Refs">
            Refs
          </Link>
          <Link className="link-style m-3" to="/Fragments">
            Fragments
          </Link>
          <Link className="link-style m-3" to="/HOC">
            Higher Order Components
          </Link>
          <Link className="link-style m-3" to="/Hooks">
            Hooks
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<Components />} />
          <Route path="/State" element={<State />} />
          <Route path="/Props" element={<Props />} />
          <Route path="/Lifecycle" element={<Lifecycle />} />
          <Route path="/Refs" element={<Refs />} />
          <Route path="/Fragments" element={<Fragments />} />
          <Route path="/HOC" element={<HOC />} />
          <Route path="/Hooks" element={<Hooks />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
