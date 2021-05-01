import { FifthQuestionPresentation } from "../presentation/FifthQuestion";
import { useEffect, useState } from "react";
import axios from "axios";
import { SWAPI } from "../env";
import { getRandom } from "../shared";
import { Starship } from "../type/starship";
import { resultActions } from "../store/result";
import { useDispatch } from "react-redux";

const starshipInitialState: Starship = {
    crew: null,
    manufacturer: null,
    model: null,
    name: null,
    passengers: null,
    pilots: null,
    starship_class: null
}

export const FifthQuestion = () => {
    const dispatch = useDispatch();
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [starship, setStarship] = useState(starshipInitialState);
    const onSubmitStarshipName = (inputName: string) => {
        if (inputName == starship.name) {
            dispatch(resultActions.correct())
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
                const starshipResponse = await axios.get(`${SWAPI.starships()}${getRandom(9,13)}`);
                setStarship({
                    crew: starshipResponse.data.crew,
                    manufacturer: starshipResponse.data.manufacturer,
                    model: starshipResponse.data.model,
                    name: starshipResponse.data.name,
                    passengers: starshipResponse.data.passengers,
                    pilots: starshipResponse.data.pilots.length > 0 ?
                        starshipResponse.data.pilots : null,
                    starship_class: starshipResponse.data.starship_class
                })
                setIsLoading(false);
            } catch (e) {
                console.error(e)
                setIsLoading(false);
            }
        })()
    },[])
    return <FifthQuestionPresentation
            onSubmitStarshipName={onSubmitStarshipName}
            starship={starship}
            isLoading={isLoading}
            isAnswered={isAnswered}
            isCorrect={isCorrect}/>
}
