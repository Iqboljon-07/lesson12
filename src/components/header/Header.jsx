import Button from "@/button/Button";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  return (
    <>
      <header className={`${pathname === "/partner" ? "grey" : ""}`}>
        <div className="header_item">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/product"> Products</NavLink>
          <NavLink to="/user">Users</NavLink>
          <NavLink to="/partner">Partners</NavLink>

          <Button />
        </div>
      </header>
    </>
  );
}

export default Header;
