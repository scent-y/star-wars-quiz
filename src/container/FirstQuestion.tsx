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
                const films = await axios.get(`${SWAPI.film()}`);
                setAnswers(films.data.results
                    .map((film: { release_date: string })  => DateTime.fromISO(film.release_date)));
                setFilm({
                    director: films.data.results[targetFilm].director,
                    title: films.data.results[targetFilm].title,
                    release_date: DateTime.fromISO(films.data.results[targetFilm].release_date),
                    episode_id: films.data.results[targetFilm].episode_id,
                    producer: films.data.results[targetFilm].producer,
                    opening_crawl: films.data.results[targetFilm].opening_crawl
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
