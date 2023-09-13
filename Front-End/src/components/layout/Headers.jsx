import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
 
} from "reactstrap";

const Headers = (args) => {
  const [theme, setTheme] = useState(false);

  return (
    <div>
      <>
        <Navbar className="navBar" dark >
          <NavbarBrand href="/">
            <img
              alt="GPS Locator"
              src="/images/logo.png"
              style={{
                height: 40,
                width: 40,
              }}
            />
          </NavbarBrand>
          <h2 className="textNavBar" color="white">GeoPosition System</h2>
        </Navbar>
      </>
    </div>
  );
};
export default Headers;
