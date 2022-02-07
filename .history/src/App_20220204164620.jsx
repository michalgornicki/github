import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, HashRouter as Router, Routes, Link } from "react-router-dom";
import Arrays from "./components/arrays.jsx"
import Variables from "./components/variables.jsx"
import Numbers from "./components/numbers.jsx"
import Loops from "./components/loops.jsx"
import Async from "./components/async.jsx"
import DOM from "./components/DOM manipulation.jsx"
import Window from "./components/window.jsx"

function App() {
  

  return (


    <Router>
    <div className="text-center">
      <div className="display-1 mt-1 mb-5 text-white">React repeat course</div>

      <div className="h4 d-flex w-75 m-auto my-5 justify-content-evenly flex-wrap text-white">

      <Link className="link-style m-3" to="/">DOM</Link>
      <Link className="link-style m-3" to="/Components">Components</Link>
      <Link className="link-style m-3" to="/State">State (Context)</Link>
      <Link className="link-style m-3" to="/Props">Props</Link>
      <Link className="link-style m-3" to="/Lifecycle">Lifecycle methods</Link>
      <Link className="link-style m-3" to="/Conditional">Conditional rendering</Link>
      <Link className="link-style m-3" to="/Refs">Refs</Link>
      <Link className="link-style m-3" to="/Fragments">Fragments</Link>
      <Link className="link-style m-3" to="/HOC">Higher Order Components</Link>

      </div>
     
      <Routes>
          <Route path="/" element={<Arrays />} />
          <Route path="/Components" element={<Numbers />} />
          <Route path="/State" element={<Variables />} />
          <Route path="/Props" element={<Loops />} />
          <Route path="/Lifecycle" element={<Async />} />
          <Route path="/Conditional" element={<DOM />} />
          <Route path="/Refs" element={<Refs />} />
          <Route path="/Fragments" element={<Fragments />} />
          <Route path="/HOC" element={<HOC />} />
        </Routes>


    </div>
    </Router>
  );
}

export default App;
