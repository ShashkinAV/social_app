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
							homePage={props.state.homePage}
							dispatch={props.dispatch}
						/>}
					/>
					<Route path='/profile' render={() => <ProfilePage 
							posts={props.state.homePage.posts} 
							
							/>} />
					<Route path='/messages' render={() => <Messages
						messagePage={props.state.messagePage}
						dispatch={props.dispatch}
					/>} />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App; 