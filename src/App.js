import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MessagesContainer from "./Pages/Messages/MessagesContainer";
import HomePageContainer from "./Pages/HomePage/HomePageContainer";
import ProfilePageContainer from "./Pages/Profile/ProfilePageContainer";
import { Route } from "react-router-dom";

function App(props) {
	return (
		<>
			<Header />
			<main>
				<div className="main-wrapper">
					<Route path='/' exact render={() => <HomePageContainer />}/>
					<Route path='/profile' render={() => <ProfilePageContainer />} />
					<Route path='/messages' render={() => <MessagesContainer />} />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App; 