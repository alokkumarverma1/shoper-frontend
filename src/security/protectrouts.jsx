import React from "react";
import JwtDecoder from "./jwtdecode";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowRoles }) {
    const roles = JwtDecoder();

    if (!roles.length) {
        return <Navigate to="/login" replace />;
    }

    const isAllowed = roles.some(role => allowRoles.includes(role));
    if (!isAllowed) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;
