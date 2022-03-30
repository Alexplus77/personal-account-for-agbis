import React from "react";
import s from "./PersonalAccountPage.module.css";
import { AuthForm } from "components/AuthForm";
import { Header } from "components/Header";
import { useDispatch, useSelector } from "react-redux";

export const PersonalAccountPage = () => {
  return (
    <div className={s.containerPage}>
      <Header />
      <AuthForm />
    </div>
  );
};
