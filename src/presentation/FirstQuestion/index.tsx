import React from "react";
import { Film } from "../../type/film";
import { Loading } from "../../components/Loading/Loading";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";
import { PATH_NAME } from "../../routes";
import { AnswerResult } from "../../components/AnswerResult/AnswerResult";

interface FirstQuestionPresentation {
    film: Film | null;
    answers: DateTime[] | null;
    onAnswerSubmitted: (date: DateTime) => void;
    isAnswered: boolean;
    isCorrect: boolean;
    isLoading: boolean;
}

export const FirstQuestionPresentation = (props: FirstQuestionPresentation) => {
    const beforeAnswer = (
        props.film && props.answers && (
            <>
                <p>Q1: When is the release date of {props.film.title}?</p>
                {props.answers.map((date, index) => (
                    <button className="block bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" key={index} onClick={() => {props.onAnswerSubmitted(date)}}>
                        {date.toISODate()}
                    </button>
                ))}
            </>
        )
    )
    const afterAnswer = (
        <>
            <AnswerResult isCorrect={props.isCorrect} />
            <ul className="list-disc space-y-2">
                <li className="flex items-start">
                    <code className="text-sm font-bold text-gray-900">{props.film?.title}</code>
                </li>
                <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"/>
                      </svg>
                    </span>
                    <p className="ml-2">
                        episode：
                        <code className="text-sm font-bold text-gray-900">{props.film?.episode_id}</code>
                    </p>
                </li>
                <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"/>
                      </svg>
                    </span>
                    <p className="ml-2">
                        director：
                        <code className="text-sm font-bold text-gray-900">{props.film?.director}</code>
                    </p>
                </li>
                <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"/>
                      </svg>
                    </span>
                    <p className="ml-2">
                        producer：
                        <code className="text-sm font-bold text-gray-900">{props.film?.producer}</code>
                    </p>
                </li>
                <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"/>
                      </svg>
                    </span>
                    <p className="ml-2">
                        release date：
                        <code className="text-sm font-bold text-gray-900">{props.film?.release_date?.toISODate()}</code>
                    </p>
                </li>
                <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"/>
                      </svg>
                    </span>
                    <p className="ml-2">
                        opening：
                        <code className="text-sm font-bold text-gray-900">{props.film?.opening_crawl}</code>
                    </p>
                </li>
            </ul>
            <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>
                    <Link to={PATH_NAME.secondQuestion()}>next!</Link>
                </p>
            </div>
        </>
    )
    if (props.isLoading) {
        return <Loading />
    }
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                {props.isAnswered ? afterAnswer : beforeAnswer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
