import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserDate} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserDate();
    }

    render() {
        return <Header {...this.props}/>
    }
}
let mapStateToProps=(state)=> {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isLogin: state.auth.isLogin,
    }
}

export default connect(mapStateToProps, {getAuthUserDate})(HeaderContainer);