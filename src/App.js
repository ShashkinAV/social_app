import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App; 