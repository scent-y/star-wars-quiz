import {Species} from "../../type/species";
import React from "react";
import {Loading} from "../../components/Loading/Loading";

interface ThirdQuestionPresentationProps {
    answers: string[] | null;
    onAnswerSubmitted: (language: string) => void;
    isAnswered: boolean;
    isCorrect: boolean;
    isLoading: boolean;
    species: Species | null;
}

export const ThirdQuestionPresentation = (props: ThirdQuestionPresentationProps) => {
    console.log(props.species?.homeworld);
    const beforeAnswer = (
        props.answers && props.species && (
            <>
                <div>What is the language commonly spoken by {props.species.name} ?</div>
                <div>
                    {props.answers.map((language, index) => (
                        <button key={index} onClick={() => {props.onAnswerSubmitted(language)}}>
                            {language == "n/a" ? "unknown" : language}
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
                {props.species?.homeworld && (
                    <div>homeworld: {props.species?.homeworld}</div>
                )}
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
    return props.isAnswered ? afterAnswer : beforeAnswer;
}
