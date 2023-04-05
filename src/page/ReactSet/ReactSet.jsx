import React, { useState } from "react";
import {
    CopyBlock,
    dracula,
    github,
    a11yDark,
    atomOneDark,
    solarizedDark,
} from "react-code-blocks";
import { FP_Set5 as QuestionAndAnswers } from "../../Data";

const ReactSet = () => {
    const language = "jsx";
    const lineNumbers = true;
    return (
        <div className="ReactSet">
            {QuestionAndAnswers.map((question, index) => {
                return (
                    <section className="QuestionSection" key={index}>
                        <div className="QuestionSection--Question">
                            <span> Q{index + 1}. </span>
                            {question.question}
                        </div>

                        {/* <div className="QuestionSection--Code">
                            {question?.code && (
                                <CopyBlock
                                    language={language}
                                    text={question?.code}
                                    showLineNumbers={lineNumbers}
                                    theme={atomOneDark}
                                    wrapLines={true}
                                    codeBlock
                                />
                            )}
                        </div> */}
                        <div className="QuestionSection--Solution">
                            <div className="Output">
                                <div className="label--output"># Output</div>
                                {question.output}
                            </div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default ReactSet;
