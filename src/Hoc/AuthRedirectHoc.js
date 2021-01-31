import React from "react";
import { Redirect } from "react-router-dom"


export const AuthRedirectHoc = (WrappedComponent) => {
   class RedirectComponent extends React.Component {
       render() {
           if(!this.props.isAuth) return <Redirect to={'/login'}/>
           return <WrappedComponent {...this.props}/>
       }
   }
   return RedirectComponent;
};