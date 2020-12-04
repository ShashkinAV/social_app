import HomePage from "./HomePage";
import { connect } from "react-redux";

let mapStateToProps = (state)=> {
	return {
		posts: state.homePage.posts,
	}
}

const HomePageContainer = connect(mapStateToProps)(HomePage);


export default HomePageContainer;
