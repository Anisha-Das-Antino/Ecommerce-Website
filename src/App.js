import React, { useState } from "react";
import Auth from "./components/Authentic/Auth";
import Home from "./Pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  const [token, setToken] = useState(false);

  if (!token) {
    return (

      <div className="">
        <BrowserRouter>
          <Auth setToken={setToken} />
        </BrowserRouter>
      </div>
    )
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
