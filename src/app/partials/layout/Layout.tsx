import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Switch } from '@material-ui/core';
import Header from './Header';
import SubHeader from './Header/SubHeader';
import Footer from './Footer';
import QuickPanel from './QuickPanel';
import ScrollTop from './ScrollTop';
import Routes from '../../routes/Routes';



export default () => {

    return (
        <React.Fragment>
            <div className="kt-grid kt-grid--hor kt-grid--root">
                {/* <!-- begin::Body --> */}
                <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
                    <div
                        className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper"
                        id="kt_wrapper"
                    >
                        <Header />

                        <div
                            className="kt-body kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-grid--stretch"
                            id="kt_body"
                        >

                            {/* <!-- begin:: Content --> */}
                            <div
                                id="kt_content"
                                className={`kt-content kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor`}
                            >
                                {/* <!-- begin:: Content Head --> */}
                                {/* {<SubHeader />} */}
                                {/* <!-- end:: Content Head --> */}

                                {/* <!-- begin:: Content Body --> */}

                                <Routes />

                                {/*<!-- end:: Content Body -->*/}
                            </div>
                            {/* <!-- end:: Content --> */}

                        </div>

                        <Footer />

                    </div>
                </div>
            </div >

            <QuickPanel />
            <ScrollTop />
        </React.Fragment>

    );
}
