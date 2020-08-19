import React from "react";
import Header from "./components/Header/Header";
import Messages from "./Pages/Messages/Messages";
import HomePage from "./Pages/HomePage/HomePage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <div className="main-wrapper">
          <Route path='/home' component={HomePage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/messages' component={Messages} />
          <Route exact path='/' component={HomePage} />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App; 