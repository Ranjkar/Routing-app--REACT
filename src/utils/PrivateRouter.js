import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({loggedIn,location}) => {


    return loggedIn
        ? <Outlet />
        : (
            <Navigate
                to={'/login'}
                state={{ from: location}} // <-- pass in route state
                replace

            />
        );
};

export default PrivateRoutes;