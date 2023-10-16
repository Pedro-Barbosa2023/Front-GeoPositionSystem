import React, { useState } from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";

const Headers = (args) => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    if (theme === false) {
      document.body.style.backgroundColor = '#696969';
      setTheme(true);
    } else {
      document.body.style.backgroundColor = '#D3D3D3';
      setTheme(false);
    }
  };

  return (
    <div>
      <Navbar className="navBar" dark fixed="top">
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
        <Button outline onClick={toggleTheme}>Tema</Button>
      </Navbar>
    </div>
  );
};

export default Headers;