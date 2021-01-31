import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import {getUserProfileThunk} from "../../redux/profileReducer";
import {AuthRedirectHoc} from "../../Hoc/AuthRedirectHoc";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }

		this.props.getUserProfileThunk(userId);
    }

    render() {
        return (
            <Profile  {...this.props} profile={this.props.profile}/>
        )
    }
}
let mapStateToProps =(state)=> ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
    isAuth: state.auth.isLogin
})
export default compose(
    connect(mapStateToProps, {getUserProfileThunk}),
    withRouter,
    //AuthRedirectHoc,
)(ProfileContainer)