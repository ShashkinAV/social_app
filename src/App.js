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
          <Route path='/home' render={ ()=> <HomePage posts={props.posts}/> } />
          <Route path='/profile' render={()=> <ProfilePage posts={props.posts}/>} />
          <Route path='/messages' render={()=> <Messages msgDb={props.msgDb}/> } />
          <Route exact path='/' component={HomePage} />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App; 