export const CodeSnippet1 = `import React from "react";

const Question1 = ({ watchlist }) => {
    return (
        <div className="OutputBox Question1">
            <ul>
                {watchlist.map((movie, index) => {
                    return (
                        <li key={index}>
                            <p>{movie.title}</p>
                            <p>{movie.director}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Question1;
`;
