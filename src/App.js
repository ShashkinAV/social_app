import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Messages from "./Pages/Messages/Messages";
import HomePage from "./Pages/HomePage/HomePage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import { Route } from "react-router-dom";

function App(props) {
	return (
		<>
			<Header />
			<main>
				<div className="main-wrapper">
					<Route 
						path='/home' 
						render={() => <HomePage 
							posts={props.state.posts}
							dispatch={props.dispatch}
							newPostText={props.state.newPostText}						
							/>} 
					/>
					<Route path='/profile' render={() => <ProfilePage posts={props.state.posts} />} />
					<Route path='/messages' render={() => <Messages users={props.state.users} messagePage={props.state.messagePage} />} />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App; 