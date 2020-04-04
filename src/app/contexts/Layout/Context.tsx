import React, { createContext, useState } from "react";

interface AppContextInterface {
    isLoggedIn: boolean,
    setLogin: (isLoggedIn: boolean) => void;
    userName: string,
    setUserName: (userName: string) => void;
}

export const Context = createContext<AppContextInterface>({} as AppContextInterface);

export const Provider = (props: any) => {
    // Initial values are obtained from the props
    // const {
    //     children
    // } = props;

    // Use State to keep the values
    const [isLoggedIn, setLogin] = useState(false);
    const [userName, setUserName] = useState("");

    //   const addNewUser = userName => {
    //     const newUser = { id: new Date().getTime().toString(), name: userName };
    //     setUsers(users.concat([newUser]));
    //   };

    // Make the context object:
    const appContext = {
        isLoggedIn,
        setLogin,
        userName,
        setUserName
    };

    // pass the value in provider and return
    // return <AppContext.Provider value={ appContext }> { props.children } </Context.Provider>;
    return <Context.Provider value={appContext}>{props.children}</Context.Provider>
};

export const { Consumer } = Context;
