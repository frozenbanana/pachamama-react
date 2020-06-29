import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import aboutImg from "../assets/about-img.jpg";
export const About = (props) => {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <Row className="text-center">
            <Col>
                <Image src={aboutImg} width="400" />
            </Col>
            <Col>
                <h2>About</h2>
                <p>
                    {" "}
                    I am a 22 year old female, born and raised in Sweden. My
                    life is pretty average. I have a regular job, I'm in a happy
                    relationship and I have a hobby that happens to be painting
                    with vibrant colors. I do not use any hallucinogens myself,
                    even though I am of the opinion psychedelics has many
                    positive effects to alot of people. And yes, i do shower.
                </p>
            </Col>
        </Row>
    );
};
