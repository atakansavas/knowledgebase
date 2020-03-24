import React, { forwardRef, ReactNode } from "react";
import clsx from "clsx";

type Props = {
    icon: string,
    children: ReactNode,
    className: string
}

export default (props: Props) => {
    return (
        <div
            {...props}
            role="alert"
            className={clsx("alert alert-light alert-elevate", props.className)}
        >
            {props.icon && (
                <div className="alert-icon alert-icon-top">
                    <i className={props.icon} />
                </div>
            )}

            <div className="alert-text">
                {props.children}
            </div>
        </div>
    );
};