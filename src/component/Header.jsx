import React from "react";
import { Button, Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div className="">
      <Navbar fluid rounded>
        <Navbar.Brand href="">
          <span className="self-center ms-10 font-extrabold whitespace-nowrap text-xl font-semibold dark:text-white">
           THE MOVIE CHANNEL
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Login / Register</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/service">Services</Navbar.Link>
          <Navbar.Link href="/price">Pricing</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
