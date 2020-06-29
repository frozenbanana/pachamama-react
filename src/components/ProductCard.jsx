import React from "react";
import { Card } from "react-bootstrap";

export const ProductCard = (props) => {
    const cardStyle = {
        minWidth: "300px",
        marginBottom: "2%" /* (100-32*3)/2 */,
    };

    return (
        <Card style={cardStyle}>
            <Card.Img top="true" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title>{props.product.title}</Card.Title>
                <Card.Text>{props.product.description}</Card.Text>
                <Card.Footer className="text-muted">
                    {props.product.price} SEK
                </Card.Footer>
            </Card.Body>
        </Card>
    );
};
