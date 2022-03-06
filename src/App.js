import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Scrolltotop from "./components/Scroll-to-top/index";
import { ScrollFromBottom } from "./components/Scroll-to-top/ScrollFromBottom";
import Error404 from "./container/Error404/index";
import Home from "./container/Home/index";
import Navbar from "./components/Navbar/Navbar";
import Cursor from "./components/CustomCursor/Cursor";

function App() {
  return (
    <div className="App">
      <Router>
        <Cursor />
        <Scrolltotop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
        <ScrollFromBottom />
      </Router>
    </div>
  );
}

export default App;
