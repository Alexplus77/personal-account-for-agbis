import React from "react";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.headerContainer}>
      <h2 className={s.logo}>My personal account</h2>
    </header>
  );
};
