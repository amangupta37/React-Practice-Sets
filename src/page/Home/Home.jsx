import React, { useState } from "react";
import { CopyBlock, atomOneDark } from "react-code-blocks";
import { FP_Set5 as QuestionAndAnswers } from "../../Data";

const Home = () => {
    const [isJsonDisplay, setIsJsonDisplay] = useState(false);

    const [isDisplayOutput, setIsDisplayOutput] = useState(true);
    const language = "jsx";
    const lineNumbers = true;

    const handleDisplayJsonData = () => {
        setIsJsonDisplay(!isJsonDisplay);
    };

    const handleShowOutput = () => {
        setIsDisplayOutput(!isDisplayOutput);
    };
    return (
        <div className="Home">
            {QuestionAndAnswers.map((question, index) => {
                return (
                    <section className="QuestionSection" key={index}>
                        <div className="QuestionSection--Question">
                            <span> Q{index + 1}. </span>
                            {question.question}
                        </div>

                        <div className="QuestionSection--Code">
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
                        </div>
                        <div className="QuestionSection--Solution">
                            <div className="Output">
                                <div
                                    className="label--output"
                                    onClick={handleShowOutput}
                                >
                                    # Output
                                </div>

                                {isDisplayOutput && (
                                    <React.Fragment>
                                        {question.output}
                                    </React.Fragment>
                                )}
                            </div>
                            <div className="Output">
                                <div
                                    className="label--output josn-title"
                                    onClick={handleDisplayJsonData}
                                >
                                    {`{ }`} <span>JSON</span>
                                </div>
                                {isJsonDisplay && (
                                    <div className="josn-data">
                                        <pre>
                                            {JSON.stringify(
                                                question.json,
                                                null,
                                                2
                                            )}
                                        </pre>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default Home;
