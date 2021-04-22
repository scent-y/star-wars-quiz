import React, {useEffect, useState} from "react";
import { FirstQuestionPresentation } from "../presentation/FirstQuestion";
import axios from "axios";
import { SWAPI } from "../env";
import { Film } from "../type/film";
import { DateTime } from "luxon";
import {getRandom} from "../shared";

const filmInitialState: Film = {
    director: null,
    producer: null,
    title: null,
    release_date: null,
    episode_id: null,
    opening_crawl: null
}

const targetFilm: number = getRandom(0,5);

export const FirstQuestion = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [film, setFilm] = useState(filmInitialState);
    const [answers, setAnswers] = useState([]);
    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${SWAPI.film()}`);
                setAnswers(response.data.results
                    .map((list: { release_date: string })  => DateTime.fromISO(list.release_date)));
                setFilm({
                    director: response.data.results[targetFilm].director,
                    title: response.data.results[targetFilm].title,
                    release_date: DateTime.fromISO(response.data.results[targetFilm].release_date),
                    episode_id: response.data.results[targetFilm].episode_id,
                    producer: response.data.results[targetFilm].producer,
                    opening_crawl: response.data.results[targetFilm].opening_crawl
                })
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                console.error(e);
            }
        })()}
    , [])
    const onAnswerSubmitted = (date: DateTime):void => {
        if (date.year === film.release_date?.year) {
            setIsCorrect(true);
            setIsAnswered(true);
        } else {
            setIsCorrect(false);
            setIsAnswered(true);
        }
    }
    return <FirstQuestionPresentation
                isLoading={isLoading}
                onAnswerSubmitted={onAnswerSubmitted}
                film={film}
                answers={answers}
                isAnswered={isAnswered}
                isCorrect={isCorrect}/>
}
