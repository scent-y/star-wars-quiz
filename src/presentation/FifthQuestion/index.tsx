import { Starship } from "../../type/starship";
import React, { useState } from "react";
import { Loading } from "../../components/Loading/Loading";
import { PATH_NAME } from "../../routes";
import { Link } from "react-router-dom";
import { AnswerResult } from "../../components/AnswerResult/AnswerResult";


interface FifthQuestionPresentationProps {
    isAnswered: boolean;
    isCorrect: boolean;
    isLoading: boolean;
    starship: Starship | null;
    onSubmitStarshipName: (name: string) => void
}

export const FifthQuestionPresentation = (props: FifthQuestionPresentationProps) => {
    const [inputName, setInputName] = useState("");
    // @ts-ignore
    const handleInput = (event) => {
        setInputName(event.target.value);
    }
    const beforeAnswer = (
        props.starship && (
            <>
                <p>What is the name of this starship?</p>
                <ul className="list-disc space-y-2">
                <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"/>
                      </svg>
                    </span>
                    <p className="ml-2">
                        model：
                        <code className="text-sm font-bold text-gray-900">{props.starship.model}</code>
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
                        manufacturer：
                        <code className="text-sm font-bold text-gray-900">{props.starship.manufacturer}</code>
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
                        starship class：
                        <code className="text-sm font-bold text-gray-900">{props.starship.starship_class}</code>
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
                        passengers：
                        <code className="text-sm font-bold text-gray-900">{props.starship.passengers}</code>
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
                        crew：
                        <code className="text-sm font-bold text-gray-900">{props.starship.crew}</code>
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
                        pilots：
                        {props.starship.pilots ? (
                            props.starship.pilots?.map((pilot, index) => (
                                <code className="text-sm font-bold text-gray-900" key={index}>pilot</code>
                            ))
                        ) : <code className="text-sm font-bold text-gray-900">No pilot</code>}
                    </p>
                </li>
                </ul>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >Enter starship name:
                        <input type="text" id="starshipName" onInput={handleInput} className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                        <button onClick={() => props.onSubmitStarshipName(inputName)} className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">submit</button>
                    </label>
                </form>
            </>
        )
    )
    const afterAnswer = (
        <>
            <AnswerResult isCorrect={props.isCorrect} message={`Correct name is ${props.starship?.name}`} />
            <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>
                    <Link to={PATH_NAME.result()}>To announce the results</Link>
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
