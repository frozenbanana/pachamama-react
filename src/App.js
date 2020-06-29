import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Shop } from "./components/Shop";
import { Contact } from "./components/Contact";
import { Container } from "react-bootstrap";
import "./css/app.css";

// In the code below, BlogPost is used as both a <Route component>
// and in a <Route render> function. In both cases, it receives a `match`
// prop, which it uses to get the URL params.
// function BlogPost({ match }) {
//     let { slug } = match.params;
//     // ...
// }

const navLinks = [
    { name: "Gallery", url: "/gallery" },
    { name: "Shop", url: "/shop" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
];
function App() {
    return (
        <Router>
            <div>
                <NavigationBar title="Maija Papazi" links={navLinks} />
                <Container>
                    <Switch>
                        {/* Using the `component` prop */}
                        <Route path="/" component={Gallery} exact />
                        <Route path={navLinks[0].url} component={Gallery} />
                        <Route path={navLinks[1].url} component={Shop} />
                        <Route path={navLinks[2].url} component={About} />
                        <Route path={navLinks[3].url} component={Contact} />

                        {/* Using the `render` prop */}
                        {/* <Route
                            path="/products/:id"
                            render={({ match }) => <BlogPost match={match} />}
                        /> */}
                    </Switch>
                </Container>
            </div>
        </Router>
    );
}

export default App;
