import React from "react";
import "./App.css";
// ** bootstrap cdn
import "bootstrap/dist/css/bootstrap.min.css";
// ** prime react
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

import Config from "./config/Config";
function App() {
  return (
    <div className="App">
      <Config />
    </div>
  );
}

export default App;
