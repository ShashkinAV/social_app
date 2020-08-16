import React from "react";
import Header from "./components/Header/Header";
import LeftBar from "./components/LeftBar/LeftBar";
import HomePage from "./Pages/HomePage";



function App(props) {
  return (
    <>
      <Header />
      <main>
        <div className="main-wrapper">
          <div className="container">
            <div className="row">
			<div className="col-lg-3 order-2 order-lg-1">
				<LeftBar />
			</div>
              
			  <div className="col-lg-6 order-1 order-lg-2">
			  	<HomePage />
			  </div>
			  <div className="col-lg-3 order-3">
			  	RightBar
			  </div>
              
            </div>
          </div>
        </div>

      </main>
    </>
  );
}

export default App; 