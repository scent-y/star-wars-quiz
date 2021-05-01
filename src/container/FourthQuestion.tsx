import { useEffect, useState } from "react";
import { Species } from "../type/species";
import axios from "axios";
import { SWAPI } from "../env";
import { getRandom, shuffleArray } from "../shared";
import { FourthQuestionPresentation } from "../presentation/FourthQuestion";

const speciesInitialState: Species = {
    average_height: null,
    classification: null,
    eye_colors: null,
    hair_colors: null,
    homeworld: null,
    language: null,
    name: null
}

const answersInitialState: (string | null)[] = [null]

export const FourthQuestion = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [answers, setAnswers] = useState(answersInitialState);
    const [species, setSpecies] = useState(speciesInitialState);
    const onAnswerSubmitted = (selectedHomeworld: string | null): void => {
        if (selectedHomeworld == species.homeworld) {
            setIsCorrect(true);
            setIsAnswered(true);
        } else {
            setIsCorrect(false);
            setIsAnswered(true);
        }
    }
    let speciesHomeworld: (string | null) = null;

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const speciesResponse = await axios.get(`${SWAPI.species()}${getRandom(1,36)}`);
                if (speciesResponse.data.homeworld != null) {
                    const response = await axios.get(speciesResponse.data.homeworld);
                    speciesHomeworld = response.data.name;
                }
                const planetResponse = await axios.get(SWAPI.planets());
                const planetNames: (string | null)[] = planetResponse.data.results
                    .filter((planet: {name: string}) => planet.name != speciesHomeworld)
                    .map((planet: {name: string}) => planet.name );
                planetNames.push(speciesHomeworld);
                setAnswers(planetNames);
                shuffleArray(answers);
                setSpecies({
                    average_height: speciesResponse.data.average_height,
                    classification: speciesResponse.data.classification,
                    eye_colors: speciesResponse.data.eye_colors,
                    hair_colors: speciesResponse.data.hair_colors,
                    homeworld: speciesHomeworld,
                    language: speciesResponse.data.language,
                    name: speciesResponse.data.name
                })
                setIsLoading(false);
            } catch (e) {
                console.error(e);
                setIsLoading(false);
            }
        })()

    }, [])

    return <FourthQuestionPresentation
                answers={answers}
                onAnswerSubmitted={onAnswerSubmitted}
                isAnswered={isAnswered}
                isCorrect={isCorrect}
                isLoading={isLoading}
                species={species} />

}
