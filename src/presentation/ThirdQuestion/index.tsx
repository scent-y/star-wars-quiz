import { Species } from "../../type/species";
import React from "react";
import { Loading } from "../../components/Loading/Loading";
import { Link } from "react-router-dom";
import { PATH_NAME } from "../../routes";
import { AnswerResult } from "../../components/AnswerResult/AnswerResult";

interface ThirdQuestionPresentationProps {
    answers: string[] | null;
    onAnswerSubmitted: (language: string) => void;
    isAnswered: boolean;
    isCorrect: boolean;
    isLoading: boolean;
    species: Species | null;
}

export const ThirdQuestionPresentation = (props: ThirdQuestionPresentationProps) => {
    const beforeAnswer = (
        props.answers && props.species && (
            <>
                <p>What is the language commonly spoken by {props.species.name} ?</p>
                {props.answers.map((language, index) => (
                    <button key={index} onClick={() => {props.onAnswerSubmitted(language)}} className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1">
                        {language == "n/a" ? "unknown" : language}
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
                    <code className="text-sm font-bold text-gray-900">{props.species?.name}</code>
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
                        language???
                        <code className="text-sm font-bold text-gray-900">{props.species?.language != "n/a" ? props.species?.language : "unknown"}</code>
                    </p>
                </li>
                {props.species?.homeworld && (
                    <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"/>
                          </svg>
                        </span>
                        <p className="ml-2">
                            homeworld???
                            <code className="text-sm font-bold text-gray-900">{props.species?.homeworld != "n/a" ? props.species.homeworld : "unknown"}</code>
                        </p>
                    </li>
                )}
                <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"/>
                      </svg>
                    </span>
                    <p className="ml-2">
                        hair colors???
                        <code className="text-sm font-bold text-gray-900">{props.species?.hair_colors != "n/a" ? props.species?.hair_colors : "unknown"}</code>
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
                        eye colors???
                        <code className="text-sm font-bold text-gray-900">{props.species?.eye_colors != "n/a" ? props.species?.eye_colors : "unknown"}</code>
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
                        average height???
                        <code className="text-sm font-bold text-gray-900">{props.species?.average_height != "n/a" ? props.species?.average_height : "unknown"}</code>
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
                        classification???
                        <code className="text-sm font-bold text-gray-900">{props.species?.classification != "n/a" ? props.species?.classification : "unknown"}</code>
                    </p>
                </li>
            </ul>
            <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>
                    <Link to={PATH_NAME.fourthQuestion()}>next!</Link>
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
