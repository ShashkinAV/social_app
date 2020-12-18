import React from "react";
import Footer from "./components/Footer/Footer";
import MessagesContainer from "./Pages/Messages/MessagesContainer";
import HomePageContainer from "./Pages/HomePage/HomePageContainer";
import ProfileContainer from "./Pages/Profile/ProfileContainer";
import { Route } from "react-router-dom";
import UsersPageContainer from "./Pages/UsersPage/UsersPageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
	return (
		<>
			<HeaderContainer />
			<main>
				<div className="main-wrapper">
					<Route path='/' exact render={() => <HomePageContainer />}/>
					<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
					<Route path='/messages' render={() => <MessagesContainer />} />
					<Route path='/users' render={() => <UsersPageContainer />} />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App; 