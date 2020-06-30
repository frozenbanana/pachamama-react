import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export const NavigationBar = (props) => {
    const navbarStyle = {
        backgroundColor: "black",
        color: "white",
    };
    console.log(props.title);

    let content = <p>Loading...</p>;
    if (props.links) {
        content = (
            <>
                <h1>{props.title}</h1>
                <Navbar
                    style={navbarStyle}
                    collapseOnSelect
                    expand="lg"
                    bg="dark"
                    variant="dark"
                >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            {props.links
                                ? props.links.map((lk, index) => (
                                      <Nav.Link
                                          key={index}
                                          as={Link}
                                          to={lk.url}
                                      >
                                          {lk.name}
                                      </Nav.Link>
                                  ))
                                : ""}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }

    return content;
};
