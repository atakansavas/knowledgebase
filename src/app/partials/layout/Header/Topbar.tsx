import React, { useContext } from "react";
import SearchDropdown from "../SearchDropdown";
import UserProfile from "./UserProfile";
import { AppContext } from "../../../contexts/Layout/Index";
import Login from "./Login";

export default () => {
    const context = useContext(AppContext);
    const { isLoggedIn } = context;

    return (
        <div className="kt-header__topbar kt-grid__item">
            <SearchDropdown useSVG="true" />

            {/* <UserNotifications
                bgImage={toAbsoluteUrl("/media/misc/bg-1.jpg")}
                pulse="true"
                pulseLight="false"
                skin="dark"
                iconType=""
                isLabel={false}
                type="success"
                useSVG="true"
                dot="false"
            /> */}

            {
                isLoggedIn ?
                    (<UserProfile />) :
                    (<Login />)
            }



            {/* <QuickActionsPanel
            /> */}

            {/* {
                !isLoggedIn &&
                (
                    <UserProfile />
                )
            } */}



        </div>
    );
}
