import {ThirdQuestionPresentation} from "../presentation/ThirdQuestion";
import {useEffect, useState} from "react";
import axios from "axios";
import {SWAPI} from "../env";
import {getRandom} from "../shared";
import {Species} from "../type/species";

const speciesInitialState: Species = {
    average_height: null,
    classification: null,
    eye_colors: null,
    hair_colors: null,
    homeworld: null,
    language: null,
    name: null
}

export const ThirdQuestion = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [answers, setAnswers] = useState([""]);
    const [species,setSpecies] = useState(speciesInitialState);
    const [homeworld, setHomeworld] = useState(null);
    const onAnswerSubmitted = (language: string):void => {
        console.log("fire!!")
        if (language == species.language) {
            setIsCorrect(true);
            setIsAnswered(true);
        } else {
            setIsCorrect(false);
            setIsAnswered(true);
        }
    }
    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                const species = await axios.get(SWAPI.species());
                const targetSpecies = getRandom(0, species.data.results.length - 1);
                const homeworldResponse = await axios
                        .get(species.data.results[targetSpecies].homeworld);
                setSpecies({
                    average_height: species.data.results[targetSpecies].average_height,
                    classification: species.data.results[targetSpecies].classification,
                    eye_colors: species.data.results[targetSpecies].eye_colors,
                    hair_colors: species.data.results[targetSpecies].hair_colors,
                    homeworld: species.data.results[targetSpecies].homeworld ? homeworldResponse.data.name : null,
                    language: species.data.results[targetSpecies].language,
                    name: species.data.results[targetSpecies].name
                })
                setAnswers(species.data.results
                    .map((species: {language: string}) => species.language ));
                setIsLoading(false);
            } catch (e) {
                console.error(e);
                setIsLoading(false);
            }
        })()
    }, [])
    return <ThirdQuestionPresentation
        answers={answers}
        isAnswered={isAnswered}
        isLoading={isLoading}
        isCorrect={isCorrect}
        species={species}
        onAnswerSubmitted={onAnswerSubmitted} />
}
