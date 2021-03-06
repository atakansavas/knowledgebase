/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../_metronic/utils/utils";

export default () => {
    const today = new Date().getFullYear();
    return (
        <div
            className={`kt-footer kt-grid__item`}
            id="kt_footer"
            style={{ backgroundImage: `url(${toAbsoluteUrl("/media/bg/bg-2.jpg")})` }}
        >
            <div className="kt-footer__top">
                <div className={`kt-container`}>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="kt-footer__section">
                                <h3 className="kt-footer__title">About</h3>
                                <div className="kt-footer__content">
                                    Hayalinizdeki ise ulasmak zannettiginizden daha da kolay.
                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="kt-footer__section">
                                <h3 className="kt-footer__title">Quick Links</h3>
                                <div className="kt-footer__content">
                                    <div className="kt-footer__nav">
                                        <div className="kt-footer__nav-section">
                                            <a href="#">General Reports</a>
                                            <a href="#">Dashboart Widgets</a>
                                            <a href="#">Custom Pages</a>
                                        </div>
                                        <div className="kt-footer__nav-section">
                                            <a href="#">User Setting</a>
                                            <a href="#">Custom Pages</a>
                                            <a href="#">Intranet Settings</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="kt-footer__section">
                                <h3 className="kt-footer__title">Get In Touch</h3>
                                <div className="kt-footer__content">
                                    <form action="" className="kt-footer__subscribe">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Your Email"
                                            />
                                            <div className="input-group-append">
                                                <button className="btn btn-brand" type="button">
                                                    Join
                            </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="kt-footer__bottom" style={{ backgroundColor: "transparent" }}>
                <div className={`kt-container `}>
                    <div className="kt-footer__wrapper">
                        <div className="kt-footer__logo">
                            <Link to={"/"} className="kt-header__brand-logo">
                                <img
                                    alt="Logo"
                                    className="kt-header__brand-logo-sticky"
                                    src={toAbsoluteUrl("/media/logos/logo-4-sm.png")}
                                />
                            </Link>
                            <div className="kt-footer__copyright">
                                {today}&nbsp;&copy;&nbsp;
                  <a href="http://keenthemes.com/metronic" target="_blank">
                                    Keenthemes
                  </a>
                            </div>
                        </div>
                        <div className="kt-footer__menu">
                            <a href="http://keenthemes.com/metronic" target="_blank">
                                Purchase License
                </a>
                            <a href="http://keenthemes.com/metronic" target="_blank">
                                Team
                </a>
                            <a href="http://keenthemes.com/metronic" target="_blank">
                                Contact
                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
