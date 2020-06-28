import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Shop } from "./components/Shop";

import "./App.css";

// In the code below, BlogPost is used as both a <Route component>
// and in a <Route render> function. In both cases, it receives a `match`
// prop, which it uses to get the URL params.
// function BlogPost({ match }) {
//     let { slug } = match.params;
//     // ...
// }

function App() {
    return (
        <Router>
            <div>
                <NavigationBar title="Maija Papazi" />
                <Switch>
                    {/* Using the `component` prop */}
                    <Route path="/" component={Gallery} exact />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/about" component={About} />

                    {/* Using the `render` prop */}
                    {/* <Route
                            path="/products/:id"
                            render={({ match }) => <BlogPost match={match} />}
                        /> */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
