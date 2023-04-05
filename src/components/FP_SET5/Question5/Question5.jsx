import React from "react";

const Question5 = ({ cookbook }) => {
    return (
        <div className="OutputBox Question2">
            <ul>
                {cookbook.map((recipe, index) => {
                    return (
                        <>
                            <li key={index}>
                                <p> {recipe.recipeName}</p>
                                <p> {recipe.creatorName}</p>
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
};

export default Question5;
