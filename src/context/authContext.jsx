/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
    // GET REGISTER FORM INPUTS VALUE
    const [registerForm, setRegisterForm] = useState(null);
    const [mode, setMode] = useState("light");

    // CHANGE PAGE MODE
    function changeMode() {
        if (mode === "light") {
            setMode("dark");
        } else {
            setMode("light");
        }
    }

    return (
        <AuthContext.Provider
            value={{
                registerForm,
                setRegisterForm,
                changeMode,
                mode,
            }}
        >

            {children}

        </AuthContext.Provider>
    );
}

function useAuthContex() {
    return useContext(AuthContext);
}

export { AuthProvider, AuthContext, useAuthContex };
