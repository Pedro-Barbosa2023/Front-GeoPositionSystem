import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";


const Headers = (args) => {
  const [theme, setTheme] = useState(false);

  return (
    <div>
      <>
        <Navbar className="my-2" color="black" dark >
          <NavbarBrand href="/">
            <img
              alt="Bem-Vindo ao GPS Locator"
              src="../../img/logo.svg"
              style={{
                height: 40,
                width: 40,
              }}
            />
          </NavbarBrand>
        </Navbar>
      </>
    </div>
  );
};
export default Headers;
