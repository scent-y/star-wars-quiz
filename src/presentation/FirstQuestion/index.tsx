import React from "react";
import { Film } from "../../type/film";
import { Loading } from "../../components/Loading/Loading";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";
import { PATH_NAME } from "../../routes";

interface FirstQuestionPresentation {
    film: Film | null;
    answers: DateTime[] | null;
    onAnswerSubmitted: (date: DateTime) => void;
    isAnswered: boolean;
    isCorrect: boolean;
    isLoading: boolean;
}

export const FirstQuestionPresentation = (props: FirstQuestionPresentation) => {
    const beforeAnswer = (
        props.film && props.answers && (
            <>
                <div>When is the release date of {props.film.title}?</div>
                <div>
                    {props.answers.map((date, index) => (
                        <button key={index} onClick={() => {props.onAnswerSubmitted(date)}}>
                            {date.toISODate()}
                        </button>
                    ))}
                </div>
            </>
        )
    )
    const afterAnswer = (
        <>
            {props.isCorrect ? <p>Great! That is correct answer!</p> : <p>Unfortunately, that is the wrong answer!</p>}
            <div>
                <div>{props.film?.title}</div>
                <div>episode: {props.film?.episode_id}</div>
                <div>director: {props.film?.director}</div>
                <div>producer: {props.film?.producer}</div>
                <div>release date: {props.film?.release_date?.toISODate()}</div>
                <div>opening: {props.film?.opening_crawl}</div>
            </div>
            <Link to={PATH_NAME.secondQuestion()}>next!</Link>
        </>
    )
    if (props.isLoading) {
        return <Loading />
    }
    return props.isAnswered ? afterAnswer : beforeAnswer;
}
