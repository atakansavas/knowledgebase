import React from "react";
import AnimateLoading from "./AnimateLoading";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../_metronic";
import Topbar from "./Header/Topbar";
import HMenuItem from "../../../_metronic/layout/header/HMenu/HMenuItem";
import MenuConfig from "./Header/MenuConfig";
import { LayoutProvider, useLayoutDispatch, useLayoutState } from "../../contexts/Layout/LayoutContext";


export default () => {

    const menuItems = MenuConfig.header.items;

    const { IsShowSearchBar } = useLayoutState();


    const getHeaderLogo = () => {
        let result = "logo-light.png";
        // console.log("this.props.headerSelfSkin", this.props.headerSelfSkin);
        // if (this.props.headerSelfSkin && this.props.headerSelfSkin !== "dark") {
        //   result = "logo-dark.png";
        // }
        return toAbsoluteUrl(`/media/logos/${result}`);
    }

    return (

        <div
            className={`kt-header kt-header--fixed`}
            id="kt_header"
        >
            <div className={`kt-container`}>
                <AnimateLoading />

                <div
                    className={`kt-header__brand kt-grid__item`}
                    id="kt_header_brand"
                >
                    <Link to="" className="kt-header__brand-logo">
                        <img
                            alt="logo"
                            src={toAbsoluteUrl("/media/logos/logo-4.png")}
                            className="kt-header__brand-logo-default"
                        />
                        <img
                            alt="logo"
                            src={toAbsoluteUrl("/media/logos/logo-4-sm.png")}
                            className="kt-header__brand-logo-sticky"
                        />
                    </Link>
                </div>

                {/* <!-- begin: Header Menu --> */}

                <>
                    <button
                        className="kt-header-menu-wrapper-close"
                        id="kt_header_menu_mobile_close_btn"
                    >
                        <i className="la la-close" />
                    </button>
                    <div
                        className="kt-header-menu-wrapper"
                        id="kt_header_menu_wrapper"
                    >

                        {
                            IsShowSearchBar ? (
                                <div
                                    id="kt_header_menu"
                                    className={`kt-header-menu kt-header-menu-mobile`}
                                >
                                    <ul className={`kt-menu__nav`}>
                                        <HMenuItem item="Custom"
                                        />
                                        {menuItems.map((item, index) => {
                                            return (
                                                <React.Fragment key={`hmenuList${index}`}>
                                                    {item.title && (
                                                        <HMenuItem
                                                            item={item}
                                                            currentUrl={"this.currentUrl"}
                                                            rootArrowEnabled={true}
                                                        />
                                                    )}
                                                </React.Fragment>
                                            );
                                        })}
                                    </ul>
                                </div>
                            ) : (
                                    <>
                                    </>
                                )
                        }



                    </div>
                </>

                {/* <!-- end: Header Menu --> */}
                <Topbar />
                {/* <!-- end:: Header Topbar --> */}
            </div>
        </div>
    )
}