import { SecondQuestionPresentation } from "../presentation/SecondQuestion";
import {useEffect, useState} from "react";
import axios from "axios";
import { SWAPI } from "../env";
import {getRandom, shuffleArray} from "../shared";
import { People } from "../type/people";

const peopleInitialState: People = {
    birth_year: null,
    gender: null,
    height: null,
    home_world: null,
    name: null
}

export const SecondQuestion = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [people, setPeople] = useState(peopleInitialState);
    const [answers, setAnswers] = useState([""]);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const onAnswerSubmitted = (homeWorld: string) => {
        if (homeWorld == people?.home_world) {
            setIsCorrect(true);
            setIsAnswered(true);
        } else {
            setIsCorrect(false);
            setIsAnswered(true);
        }
    }
    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const people = await axios.get(`${SWAPI.people()}${getRandom(0,81)}`);
                const homeWorld = await axios.get(people.data.homeworld);
                const planets = await axios.get(SWAPI.planets());
                const planetNameList: string[] = planets.data.results
                    .filter((planet: {name: string}) => planet.name != homeWorld.data.name)
                    .map((planet: { name: string }) => planet.name);
                planetNameList.push(homeWorld.data.name);
                setPeople({
                    birth_year: people.data.birth_year,
                    gender: people.data.gender,
                    height: people.data.height,
                    home_world: homeWorld.data.name,
                    name: people.data.name
                })
                setAnswers(planetNameList);
                setIsLoading(false);
            } catch (e) {
                console.error(e);
                setIsLoading(false);
            }
        })()
    }, [])

    return <SecondQuestionPresentation
        people={people}
        answers={shuffleArray(answers)}
        isLoading={isLoading}
        isCorrect={isCorrect}
        isAnswered={isAnswered}
        onAnswerSubmitted={onAnswerSubmitted}/>

}
