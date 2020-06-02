import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
// import './App.css';
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Wrapper from "./components/Wrapper";

class App extends Component {
  render(){
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Wrapper>
      </div>
    </Router>
  );
  }
}

export default App;
