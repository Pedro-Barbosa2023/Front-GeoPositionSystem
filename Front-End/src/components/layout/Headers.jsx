import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
} from "reactstrap";

const Headers = (args) => {
  //const [theme, setTheme] = useState(false);

  return (
    <div>
      <>
        <Navbar className="navBar" dark fixed="top" >
          <NavbarBrand href="/">
            <img
              alt="GPS Locator"
              src="/images/logo.png"
              style={{
                height: 40,
                width: 40,
              }}
            />
          GeoPosition System
          </NavbarBrand>
        </Navbar>
      </>
    </div>
  );
};
export default Headers;
