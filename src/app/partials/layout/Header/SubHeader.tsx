/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import BreadCrumbs from "../../../../_metronic/layout/sub-header/components/BreadCrumbs";
import { QuickActions } from "../../../../_metronic/layout/sub-header/components/QuickActions";


export default () => {

    return (
        <div
            id="kt_subheader"
            className={`kt-subheader  kt-grid__item`}
        >
            <div className={`kt-container`}>
                {/* <div className="kt-subheader__main">
                    <>
                        <h3 className="kt-subheader__title">
                            {title}
                  ASILIYORUZ BEYLER
                </h3>
                        <BreadCrumbs items={breadcrumb} />
                    </>
                </div> */}

                {/* <div className="kt-subheader__toolbar">
                    <div className="kt-subheader__wrapper">
                        <a href="#" className="btn kt-subheader__btn-secondary">
                            Reports
	            </a>
              &nbsp;
              <QuickActions />
                    </div>
                </div> */}
            </div>
        </div>
    )
}