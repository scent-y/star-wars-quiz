import {People} from "../../type/people";
import {DateTime} from "luxon";
import React from "react";
import {Loading} from "../../components/Loading/Loading";
import {PATH_NAME} from "../../routes";
import {Link} from "react-router-dom";

interface SecondQuestionProps {
    people: People | null,
    answers: string[] | null,
    onAnswerSubmitted: (homeWorld: string) => void;
    isAnswered: boolean;
    isCorrect: boolean;
    isLoading: boolean;
}
export const SecondQuestionPresentation = (props: SecondQuestionProps) => {
    const beforeAnswer = (
        props.answers && props.people && (
            <>
                <div>Where is {props.people.name}'s homeworld?</div>
                <div>
                    {props.answers.map((homeworld, index) => (
                        <button key={index} onClick={() => {props.onAnswerSubmitted(homeworld)}}>
                            {homeworld}
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
                <div>{props.people?.name}</div>
                <div>homeworld: {props.people?.home_world}</div>
                <div>birth year: {props.people?.birth_year}</div>
                <div>gender: {props.people?.gender}</div>
                <div>height: {props.people?.height}cm</div>
            </div>
            <Link to={PATH_NAME.thirdQuestion()}>next!</Link>
        </>
    )
    if (props.isLoading) {
        return <Loading />
    }
    return props.isAnswered ? afterAnswer : beforeAnswer
}
