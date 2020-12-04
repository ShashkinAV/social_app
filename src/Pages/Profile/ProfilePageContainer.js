import ProfilePage from "./ProfilePage";
import { connect } from "react-redux";

let mapStateToProps = (state)=> {
	return {
		posts: state.profilePage.posts
	}
}


const ProfilePageContainer = connect(mapStateToProps)(ProfilePage);

export default ProfilePageContainer;
