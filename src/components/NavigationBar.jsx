import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export const NavigationBar = (props) => {
    const navbarStyle = {
        backgroundColor: "black",
        color: "white",
    };

    return (
        <Navbar
            style={navbarStyle}
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
        >
            {props.noBrand ? (
                ""
            ) : (
                <Link to="/">
                    <Navbar.Brand>{props.title}</Navbar.Brand>
                </Link>
            )}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {props.links
                        ? props.links.map((lk, index) => (
                              <Nav.Link key={index} as={Link} to={lk.url}>
                                  {lk.name}
                              </Nav.Link>
                          ))
                        : ""}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
