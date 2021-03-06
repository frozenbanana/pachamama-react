import React from "react";
import { Card } from "react-bootstrap";

export const ProductCard = (props) => {
    const cardStyle = {
        minWidth: "300px",
        marginBottom: "2%" /* (100-32*3)/2 */,
        backgroundColor: "transparent",
        textAlign: "center",
    };

    return (
        <Card style={cardStyle}>
            <Card.Img top="true" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title>{props.product.title}</Card.Title>
                <Card.Text>{props.product.description}</Card.Text>
                <Card.Text className="text-muted">
                    {props.product.price} SEK
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
