import React from "react";
import Header from "./components/Header/Header";
import LeftBar from "./components/LeftBar/LeftBar";
import Post from "./components/Post/Post";


function App(props) {
  return (
    <>
      <Header />
      <main>
        <div className="main-wrapper">
          <div className="container">
            <div className="row">
              <LeftBar />
              <Post />
            </div>
          </div>
        </div>

      </main>
    </>
  );
}

export default App; 