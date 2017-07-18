import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";

import Favorites from "./pages/Favorites";
import Todos from "./pages/Todos";
import Settings from "./pages/Settings";

import './App.css';


class App extends Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <Router>
        <div className="Main">
             <Nav location={location} />
           <div className="container" style={containerStyle}>
               <Route exact path="/" component={Todos}/>
               <Route path="/favorites" component={Favorites}/>
               <Route path="/settings" component={Settings}/>
             </div>
             <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
