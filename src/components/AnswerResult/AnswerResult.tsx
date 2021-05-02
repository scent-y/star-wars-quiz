import React from "react";

interface AnswerResultProps {
    isCorrect: boolean,
    message?: string
}

export const AnswerResult = (props: AnswerResultProps) => {
    return (
        <>
            {props.isCorrect ?
                <p className="text-yellow-600">Great! That is correct answer!</p> :
                <p className="text-blue-900">Unfortunately, that is the wrong answer... <br />{props.message}</p>
            }
        </>
    )
}
