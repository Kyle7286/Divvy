import React, { createContext, useReducer, useContext } from "react";
import API from "../utils/API"

const UserContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "login":
            return { user: 1 };
        case "logout":
            return { user: null };
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }
};


const UserProvider = ({ value = 0, ...props }) => {
    const [state, dispatch] = useReducer(reducer, { user: value });

    return (
        <UserContext.Provider value={[state, dispatch]} >;
            {props.children}
        </UserContext.Provider>
    )
};

const useUserContext = () => {
    return useContext(UserContext);
};

export { UserProvider, useUserContext };
