export const CodeSnippet9 = `import React from "react";

const Question9 = ({ products }) => {
    return (
        <div className="OutputBox Question9">
            <ul>
                {products.map((product, index) => {
                    return (
                        <>
                            <li key={index}>
                                <p> {product.name}</p>
                                <p> {product.price}</p>
                                <p> {product.category}</p>
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
};

export default Question9;
`;
