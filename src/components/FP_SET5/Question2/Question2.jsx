import React from "react";

const Question2 = ({ products }) => {
    return (
        <div className="OutputBox Question2">
            <ul>
                {products.map((product, index) => {
                    return (
                        <>
                            <li key={index}>
                                <p> {product.category}</p>
                                <p>Name: {product.name}</p>
                                <p>Price: $ {product.price}</p>
                            </li>
                            <br />
                        </>
                    );
                })}
            </ul>
        </div>
    );
};

export default Question2;
