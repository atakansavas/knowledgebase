import React, { useEffect, useState } from "react";
import { useRouteMatch, BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from '../views/Home/Home';
import Company from "../views/Company/Company";

export default () => {
    // const cssClasses =
    // + "kt-grid--animateContent-finished "
    // + "kt-grid--animateContent "
    // "kt-container "
    // + "kt-grid__item kt-grid__item--fluid"

    return (
        <div >
            <Route path="/home" component={Home} />
            <Route path="/company" component={Company} />

        </div>
    )
}