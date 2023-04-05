import React from "react";

const Question8 = ({ movies }) => {
    return (
        <div className="OutputBox Question8">
            <ul>
                {movies.map((movie, index) => {
                    return (
                        <>
                            <li key={index}>
                                <p> {movie.title}</p>
                                <p> {movie.director}</p>
                                <p> {movie.runtime}</p>
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
};

export default Question8;
