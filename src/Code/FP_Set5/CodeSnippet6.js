export const CodeSnippet6 = `import React from "react";

const Question6 = ({ cars }) => {
    return (
        <div className="OutputBox Question6">
            <ul>
                {cars.map((car, index) => {
                    return (
                        <>
                            <li key={index}>
                                <p> {car.make}</p>
                                <p> {car.modal}</p>
                                <p> {car.price}</p>
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
};

export default Question6;
`;
