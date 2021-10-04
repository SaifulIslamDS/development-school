// import logo from './logo.svg';
import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home"
import CoursesPage from "./Components/CoursesPage/CoursesPage"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import NotFound from "./Components/NotFound/NotFound";


function App() {
  return (
    <div className="App">
      <Router>
        {/* Header section  */}
        <Navbar />
        <div>
        {/* Routers */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/courses">
            <CoursesPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact" >
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {/* Footer section  */}
        <Footer />

      </div>
    </Router>
    </div>
  );
}

export default App;
