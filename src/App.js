import React from "react";
import Header from "./components/Header/Header";
import LeftBar from "./components/LeftBar/LeftBar";
import Messages from "./Pages/Messages";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import { BrowserRouter, Route } from "react-router-dom";





function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <div className="main-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 order-2 order-lg-1">
                <LeftBar />
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <Route path='/home' component={HomePage} />
                <Route path='/profile' component={ProfilePage} />
                <Route path='/messages' component={Messages} />
              </div>
              <div className="col-lg-3 order-3"></div>
            </div>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App; 