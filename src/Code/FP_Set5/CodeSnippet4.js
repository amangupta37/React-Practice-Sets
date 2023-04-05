export const CodeSnippet4 = `import React from "react";

const Question4 = ({ employees }) => {
    return (
        <div className="OutputBox Question2">
            <ul>
                {employees.map((employee, index) => {
                    return (
                        <>
                            <li key={index}>
                                <p> {employee.name}</p>
                                <p> {employee.department}</p>
                                <p> {employee.salary}</p>
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
};

export default Question4;
`;
