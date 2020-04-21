import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post"


class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
