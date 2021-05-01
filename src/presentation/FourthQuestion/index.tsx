import { Species } from "../../type/species";
import React from "react";
import { Loading } from "../../components/Loading/Loading";

interface FourthQuestionPresentationProps {
    answers: (string | null)[] | null;
    onAnswerSubmitted: (homeworld: (string | null)) => void;
    isAnswered: boolean;
    isCorrect: boolean;
    isLoading: boolean;
    species: Species | null;
}


export const FourthQuestionPresentation = (props: FourthQuestionPresentationProps) => {
    const beforeAnsewr = (
        props.answers && props.species && (
            <>
                <div>Where is {props.species.name}'s hometown?</div>
                <div>
                    {props.answers.map((homeworld, index) => (
                            <button key={index} onClick={() => {props.onAnswerSubmitted(homeworld)}}>
                                {homeworld != null ? homeworld : "unknown"}
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
                <div>{props.species?.name}</div>
                <div>language: {props.species?.language}</div>
                <div>homeworld: {props.species?.homeworld != null ?
                                props.species.homeworld : "unknown"}</div>
                <div>average height: {props.species?.average_height}</div>
                <div>classification: {props.species?.classification}</div>
                <div>eye color: {props.species?.eye_colors}</div>
                <div>hair color: {props.species?.hair_colors}</div>
            </div>
        </>
    )
    if (props.isLoading) {
        return <Loading />
    }
    return props.isAnswered ? afterAnswer : beforeAnsewr;
}
