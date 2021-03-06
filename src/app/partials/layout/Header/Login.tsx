/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect } from "react";
import clsx from "clsx";
import Dropdown from "react-bootstrap/Dropdown";
import { ReactComponent as EqualizerIcon } from "../../../../_metronic/layout/assets/layout-svg-icons/Equalizer.svg";
import { ReactComponent as EuroIcon } from "../../../../_metronic/layout/assets/layout-svg-icons/Euro.svg";
import { ReactComponent as MailAttachmentIcon } from "../../../../_metronic/layout/assets/layout-svg-icons/Mail-attachment.svg";
import { ReactComponent as BoxNum2Icon } from "../../../../_metronic/layout/assets/layout-svg-icons/BoxNum2.svg";
import { ReactComponent as GroupIcon } from "../../../../_metronic/layout/assets/layout-svg-icons/Group.svg";
import HeaderDropdownToggle from "../../content/CustomDropdowns/HeaderDropdownToggle";
import { Form, Button, Container, Jumbotron, Spinner, Alert } from "react-bootstrap";
import { AppContext } from "../../../contexts/Layout/Index";
import RequestHelper from "../../../services/RequestHelper";
import RequestDto from "../../../models/system/RequestDto";
import { ApiUrl } from "../../../common/enums/ApiUrl";
import { MethodName } from "../../../common/enums/MethodName";
import { LoginResponse } from "../../../models/LoginResponse";

export default () => {
    const context = useContext(AppContext);
    const { setLogin, setUserName, setToken } = context;

    const [uName, setUName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    const handleSubmit = () => {
        setError(false);
        setLoading(true);
        const fetchData = async () => {

            const requestDto = new RequestDto();
            requestDto.apiUrl = ApiUrl.BaseApi;
            requestDto.methodName = MethodName.Login;
            requestDto.requestObject =
                "username=" + uName +
                "&password=" + password;

            const loginResponse = await RequestHelper.Get<LoginResponse>(requestDto);
            console.log(loginResponse);

            if (loginResponse.response.isSucceed) {
                setUserName(uName);
                setToken(loginResponse.response.token)
                setLogin(true);
            }
            else {
                setError(true);
                setLogin(false);
            }

            setLoading(false);
        };
        fetchData();
    };

    return (
        <Dropdown className="kt-header__topbar-item" drop="down" alignRight>
            <Dropdown.Toggle
                as={HeaderDropdownToggle}
                id="dropdown-toggle-quick-actions-panel-toggle"
            >
                <span className="kt-header__topbar-icon">
                    <EqualizerIcon className="kt-svg-icon kt-svg-icon--lg" />
                </span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
                {/* begin: Head */}
                <div
                    className={`kt-head kt-head--skin-`}
                    style={{ backgroundImage: `url("/media/misc/bg-2.jpg")` }}
                >
                    <h3 className="kt-head__title text-white">
                        Want to Login?

                {/* <span className="kt-space-15" />
                            <button
                                type="button"
                                className="btn btn-success btn-sm btn-bold btn-font-md"
                            >
                                Login
                </button> */}
                    </h3>
                </div>
                {/* end: Head */}

                <Jumbotron style={{ marginBottom: 0 }}>
                    {isError && (
                        <Alert variant="danger">
                            Login error
                        </Alert>
                    )}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={(event: any) => setUName(event.currentTarget.value)} type="text" placeholder="Enter username" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(event: any) => setPassword(event.currentTarget.value)} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button
                            variant="primary"
                            onClick={handleSubmit}
                            disabled={isLoading}
                            type="button">
                            {!isLoading && "Login"}
                            {isLoading && <Spinner animation="border" variant="info" />}

                        </Button>
                    </Form>
                </Jumbotron>

            </Dropdown.Menu>
        </Dropdown>
    );
}
