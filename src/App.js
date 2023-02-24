import React, { useState } from "react";
import Auth from "./components/Authentic/Auth";
import Home from "./Pages/Home";

import { BrowserRouter} from "react-router-dom";



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
      <Home />
    </div>
  );
}

export default App;
