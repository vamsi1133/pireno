import React from 'react';
import './App.css';
import Home from "./Home";
import A from "./a";
import B from "./b"

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
function App() {
  return (
    <Router>
        <Route exact path = "/" component = {Home} />             
	      <Route path = "/a" component = {A} /> 
	      <Route path = "/b" component = {B} />
    </Router>
  );
}

export default App;   
