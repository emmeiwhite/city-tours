import React, { Component } from "react";
import Navbar from './components/Navbar/Navbar.js';
import TourList from './components/TourList/TourList';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <main className="main-app-wrapper">
        <Navbar />
        <TourList />
      </main>
    );
  }
}

export default App;
