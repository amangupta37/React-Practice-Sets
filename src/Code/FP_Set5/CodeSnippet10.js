export const CodeSnippet10 = `import React from "react";

const Question10 = ({ recipes }) => {
    return (
        <div className="OutputBox Question9">
            <ul>
                {recipes.map((recipe, index) => {
                    return (
                        <>
                            <div key={index}>
                                <h3>
                                    <center>
                                        {index + 1}. {recipe.name}
                                    </center>
                                </h3>

                                <h3>Ingredients:</h3>
                                <ul>
                                    {recipe.ingredients.map((ingredient) => (
                                        <li>{ingredient}</li>
                                    ))}
                                </ul>

                                <h3>Instructions:</h3>
                                {recipe.instructions.map(
                                    (instruction, index) => (
                                        <p key={index}>{instruction}</p>
                                    )
                                )}
                            </div>
                        </>
                    );
                })}
            </ul>
        </div>
    );
};

export default Question10;
`;
