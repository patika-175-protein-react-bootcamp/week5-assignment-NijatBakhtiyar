import React from "react";
import PatikaInfo from "../components/patikaInfo";
import Routers from "../routes/routes";
import "../styles/authForms.scss";
import {useAuthContex} from "../context/authContext";

function AuthForms() {
  // GET PAGE MODE FROM CONTEXT
  const { mode } = useAuthContex();

  return (
    <div className={`auth-forms ${mode}`}>
      <PatikaInfo />
      <Routers />
    </div>
  );
}

export default AuthForms;
