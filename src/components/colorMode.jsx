import React from "react";
import { useAuthContex } from "../context/authContext";
// GET ICONS
import DarkModeIcon from "../constant/icons/darkModeIcon";
import LightModeIcon from "../constant/icons/lightModeIcon";

function ColorMode() {
    // GET MODE FROM CONTEXT
    const { changeMode, mode } = useAuthContex();

    return (
        <div className="modes" onClick={changeMode}>
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </div>
    );
}

export default ColorMode;
