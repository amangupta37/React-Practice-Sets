import React from "react";

const Question7 = ({ students }) => {
    return (
        <div className="OutputBox Question7">
            <ul>
                {students.map((student, index) => {
                    return (
                        <>
                            <li key={index}>
                                <p> {student.name}</p>
                                <p> {student.grade}</p>
                                <p> {student.attendance}</p>
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
};

export default Question7;
