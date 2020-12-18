import React from "react";
import {NavLink} from "react-router-dom";

const AuthBtn = (props)=> {
    return <>
        <NavLink className="login__link" to="/signIn">
            Sign In
        </NavLink>
        <NavLink className="login__link" to="/login">
            Login
        </NavLink>
    </>
}
export default AuthBtn;