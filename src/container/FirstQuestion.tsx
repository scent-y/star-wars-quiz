import React, {useEffect, useState} from "react";
import { FirstQuestionPresentation } from "../presentation/FirstQuestion";

export const FirstQuestion = () => {
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    useEffect(() => {
            // TODO swapiにリクエスト
        }
    , [])
    const film:{title: string, release_date: Date} = {title: "A New Hope", release_date: new Date(1977, 4, 25) }
    const onAnswerSubmitted = (date: Date):void => {
        setIsAnswered(true);
        if (date == film.release_date) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }
    const answers: Date[] = [
        film.release_date,
        new Date(film.release_date.getFullYear(), film.release_date.getMonth() - 3, film.release_date.getDate()),
        new Date(film.release_date.getFullYear(), film.release_date.getMonth() + 3, film.release_date.getDate()),
        new Date(film.release_date.getFullYear(), film.release_date.getMonth() + 9, film.release_date.getDate()),
    ]
    const shuffleAnswers: Date[] = answers.sort(() => Math.random() - 0.5);
    return <FirstQuestionPresentation
                onAnswerSubmitted={onAnswerSubmitted}
                film={film} answers={shuffleAnswers}
                isAnswered={isAnswered}
                isCorrect={isCorrect}/>
}
