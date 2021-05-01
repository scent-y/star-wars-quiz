import { Starship } from "../../type/starship";
import React, { useState } from "react";
import { Loading } from "../../components/Loading/Loading";

interface FifthQuestionPresentationProps {
    isAnswered: boolean;
    isCorrect: boolean;
    isLoading: boolean;
    starship: Starship | null;
    onSubmitStarshipName: (name: string) => void
}

export const FifthQuestionPresentation = (props: FifthQuestionPresentationProps) => {
    const [inputName, setInputName] = useState("");
    // @ts-ignore
    const handleInput = (event) => {
        setInputName(event.target.value);
    }
    const beforeAnswer = (
        props.starship && (
            <>
                <div>What is the name of this starship?</div>
                <div>
                    <div>model: {props.starship.model}</div>
                    <div>manufacturer: {props.starship.manufacturer}</div>
                    <div>crew: {props.starship.crew}</div>
                    <div>passengers: {props.starship.passengers}</div>
                    <div>pilots:
                    {props.starship.pilots ? (
                        props.starship.pilots?.map((pilot, index) => (
                            <span key={index}>pilot</span>
                        ))
                    ) : <span>No pilot</span>}
                    </div>
                    <div>starship_class: {props.starship.starship_class}</div>
                    <form>
                        <label>Enter starship name:
                            <input type="text" id="starshipName" onInput={handleInput}/>
                            <button onClick={() => props.onSubmitStarshipName(inputName)}>submit</button>
                        </label>
                    </form>
                </div>
            </>
        )
    )
    const afterAnswer = (
        <>
            {props.isCorrect ? <p>Great! That is correct answer!</p> : <p>Unfortunately, that is the wrong answer!</p>}
        </>
    )
    if (props.isLoading) {
        return <Loading />
    }
    return props.isAnswered ? afterAnswer : beforeAnswer;
}
