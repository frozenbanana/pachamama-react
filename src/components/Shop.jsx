import React from "react";
import { useHttp } from "../hooks/http";
import { NavigationBar } from "./NavigationBar";
import { ProductCard } from "./ProductCard";
import { CardDeck } from "react-bootstrap";

export const Shop = (props) => {
    const [isLoading, products] = useHttp(
        "http://localhost:3000/api/products",
        []
    );

    let content = <p>Loading content</p>;
    if (!isLoading && products && products.length > 0) {
        // Get unqiue categories
        const uniqueCategories = Array.prototype.concat(
            ["All"],
            Array.from(new Set(products.map((product) => product.category)))
        );

        console.log("unqiue", uniqueCategories);
        const categoryLinks = uniqueCategories
            ? uniqueCategories.map((category) => ({
                  name: category,
                  url: `/products?category=${category}`,
              }))
            : [];

        content = (
            <>
                <NavigationBar links={categoryLinks} noBrand={true} />
                <CardDeck>
                    {" "}
                    {products.map((product, index) => {
                        return <ProductCard key={index} product={product} />;
                    })}
                </CardDeck>
            </>
        );
        console.log("content", content);
    }

    return content;
};
