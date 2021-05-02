import React from "react";
import { HomePresentation } from "../presentation/Home";
import { resultActions } from "../store/result";
import { useDispatch } from "react-redux";

export const Home = () => {
    const dispatch = useDispatch();
    dispatch(resultActions.reset());
    return <HomePresentation />
}
