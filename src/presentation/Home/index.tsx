import React from "react";
import { Link } from "react-router-dom";
import { PATH_NAME } from "../../routes";

export const HomePresentation = () => {
    return (
        <Link to={PATH_NAME.firstQuestion()}>Lets start</Link>
    );
}
