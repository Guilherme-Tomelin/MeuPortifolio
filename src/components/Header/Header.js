import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projetos
          </NavLink>
          <NavLink className="menu-item" to="about">
            Sobre
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contato
          </NavLink>
        </NavMenu>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
