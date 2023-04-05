import React from "react";

const Question3 = ({ books }) => {
    return (
        <div className="OutputBox Question2">
            <ul>
                {books.map((book, index) => {
                    return (
                        <>
                            <li key={index}>
                                <p> {book.title}</p>
                                <p>Title: {book.author}</p>
                                <p>Author: ${book.rating}</p>
                            </li>
                            <br />
                        </>
                    );
                })}
            </ul>
        </div>
    );
};

export default Question3;
