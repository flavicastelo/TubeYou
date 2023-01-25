import React from "react";
import { Navigate } from "react-router-dom";
import { isLogged } from "./auth";

const PrivateRoute = ({ children, redirectTo}) => {
    console.log(isLogged);
    return isLogged ? children : <Navigate to={redirectTo} />
}


export default PrivateRoute;

