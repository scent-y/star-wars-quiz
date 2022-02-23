import {ThirdQuestionPresentation} from "../presentation/ThirdQuestion";
import {useEffect, useState} from "react";
import axios from "axios";
import {SWAPI} from "../env";
import {getRandom} from "../shared";
import {Species} from "../type/species";
import { resultActions } from "../store/result";
import { useDispatch } from "react-redux";

const speciesInitialState: Species = {
    average_height: null,
    classification: null,
    eye_colors: null,
    hair_colors: null,
    homeworld: null,
    language: null,
    name: null
}
const targetSpecies = getRandom(0,8);

export const ThirdQuestion = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [answers, setAnswers] = useState([""]);
    const [species,setSpecies] = useState(speciesInitialState);
    const onAnswerSubmitted = (language: string):void => {
        if (language == species.language) {
            dispatch(resultActions.correct());
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
                const speciesResponse = await axios.get(SWAPI.species());
                let speciesHomeworld: (string | null) = null;
                if (speciesResponse.data.results[targetSpecies].homeworld) {
                    const homeworldResponse = await axios
                        .get(speciesResponse.data.results[targetSpecies].homeworld);
                    speciesHomeworld = homeworldResponse.data.name;
                }
                setSpecies({
                    average_height: speciesResponse.data.results[targetSpecies].average_height,
                    classification: speciesResponse.data.results[targetSpecies].classification,
                    eye_colors: speciesResponse.data.results[targetSpecies].eye_colors,
                    hair_colors: speciesResponse.data.results[targetSpecies].hair_colors,
                    homeworld: speciesResponse.data.results[targetSpecies].homeworld ? speciesHomeworld : null,
                    language: speciesResponse.data.results[targetSpecies].language,
                    name: speciesResponse.data.results[targetSpecies].name
                })
                const languageArray = speciesResponse.data.results
                    .map((species: {language: string}) => species.language);
                setAnswers(Array.from(new Set(languageArray)));
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
