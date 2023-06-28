import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Switch } from 'react-router-dom';
import Home from "../src/components/Home/Home";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import PageNotFound from "../src/components/PageNotFound/PageNotFound";
import MovieDetail from "../src/components/MovieDetail/MovieDetail";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
          <Route path="/" component={Home} />
          <Route path="/movie/:imdbID" component={MovieDetail} />
          <Route component={PageNotFound} />
   
        <Footer />
      </Router>
    </div>
  );
}

export default App;
