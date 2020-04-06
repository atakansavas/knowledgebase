/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect, useRef, FormEvent } from "react";
import clsx from "clsx";
import Dropdown from "react-bootstrap/Dropdown";
import { ReactComponent as CompilingIcon } from "../../../../_metronic/layout/assets/layout-svg-icons/Compiling.svg";
import HeaderDropdownToggle from "../../content/CustomDropdowns/HeaderDropdownToggle";
import { AppContext } from "../../../contexts/Layout/Index";
import RequestHelper from "../../../services/RequestHelper";
import RequestDto from "../../../models/system/RequestDto";
import { ApiUrl } from "../../../common/enums/ApiUrl";
import { MethodName } from "../../../common/enums/MethodName";
import { LoginResponse } from "../../../models/LoginResponse";
import { Button, Checkbox, Form, Container, Input, Message } from 'semantic-ui-react'
import { Jumbotron } from "react-bootstrap";
import { RegisterRequest } from "../../../models/RegisterRequest";

type Props = {}

export default (props: Props) => {
    const context = useContext(AppContext);
    const { setLogin, setUserName, setToken } = context;

    const [uName, setUName] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");

    const [isLoading, setLoading] = useState<boolean>(false);
    const [isSucceed, setIsSucceed] = useState<boolean>(false);

    const handleSubmit = () => {
        setLoading(true);

        const fetchData = async () => {
            const requestDto = new RequestDto();
            requestDto.apiUrl = ApiUrl.BaseApi;
            requestDto.methodName = MethodName.Register;
            requestDto.requestObject = {
                username: uName,
                password: password,
                name: firstName,
                surname: lastName
            } as RegisterRequest;


            const registerResponse = await RequestHelper.Post<boolean>(requestDto);
            console.log(registerResponse);
            debugger;
            if (registerResponse.response) {
                setLoading(false);
                setIsSucceed(true);
            }
        };

        fetchData();
    };

    return (
        <Dropdown className="kt-header__topbar-item" drop="down" alignRight>
            <Dropdown.Toggle
                as={HeaderDropdownToggle}
                id="dropdown-toggle-quick-actions-panel-toggle"
            >
                <span
                    className="kt-header__topbar-icon"
                >
                    <CompilingIcon className="kt-svg-icon kt-svg-icon--lg" />
                </span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
                {/* begin: Head */}
                <div
                    className={`kt-head kt-head--skin-`}
                    style={{ backgroundImage: `url("/media/misc/bg-2.jpg")` }}
                >
                    <h3 className="kt-head__title text-white">
                        Want to Register?
                    </h3>
                </div>
                {/* end: Head */}

                <Jumbotron style={{ marginBottom: 0 }}>
                    <Message
                        visible={!isSucceed}
                        error
                        header='Register Error'
                        content='You cant register'
                    />
                    <Message
                        visible={isSucceed}
                        success
                        header='Successfully Registerd'
                        content='You can login now.!'
                    />


                    <Form disa onSubmit={handleSubmit} loading={isLoading || isSucceed}>


                        <Form.Group widths='equal'>
                            <Form.Input required fluid label='First name' placeholder='First name' onChange={(event: any) => setfirstName(event.currentTarget.value)} />
                            <Form.Input required fluid label='Last name' placeholder='Last name' onChange={(event: any) => setlastName(event.currentTarget.value)} />

                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input required fluid label='Username' placeholder='Username' onChange={(event: any) => setUName(event.currentTarget.value)} />
                            <Form.Input required fluid label='Password' placeholder='Password' onChange={(event: any) => setPassword(event.currentTarget.value)} />

                        </Form.Group>

                        <Form.Field required>
                            <Checkbox required label='I agree to the Terms and Conditions' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>


                    {/* 
                    <Form
                        noValidate
                        validated={isValid}
                        onSubmit={handleSubmit}
                        ref={formEl}
                    >
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue="Mark"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    defaultValue="Otto"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                <Form.Label>Username</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
              </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                <Form.Label>Password</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
              </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                            />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </>
 */}



                    {/* <Form onSubmit={handleSubmit}>
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
                    </Form> */}
                </Jumbotron>

            </Dropdown.Menu>
        </Dropdown>
    );
}
