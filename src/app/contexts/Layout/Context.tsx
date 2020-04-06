import React, { createContext, useState } from "react";

interface AppContextInterface {
    isLoggedIn: boolean,
    setLogin: (isLoggedIn: boolean) => void;
    userName: string,
    setUserName: (userName: string) => void;
    token: string,
    setToken: (token: string) => void;
}

export const Context = createContext<AppContextInterface>({} as AppContextInterface);

export const Provider = (props: any) => {

    // Use State to keep the values
    const [isLoggedIn, setLogin] = useState(false);
    const [userName, setUserName] = useState("");
    const [token, setToken] = useState("");

    // Make the context object:
    const appContext = {
        isLoggedIn,
        setLogin,
        userName,
        setUserName,
        token,
        setToken
    };

    // pass the value in provider and return
    return <Context.Provider value={appContext}>{props.children}</Context.Provider>
};

export const { Consumer } = Context;
