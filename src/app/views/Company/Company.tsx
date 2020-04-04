import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Container, Typography } from "@material-ui/core";
import HeaderNotice from "../../partials/content/HeaderNotice";
import { SearchResponse } from "../../models/SearchResponse";
import RequestDto from "../../models/system/RequestDto";
import { ApiUrl } from "../../common/enums/ApiUrl";
import { MethodName } from "../../common/enums/MethodName";
import RequestHelper from "../../services/RequestHelper";
import PerfectScrollbar from "react-perfect-scrollbar";
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Dropdown, Tabs, Tab } from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import { Company, InitialCompany } from "../../models/Company";

export default (route: RouteComponentProps) => {


    const [company, setCompany] = useState<Company>(InitialCompany);

    const queryParams = new URLSearchParams(route.location.search);

    const _id = queryParams.get("id");




    useEffect(() => {
        const fetchData = async () => {

            const requestDto = new RequestDto();
            requestDto.apiUrl = ApiUrl.BaseApi;
            requestDto.methodName = MethodName.Company_Get;
            requestDto.requestObject = "id=" + _id;

            const companyResponse = await RequestHelper.Get<Company>(requestDto);
            setCompany(companyResponse.response);

            console.log(companyResponse.response);
        };
        fetchData();
    }, []);




    return (
        <>
            {/* // <!-- begin:: Subheader --> */}

            {/* <div className="kt-subheader   kt-grid__item" id="kt_subheader">
                <div className="kt-container ">
                    <div className="kt-subheader__main">
                        <h3 className="kt-subheader__title">
                            {company.name}
                        </h3>
                        <div className="kt-subheader__breadcrumbs">
                            <a href="#" className="kt-subheader__breadcrumbs-home"><i className="flaticon2-shelter"></i></a>
                            <span className="kt-subheader__breadcrumbs-separator"></span>
                            <a href="" className="kt-subheader__breadcrumbs-link">
                                {company.address}
                            </a>
                        </div>
                    </div>
                    <div className="kt-subheader__toolbar">
                        <div className="kt-subheader__wrapper">
                            <a href="#" className="btn kt-subheader__btn-secondary">
                                Follow Company
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* // <!-- end:: Subheader --> */}



            {/* <!-- begin:: Content --> */}
            <div className="kt-container  kt-grid__item kt-grid__item--fluid">

                <div className="row">
                    <div className="col-xl-12">

                        <div className="kt-portlet kt-portlet--height-fluid">
                            <div className="kt-portlet__body">
                                <div className="kt-widget kt-widget--user-profile-3">
                                    <div className="kt-widget__top">
                                        <div className="kt-widget__media kt-hidden-">
                                            <img src="assets/media/users/100_13.jpg" alt="image" />
                                        </div>
                                        <div className="kt-widget__pic kt-widget__pic--danger kt-font-danger kt-font-boldest kt-font-light kt-hidden">
                                            JM
														</div>
                                        <div className="kt-widget__content">
                                            <div className="kt-widget__head">
                                                <a href="#" className="kt-widget__username">
                                                    {company.name}
                                                    <i className="flaticon2-correct"></i>
                                                </a>
                                                <div className="kt-widget__action">
                                                    <button type="button" className="btn btn-label-success btn-sm btn-upper">ask</button>&nbsp;
																	<button type="button" className="btn btn-brand btn-sm btn-upper">hire</button>
                                                </div>
                                            </div>
                                            <div className="kt-widget__subhead">
                                                <a href="#"><i className="flaticon2-new-email"></i>jason@siastudio.com</a>
                                                <a href="#"><i className="flaticon2-calendar-3"></i>PR Manager </a>
                                                <a href="#"><i className="flaticon2-placeholder"></i>Melbourne</a>
                                            </div>
                                            <div className="kt-widget__info">
                                                <div className="kt-widget__desc">
                                                    {company.address}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kt-widget__bottom">
                                        <div className="kt-widget__item">
                                            <div className="kt-widget__icon">
                                                <i className="flaticon-piggy-bank"></i>
                                            </div>
                                            <div className="kt-widget__details">
                                                <span className="kt-widget__title">Earnings</span>
                                                <span className="kt-widget__value"><span>$</span>249,500</span>
                                            </div>
                                        </div>
                                        <div className="kt-widget__item">
                                            <div className="kt-widget__icon">
                                                <i className="flaticon-confetti"></i>
                                            </div>
                                            <div className="kt-widget__details">
                                                <span className="kt-widget__title">Expances</span>
                                                <span className="kt-widget__value"><span>$</span>164,700</span>
                                            </div>
                                        </div>
                                        <div className="kt-widget__item">
                                            <div className="kt-widget__icon">
                                                <i className="flaticon-pie-chart"></i>
                                            </div>
                                            <div className="kt-widget__details">
                                                <span className="kt-widget__title">Net</span>
                                                <span className="kt-widget__value"><span>$</span>164,700</span>
                                            </div>
                                        </div>
                                        <div className="kt-widget__item">
                                            <div className="kt-widget__icon">
                                                <i className="flaticon-file-2"></i>
                                            </div>
                                            <div className="kt-widget__details">
                                                <span className="kt-widget__title">73 Tasks</span>
                                                <a href="#" className="kt-widget__value kt-font-brand">View</a>
                                            </div>
                                        </div>
                                        <div className="kt-widget__item">
                                            <div className="kt-widget__icon">
                                                <i className="flaticon-chat-1"></i>
                                            </div>
                                            <div className="kt-widget__details">
                                                <span className="kt-widget__title">648 Comments</span>
                                                <a href="#" className="kt-widget__value kt-font-brand">View</a>
                                            </div>
                                        </div>
                                        <div className="kt-widget__item">
                                            <div className="kt-widget__icon">
                                                <i className="flaticon-network"></i>
                                            </div>
                                            <div className="kt-widget__details">
                                                <div className="kt-section__content kt-section__content--solid">
                                                    <div className="kt-media-group">
                                                        <a href="#" className="kt-media kt-media--sm kt-media--circle" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" title="" data-original-title="John Myer">
                                                            <img src="assets/media/users/100_1.jpg" alt="image" />
                                                        </a>
                                                        <a href="#" className="kt-media kt-media--sm kt-media--circle" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" title="" data-original-title="Alison Brandy">
                                                            <img src="assets/media/users/100_10.jpg" alt="image" />
                                                        </a>
                                                        <a href="#" className="kt-media kt-media--sm kt-media--circle" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" title="" data-original-title="Selina Cranson">
                                                            <img src="assets/media/users/100_11.jpg" alt="image" />
                                                        </a>
                                                        <a href="#" className="kt-media kt-media--sm kt-media--circle" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" title="" data-original-title="Luke Walls">
                                                            <img src="assets/media/users/100_2.jpg" alt="image" />
                                                        </a>
                                                        <a href="#" className="kt-media kt-media--sm kt-media--circle" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" title="" data-original-title="Micheal York">
                                                            <img src="assets/media/users/100_3.jpg" alt="image" />
                                                        </a>
                                                        <a href="#" className="kt-media kt-media--sm kt-media--circle" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" title="" data-original-title="Micheal York">
                                                            <span>+3</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <!--End::Section--> */}

                {/* <!--Begin::Section--> */}
                <div className="row">
                    <div className="col-xl-12">

                        <div className="kt-portlet kt-portlet--height-fluid">

                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="nav nav-pills nav-pills-sm nav-pills-label nav-pills-bold">
                                <Tab eventKey="home" title="Work Enviorment">
                                    <div className="kt-notification">
                                        <a href="#" className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <svg width="24px" height="24px" version="1.1" className="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
                                                        <rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) " x="16.3255682" y="2.94551858" width="3" height="18" rx="1" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title">
                                                    New order has been received.
																			</div>
                                                <div className="kt-notification__item-time">
                                                    2 hrs ago
																			</div>
                                            </div>
                                        </a>
                                        <a href="#" className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <svg width="24px" height="24px" version="1.1" className="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path d="M12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.98630124,11 4.48466491,11.0516454 4,11.1500272 L4,7 C4,5.8954305 4.8954305,5 6,5 L20,5 C21.1045695,5 22,5.8954305 22,7 L22,16 C22,17.1045695 21.1045695,18 20,18 L12.9835977,18 Z M19.1444251,6.83964668 L13,10.1481833 L6.85557487,6.83964668 C6.4908718,6.6432681 6.03602525,6.77972206 5.83964668,7.14442513 C5.6432681,7.5091282 5.77972206,7.96397475 6.14442513,8.16035332 L12.6444251,11.6603533 C12.8664074,11.7798822 13.1335926,11.7798822 13.3555749,11.6603533 L19.8555749,8.16035332 C20.2202779,7.96397475 20.3567319,7.5091282 20.1603533,7.14442513 C19.9639747,6.77972206 19.5091282,6.6432681 19.1444251,6.83964668 Z" fill="#000000" />
                                                        <path d="M8.4472136,18.1055728 C8.94119209,18.3525621 9.14141644,18.9532351 8.89442719,19.4472136 C8.64743794,19.9411921 8.0467649,20.1414164 7.5527864,19.8944272 L5,18.618034 L5,14.5 C5,13.9477153 5.44771525,13.5 6,13.5 C6.55228475,13.5 7,13.9477153 7,14.5 L7,17.381966 L8.4472136,18.1055728 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                    </g>
                                                </svg> </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title">
                                                    New member is registered and pending for approval.
																			</div>
                                                <div className="kt-notification__item-time">
                                                    3 hrs ago
																			</div>
                                            </div>
                                        </a>
                                        <a href="#" className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <svg width="24px" height="24px" version="1.1" className="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path d="M12,10.9996338 C12.8356605,10.3719448 13.8743941,10 15,10 C17.7614237,10 20,12.2385763 20,15 C20,17.7614237 17.7614237,20 15,20 C13.8743941,20 12.8356605,19.6280552 12,19.0003662 C11.1643395,19.6280552 10.1256059,20 9,20 C6.23857625,20 4,17.7614237 4,15 C4,12.2385763 6.23857625,10 9,10 C10.1256059,10 11.1643395,10.3719448 12,10.9996338 Z M13.3336047,12.504354 C13.757474,13.2388026 14,14.0910788 14,15 C14,15.9088933 13.7574889,16.761145 13.3336438,17.4955783 C13.8188886,17.8206693 14.3938466,18 15,18 C16.6568542,18 18,16.6568542 18,15 C18,13.3431458 16.6568542,12 15,12 C14.3930587,12 13.8175971,12.18044 13.3336047,12.504354 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                        <circle fill="#000000" cx="12" cy="9" r="5" />
                                                    </g>
                                                </svg> </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title">
                                                    Membership application has been added.
																			</div>
                                                <div className="kt-notification__item-time">
                                                    3 hrs ago
																			</div>
                                            </div>
                                        </a>
                                        <a href="#" className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <svg width="24px" height="24px" version="1.1" className="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <polygon points="0 0 24 0 24 24 0 24" />
                                                        <path d="M18.5,8 C17.1192881,8 16,6.88071187 16,5.5 C16,4.11928813 17.1192881,3 18.5,3 C19.8807119,3 21,4.11928813 21,5.5 C21,6.88071187 19.8807119,8 18.5,8 Z M18.5,21 C17.1192881,21 16,19.8807119 16,18.5 C16,17.1192881 17.1192881,16 18.5,16 C19.8807119,16 21,17.1192881 21,18.5 C21,19.8807119 19.8807119,21 18.5,21 Z M5.5,21 C4.11928813,21 3,19.8807119 3,18.5 C3,17.1192881 4.11928813,16 5.5,16 C6.88071187,16 8,17.1192881 8,18.5 C8,19.8807119 6.88071187,21 5.5,21 Z" fill="#000000" opacity="0.3" />
                                                        <path d="M5.5,8 C4.11928813,8 3,6.88071187 3,5.5 C3,4.11928813 4.11928813,3 5.5,3 C6.88071187,3 8,4.11928813 8,5.5 C8,6.88071187 6.88071187,8 5.5,8 Z M11,4 L13,4 C13.5522847,4 14,4.44771525 14,5 C14,5.55228475 13.5522847,6 13,6 L11,6 C10.4477153,6 10,5.55228475 10,5 C10,4.44771525 10.4477153,4 11,4 Z M11,18 L13,18 C13.5522847,18 14,18.4477153 14,19 C14,19.5522847 13.5522847,20 13,20 L11,20 C10.4477153,20 10,19.5522847 10,19 C10,18.4477153 10.4477153,18 11,18 Z M5,10 C5.55228475,10 6,10.4477153 6,11 L6,13 C6,13.5522847 5.55228475,14 5,14 C4.44771525,14 4,13.5522847 4,13 L4,11 C4,10.4477153 4.44771525,10 5,10 Z M19,10 C19.5522847,10 20,10.4477153 20,11 L20,13 C20,13.5522847 19.5522847,14 19,14 C18.4477153,14 18,13.5522847 18,13 L18,11 C18,10.4477153 18.4477153,10 19,10 Z" fill="#000000" />
                                                    </g>
                                                </svg> </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title">
                                                    New report file has been uploaded.
																			</div>
                                                <div className="kt-notification__item-time">
                                                    5 hrs ago
																			</div>
                                            </div>
                                        </a>
                                        <a href="#" className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <svg width="24px" height="24px" version="1.1" className="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path d="M16.3740377,19.9389434 L22.2226499,11.1660251 C22.4524142,10.8213786 22.3592838,10.3557266 22.0146373,10.1259623 C21.8914367,10.0438285 21.7466809,10 21.5986122,10 L17,10 L17,4.47708173 C17,4.06286817 16.6642136,3.72708173 16.25,3.72708173 C15.9992351,3.72708173 15.7650616,3.85240758 15.6259623,4.06105658 L9.7773501,12.8339749 C9.54758575,13.1786214 9.64071616,13.6442734 9.98536267,13.8740377 C10.1085633,13.9561715 10.2533191,14 10.4013878,14 L15,14 L15,19.5229183 C15,19.9371318 15.3357864,20.2729183 15.75,20.2729183 C16.0007649,20.2729183 16.2349384,20.1475924 16.3740377,19.9389434 Z" fill="#000000" />
                                                        <path d="M4.5,5 L9.5,5 C10.3284271,5 11,5.67157288 11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L4.5,8 C3.67157288,8 3,7.32842712 3,6.5 C3,5.67157288 3.67157288,5 4.5,5 Z M4.5,17 L9.5,17 C10.3284271,17 11,17.6715729 11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L4.5,20 C3.67157288,20 3,19.3284271 3,18.5 C3,17.6715729 3.67157288,17 4.5,17 Z M2.5,11 L6.5,11 C7.32842712,11 8,11.6715729 8,12.5 C8,13.3284271 7.32842712,14 6.5,14 L2.5,14 C1.67157288,14 1,13.3284271 1,12.5 C1,11.6715729 1.67157288,11 2.5,11 Z" fill="#000000" opacity="0.3" />
                                                    </g>
                                                </svg> </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title">
                                                    New user feedback received and pending for review.
																			</div>
                                                <div className="kt-notification__item-time">
                                                    8 hrs ago
																			</div>
                                            </div>
                                        </a>
                                        <a href="#" className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <svg width="24px" height="24px" version="1.1" className="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path d="M13.2070325,4 C13.0721672,4.47683179 13,4.97998812 13,5.5 C13,8.53756612 15.4624339,11 18.5,11 C19.0200119,11 19.5231682,10.9278328 20,10.7929675 L20,17 C20,18.6568542 18.6568542,20 17,20 L7,20 C5.34314575,20 4,18.6568542 4,17 L4,7 C4,5.34314575 5.34314575,4 7,4 L13.2070325,4 Z" fill="#000000" />
                                                        <circle fill="#000000" opacity="0.3" cx="18.5" cy="5.5" r="2.5" />
                                                    </g>
                                                </svg> </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title">
                                                    Database sever #2 has been fully restarted.
																			</div>
                                                <div className="kt-notification__item-time">
                                                    23 hrs ago
																			</div>
                                            </div>
                                        </a>
                                    </div>
                                </Tab>
                                <Tab eventKey="profile" title="Work Hours">
                                    <div className="kt-notification">
                                        <a href="#" className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <svg width="24px" height="24px" version="1.1" className="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
                                                        <rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) " x="16.3255682" y="2.94551858" width="3" height="18" rx="1" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title">
                                                    New order has been received.
																			</div>
                                                <div className="kt-notification__item-time">
                                                    2 hrs ago
																			</div>
                                            </div>
                                        </a>
                                        <a href="#" className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <svg width="24px" height="24px" version="1.1" className="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path d="M12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.98630124,11 4.48466491,11.0516454 4,11.1500272 L4,7 C4,5.8954305 4.8954305,5 6,5 L20,5 C21.1045695,5 22,5.8954305 22,7 L22,16 C22,17.1045695 21.1045695,18 20,18 L12.9835977,18 Z M19.1444251,6.83964668 L13,10.1481833 L6.85557487,6.83964668 C6.4908718,6.6432681 6.03602525,6.77972206 5.83964668,7.14442513 C5.6432681,7.5091282 5.77972206,7.96397475 6.14442513,8.16035332 L12.6444251,11.6603533 C12.8664074,11.7798822 13.1335926,11.7798822 13.3555749,11.6603533 L19.8555749,8.16035332 C20.2202779,7.96397475 20.3567319,7.5091282 20.1603533,7.14442513 C19.9639747,6.77972206 19.5091282,6.6432681 19.1444251,6.83964668 Z" fill="#000000" />
                                                        <path d="M8.4472136,18.1055728 C8.94119209,18.3525621 9.14141644,18.9532351 8.89442719,19.4472136 C8.64743794,19.9411921 8.0467649,20.1414164 7.5527864,19.8944272 L5,18.618034 L5,14.5 C5,13.9477153 5.44771525,13.5 6,13.5 C6.55228475,13.5 7,13.9477153 7,14.5 L7,17.381966 L8.4472136,18.1055728 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                    </g>
                                                </svg> </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title">
                                                    New member is registered and pending for approval.
																			</div>
                                                <div className="kt-notification__item-time">
                                                    3 hrs ago
																			</div>
                                            </div>
                                        </a>
                                        <a href="#" className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <svg width="24px" height="24px" version="1.1" className="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path d="M12,10.9996338 C12.8356605,10.3719448 13.8743941,10 15,10 C17.7614237,10 20,12.2385763 20,15 C20,17.7614237 17.7614237,20 15,20 C13.8743941,20 12.8356605,19.6280552 12,19.0003662 C11.1643395,19.6280552 10.1256059,20 9,20 C6.23857625,20 4,17.7614237 4,15 C4,12.2385763 6.23857625,10 9,10 C10.1256059,10 11.1643395,10.3719448 12,10.9996338 Z M13.3336047,12.504354 C13.757474,13.2388026 14,14.0910788 14,15 C14,15.9088933 13.7574889,16.761145 13.3336438,17.4955783 C13.8188886,17.8206693 14.3938466,18 15,18 C16.6568542,18 18,16.6568542 18,15 C18,13.3431458 16.6568542,12 15,12 C14.3930587,12 13.8175971,12.18044 13.3336047,12.504354 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                        <circle fill="#000000" cx="12" cy="9" r="5" />
                                                    </g>
                                                </svg> </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title">
                                                    Membership application has been added.
																			</div>
                                                <div className="kt-notification__item-time">
                                                    3 hrs ago
																			</div>
                                            </div>
                                        </a>
                                        <a href="#" className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <svg width="24px" height="24px" version="1.1" className="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <polygon points="0 0 24 0 24 24 0 24" />
                                                        <path d="M18.5,8 C17.1192881,8 16,6.88071187 16,5.5 C16,4.11928813 17.1192881,3 18.5,3 C19.8807119,3 21,4.11928813 21,5.5 C21,6.88071187 19.8807119,8 18.5,8 Z M18.5,21 C17.1192881,21 16,19.8807119 16,18.5 C16,17.1192881 17.1192881,16 18.5,16 C19.8807119,16 21,17.1192881 21,18.5 C21,19.8807119 19.8807119,21 18.5,21 Z M5.5,21 C4.11928813,21 3,19.8807119 3,18.5 C3,17.1192881 4.11928813,16 5.5,16 C6.88071187,16 8,17.1192881 8,18.5 C8,19.8807119 6.88071187,21 5.5,21 Z" fill="#000000" opacity="0.3" />
                                                        <path d="M5.5,8 C4.11928813,8 3,6.88071187 3,5.5 C3,4.11928813 4.11928813,3 5.5,3 C6.88071187,3 8,4.11928813 8,5.5 C8,6.88071187 6.88071187,8 5.5,8 Z M11,4 L13,4 C13.5522847,4 14,4.44771525 14,5 C14,5.55228475 13.5522847,6 13,6 L11,6 C10.4477153,6 10,5.55228475 10,5 C10,4.44771525 10.4477153,4 11,4 Z M11,18 L13,18 C13.5522847,18 14,18.4477153 14,19 C14,19.5522847 13.5522847,20 13,20 L11,20 C10.4477153,20 10,19.5522847 10,19 C10,18.4477153 10.4477153,18 11,18 Z M5,10 C5.55228475,10 6,10.4477153 6,11 L6,13 C6,13.5522847 5.55228475,14 5,14 C4.44771525,14 4,13.5522847 4,13 L4,11 C4,10.4477153 4.44771525,10 5,10 Z M19,10 C19.5522847,10 20,10.4477153 20,11 L20,13 C20,13.5522847 19.5522847,14 19,14 C18.4477153,14 18,13.5522847 18,13 L18,11 C18,10.4477153 18.4477153,10 19,10 Z" fill="#000000" />
                                                    </g>
                                                </svg> </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title">
                                                    New report file has been uploaded.
																			</div>
                                                <div className="kt-notification__item-time">
                                                    5 hrs ago
																			</div>
                                            </div>
                                        </a>
                                        <a href="#" className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <svg width="24px" height="24px" version="1.1" className="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path d="M16.3740377,19.9389434 L22.2226499,11.1660251 C22.4524142,10.8213786 22.3592838,10.3557266 22.0146373,10.1259623 C21.8914367,10.0438285 21.7466809,10 21.5986122,10 L17,10 L17,4.47708173 C17,4.06286817 16.6642136,3.72708173 16.25,3.72708173 C15.9992351,3.72708173 15.7650616,3.85240758 15.6259623,4.06105658 L9.7773501,12.8339749 C9.54758575,13.1786214 9.64071616,13.6442734 9.98536267,13.8740377 C10.1085633,13.9561715 10.2533191,14 10.4013878,14 L15,14 L15,19.5229183 C15,19.9371318 15.3357864,20.2729183 15.75,20.2729183 C16.0007649,20.2729183 16.2349384,20.1475924 16.3740377,19.9389434 Z" fill="#000000" />
                                                        <path d="M4.5,5 L9.5,5 C10.3284271,5 11,5.67157288 11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L4.5,8 C3.67157288,8 3,7.32842712 3,6.5 C3,5.67157288 3.67157288,5 4.5,5 Z M4.5,17 L9.5,17 C10.3284271,17 11,17.6715729 11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L4.5,20 C3.67157288,20 3,19.3284271 3,18.5 C3,17.6715729 3.67157288,17 4.5,17 Z M2.5,11 L6.5,11 C7.32842712,11 8,11.6715729 8,12.5 C8,13.3284271 7.32842712,14 6.5,14 L2.5,14 C1.67157288,14 1,13.3284271 1,12.5 C1,11.6715729 1.67157288,11 2.5,11 Z" fill="#000000" opacity="0.3" />
                                                    </g>
                                                </svg> </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title">
                                                    New user feedback received and pending for review.
																			</div>
                                                <div className="kt-notification__item-time">
                                                    8 hrs ago
																			</div>
                                            </div>
                                        </a>
                                        <a href="#" className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <svg width="24px" height="24px" version="1.1" className="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path d="M13.2070325,4 C13.0721672,4.47683179 13,4.97998812 13,5.5 C13,8.53756612 15.4624339,11 18.5,11 C19.0200119,11 19.5231682,10.9278328 20,10.7929675 L20,17 C20,18.6568542 18.6568542,20 17,20 L7,20 C5.34314575,20 4,18.6568542 4,17 L4,7 C4,5.34314575 5.34314575,4 7,4 L13.2070325,4 Z" fill="#000000" />
                                                        <circle fill="#000000" opacity="0.3" cx="18.5" cy="5.5" r="2.5" />
                                                    </g>
                                                </svg> </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title">
                                                    Database sever #2 has been fully restarted.
																			</div>
                                                <div className="kt-notification__item-time">
                                                    23 hrs ago
																			</div>
                                            </div>
                                        </a>
                                    </div>
                                </Tab>
                                <Tab eventKey="contact" title="Location">
                                    <div className="kt-notification">
                                        <a href="#" className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <svg width="24px" height="24px" version="1.1" className="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
                                                        <rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) " x="16.3255682" y="2.94551858" width="3" height="18" rx="1" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title">
                                                    New order has been received.
																			</div>
                                                <div className="kt-notification__item-time">
                                                    2 hrs ago
																			</div>
                                            </div>
                                        </a>
                                        <a href="#" className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <svg width="24px" height="24px" version="1.1" className="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path d="M12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.98630124,11 4.48466491,11.0516454 4,11.1500272 L4,7 C4,5.8954305 4.8954305,5 6,5 L20,5 C21.1045695,5 22,5.8954305 22,7 L22,16 C22,17.1045695 21.1045695,18 20,18 L12.9835977,18 Z M19.1444251,6.83964668 L13,10.1481833 L6.85557487,6.83964668 C6.4908718,6.6432681 6.03602525,6.77972206 5.83964668,7.14442513 C5.6432681,7.5091282 5.77972206,7.96397475 6.14442513,8.16035332 L12.6444251,11.6603533 C12.8664074,11.7798822 13.1335926,11.7798822 13.3555749,11.6603533 L19.8555749,8.16035332 C20.2202779,7.96397475 20.3567319,7.5091282 20.1603533,7.14442513 C19.9639747,6.77972206 19.5091282,6.6432681 19.1444251,6.83964668 Z" fill="#000000" />
                                                        <path d="M8.4472136,18.1055728 C8.94119209,18.3525621 9.14141644,18.9532351 8.89442719,19.4472136 C8.64743794,19.9411921 8.0467649,20.1414164 7.5527864,19.8944272 L5,18.618034 L5,14.5 C5,13.9477153 5.44771525,13.5 6,13.5 C6.55228475,13.5 7,13.9477153 7,14.5 L7,17.381966 L8.4472136,18.1055728 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                    </g>
                                                </svg> </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title">
                                                    New member is registered and pending for approval.
																			</div>
                                                <div className="kt-notification__item-time">
                                                    3 hrs ago
																			</div>
                                            </div>
                                        </a>
                                        <a href="#" className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <svg width="24px" height="24px" version="1.1" className="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path d="M12,10.9996338 C12.8356605,10.3719448 13.8743941,10 15,10 C17.7614237,10 20,12.2385763 20,15 C20,17.7614237 17.7614237,20 15,20 C13.8743941,20 12.8356605,19.6280552 12,19.0003662 C11.1643395,19.6280552 10.1256059,20 9,20 C6.23857625,20 4,17.7614237 4,15 C4,12.2385763 6.23857625,10 9,10 C10.1256059,10 11.1643395,10.3719448 12,10.9996338 Z M13.3336047,12.504354 C13.757474,13.2388026 14,14.0910788 14,15 C14,15.9088933 13.7574889,16.761145 13.3336438,17.4955783 C13.8188886,17.8206693 14.3938466,18 15,18 C16.6568542,18 18,16.6568542 18,15 C18,13.3431458 16.6568542,12 15,12 C14.3930587,12 13.8175971,12.18044 13.3336047,12.504354 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                        <circle fill="#000000" cx="12" cy="9" r="5" />
                                                    </g>
                                                </svg> </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title">
                                                    Membership application has been added.
																			</div>
                                                <div className="kt-notification__item-time">
                                                    3 hrs ago
																			</div>
                                            </div>
                                        </a>
                                        <a href="#" className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <svg width="24px" height="24px" version="1.1" className="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <polygon points="0 0 24 0 24 24 0 24" />
                                                        <path d="M18.5,8 C17.1192881,8 16,6.88071187 16,5.5 C16,4.11928813 17.1192881,3 18.5,3 C19.8807119,3 21,4.11928813 21,5.5 C21,6.88071187 19.8807119,8 18.5,8 Z M18.5,21 C17.1192881,21 16,19.8807119 16,18.5 C16,17.1192881 17.1192881,16 18.5,16 C19.8807119,16 21,17.1192881 21,18.5 C21,19.8807119 19.8807119,21 18.5,21 Z M5.5,21 C4.11928813,21 3,19.8807119 3,18.5 C3,17.1192881 4.11928813,16 5.5,16 C6.88071187,16 8,17.1192881 8,18.5 C8,19.8807119 6.88071187,21 5.5,21 Z" fill="#000000" opacity="0.3" />
                                                        <path d="M5.5,8 C4.11928813,8 3,6.88071187 3,5.5 C3,4.11928813 4.11928813,3 5.5,3 C6.88071187,3 8,4.11928813 8,5.5 C8,6.88071187 6.88071187,8 5.5,8 Z M11,4 L13,4 C13.5522847,4 14,4.44771525 14,5 C14,5.55228475 13.5522847,6 13,6 L11,6 C10.4477153,6 10,5.55228475 10,5 C10,4.44771525 10.4477153,4 11,4 Z M11,18 L13,18 C13.5522847,18 14,18.4477153 14,19 C14,19.5522847 13.5522847,20 13,20 L11,20 C10.4477153,20 10,19.5522847 10,19 C10,18.4477153 10.4477153,18 11,18 Z M5,10 C5.55228475,10 6,10.4477153 6,11 L6,13 C6,13.5522847 5.55228475,14 5,14 C4.44771525,14 4,13.5522847 4,13 L4,11 C4,10.4477153 4.44771525,10 5,10 Z M19,10 C19.5522847,10 20,10.4477153 20,11 L20,13 C20,13.5522847 19.5522847,14 19,14 C18.4477153,14 18,13.5522847 18,13 L18,11 C18,10.4477153 18.4477153,10 19,10 Z" fill="#000000" />
                                                    </g>
                                                </svg> </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title">
                                                    New report file has been uploaded.
																			</div>
                                                <div className="kt-notification__item-time">
                                                    5 hrs ago
																			</div>
                                            </div>
                                        </a>
                                        <a href="#" className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <svg width="24px" height="24px" version="1.1" className="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path d="M16.3740377,19.9389434 L22.2226499,11.1660251 C22.4524142,10.8213786 22.3592838,10.3557266 22.0146373,10.1259623 C21.8914367,10.0438285 21.7466809,10 21.5986122,10 L17,10 L17,4.47708173 C17,4.06286817 16.6642136,3.72708173 16.25,3.72708173 C15.9992351,3.72708173 15.7650616,3.85240758 15.6259623,4.06105658 L9.7773501,12.8339749 C9.54758575,13.1786214 9.64071616,13.6442734 9.98536267,13.8740377 C10.1085633,13.9561715 10.2533191,14 10.4013878,14 L15,14 L15,19.5229183 C15,19.9371318 15.3357864,20.2729183 15.75,20.2729183 C16.0007649,20.2729183 16.2349384,20.1475924 16.3740377,19.9389434 Z" fill="#000000" />
                                                        <path d="M4.5,5 L9.5,5 C10.3284271,5 11,5.67157288 11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L4.5,8 C3.67157288,8 3,7.32842712 3,6.5 C3,5.67157288 3.67157288,5 4.5,5 Z M4.5,17 L9.5,17 C10.3284271,17 11,17.6715729 11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L4.5,20 C3.67157288,20 3,19.3284271 3,18.5 C3,17.6715729 3.67157288,17 4.5,17 Z M2.5,11 L6.5,11 C7.32842712,11 8,11.6715729 8,12.5 C8,13.3284271 7.32842712,14 6.5,14 L2.5,14 C1.67157288,14 1,13.3284271 1,12.5 C1,11.6715729 1.67157288,11 2.5,11 Z" fill="#000000" opacity="0.3" />
                                                    </g>
                                                </svg> </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title">
                                                    New user feedback received and pending for review.
                                            </div>
                                                <div className="kt-notification__item-time">
                                                    8 hrs ago
                                            </div>
                                            </div>
                                        </a>
                                        <a href="#" className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <svg width="24px" height="24px" version="1.1" className="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path d="M13.2070325,4 C13.0721672,4.47683179 13,4.97998812 13,5.5 C13,8.53756612 15.4624339,11 18.5,11 C19.0200119,11 19.5231682,10.9278328 20,10.7929675 L20,17 C20,18.6568542 18.6568542,20 17,20 L7,20 C5.34314575,20 4,18.6568542 4,17 L4,7 C4,5.34314575 5.34314575,4 7,4 L13.2070325,4 Z" fill="#000000" />
                                                        <circle fill="#000000" opacity="0.3" cx="18.5" cy="5.5" r="2.5" />
                                                    </g>
                                                </svg> </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title">
                                                    Database sever #2 has been fully restarted.
																			</div>
                                                <div className="kt-notification__item-time">
                                                    23 hrs ago
																			</div>
                                            </div>
                                        </a>
                                    </div>
                                </Tab>
                            </Tabs>

                        </div>
                    </div>

                </div>

                {/* <!--End::Section--> */}
            </div>


        </>
    )

}