import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

// import styled from "styled-components";

import Home from "./components/Home";
// import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      {/* <Menu /> */}
      <Home />
    </div>
  );
}

export default App;
