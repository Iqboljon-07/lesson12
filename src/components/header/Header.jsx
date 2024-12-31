import Button from "@/button/Button";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <>
      <header className={`${pathname === "/partner" ? "grey" : ""}`}>
        <div className="header_item">
          <NavLink to="/">{t("home")} </NavLink>
          <NavLink to="/product">{t("product")} </NavLink>
          <NavLink to="/developer">{t("developer")} </NavLink>
          <NavLink to="/partner">{t("partners")} </NavLink>

          <Button />
        </div>
      </header>
    </>
  );
}

export default Header;
