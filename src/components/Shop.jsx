import React, { useState } from "react";
import { useHttp } from "../hooks/http";
// import { NavigationBar } from "./NavigationBar";
import { ProductCard } from "./ProductCard";
import { CardDeck, Row } from "react-bootstrap";

export const Shop = (props) => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [categories, setCategories] = useState(null);
    const [
        isLoading,
        products,
    ] = useHttp(
        "http://localhost:3000/api/products?category=" + selectedCategory,
        [selectedCategory]
    );
    const handleClick = (category) => {
        if (category !== selectedCategory) {
            setSelectedCategory(category);
        }
    };
    let content = <p>Loading content</p>;

    if (!isLoading && products && !categories) {
        const newCategories = Array.prototype.concat(
            ["All"],
            Array.from(new Set(products.map((product) => product.category)))
        );
        console.log("setting new categoires", newCategories);
        setCategories(newCategories);
    }

    if (!isLoading && products && products.length > 0 && categories) {
        content = (
            <>
                <Row>
                    <ul>
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                onClick={() => handleClick(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </Row>
                <CardDeck>
                    {" "}
                    {products.map((product, index) => {
                        return <ProductCard key={index} product={product} />;
                    })}
                </CardDeck>
            </>
        );
    }

    return content;
};
