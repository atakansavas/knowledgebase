import React from "react";
import SearchDropdown from "../SearchDropdown";
// import UserNotifications from "../UserNotifications";
// import LanguageSelector from "../LanguageSelector";
// import { toAbsoluteUrl } from "../../../../_metronic/utils/utils";
import UserProfile from "./UserProfile";

export default () => {

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


            <UserProfile />


        </div>
    );
}
