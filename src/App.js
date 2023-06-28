import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        <div className="container">
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/movie/:imdbID" Component={MovieDetail} />
            <Route Component={PageNotFound} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
