export const CodeSnippet1 = `import React from "react";

const Question1 = () => {
    const watchlist = [
        {
            id: 1,
            title: "The Godfather",
            director: "Francis Ford Coppola",
        },
        {
            id: 2,
            title: "The Shawshank Redemption",
            director: "Frank Darabont",
        },
        {
            id: 3,
            title: "The Dark Knight",
            director: "Christopher Nolan",
        },
        {
            id: 4,
            title: "Pulp Fiction",
            director: "Quentin Tarantino",
        },
        {
            id: 5,
            title: "The Lord of the Rings: The Fellowship of the Ring",
            director: "Peter Jackson",
        },
    ];

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
