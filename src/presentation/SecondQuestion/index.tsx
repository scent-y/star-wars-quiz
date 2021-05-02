import {People} from "../../type/people";
import {DateTime} from "luxon";
import React from "react";
import {Loading} from "../../components/Loading/Loading";
import {PATH_NAME} from "../../routes";
import {Link} from "react-router-dom";

interface SecondQuestionProps {
    people: People | null,
    answers: string[] | null,
    onAnswerSubmitted: (homeWorld: string) => void;
    isAnswered: boolean;
    isCorrect: boolean;
    isLoading: boolean;
}
export const SecondQuestionPresentation = (props: SecondQuestionProps) => {
    const beforeAnswer = (
        props.answers && props.people && (
            <>
                <p>Where is {props.people.name}'s homeworld?</p>
                {props.answers.map((homeworld, index) => (
                    <button key={index} onClick={() => {props.onAnswerSubmitted(homeworld)}} className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1">
                        {homeworld}
                    </button>
                ))}
            </>
        )
    )
    const afterAnswer = (
        <>
            {props.isCorrect ? <p>Great! That is correct answer!</p> : <p>Unfortunately, that is the wrong answer!</p>}
            <ul className="list-disc space-y-2">
                <li className="flex items-start">
                    <code className="text-sm font-bold text-gray-900">{props.people?.name}</code>
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
                        homeworld：
                        <code className="text-sm font-bold text-gray-900">{props.people?.homeworld}</code>
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
                        height：
                        <code className="text-sm font-bold text-gray-900">{props.people?.height}</code>
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
                        gender：
                        <code className="text-sm font-bold text-gray-900">{props.people?.gender != "n/a" ? props.people?.gender : "unknown"}</code>
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
                        homeworld：
                        <code className="text-sm font-bold text-gray-900">{props.people?.homeworld}</code>
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
                        birth_year：
                        <code className="text-sm font-bold text-gray-900">{props.people?.birth_year}</code>
                    </p>
                </li>
            </ul>
            <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>
                    <Link to={PATH_NAME.thirdQuestion()}>next!</Link>
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
