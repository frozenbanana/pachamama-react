import React from "react";
import { useHttp } from "../hooks/http";
import { ProductCard } from "../components/ProductCard";
import { CardDeck } from "react-bootstrap";

export const Gallery = (props) => {
    const [isLoading, products] = useHttp(
        "http://localhost:3000/api/products",
        []
    );
    let content = <p>Loading...</p>;
    if (products && !isLoading) {
        content = (
            <CardDeck>
                {" "}
                {products.map((product, index) => {
                    return <ProductCard key={index} product={product} />;
                })}
            </CardDeck>
        );
    }
    return content;
};
