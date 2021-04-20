import React from "react";

interface FirstQuestionPresentation {
    film: {title: string, release_date: Date};
    answers: Date[];
    onAnswerSubmitted: (date: Date) => void;
    isAnswered: boolean;
    isCorrect: boolean;
}

export const FirstQuestionPresentation = (props: FirstQuestionPresentation) => {
    const beforeAnswer = (
        <>
            <div>{props.film.title} の公開日はいつですか？</div>
            <div>
                {props.answers.map((date, index) => (
                    <button key={index} onClick={() => {props.onAnswerSubmitted(date)}}>
                        {date.toISOString()}
                    </button>
                ))}
            </div>
        </>
    )
    const afterAnswer = (
        <>
            {/*TODO Filmに関する情報を表示*/}
            {props.isCorrect ? <p>おめでとうございます！正解です</p> : <p>残念！不正解です</p>}
            次のクイズへ
        </>
    )
    return props.isAnswered ? afterAnswer : beforeAnswer;
}
