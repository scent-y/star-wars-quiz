import { Link } from "react-router-dom";
import { PATH_NAME } from "../../routes";

interface ResultAnnouncementPresentationProps {
    message: string;
}

export const ResultAnnouncementPresentation = (props: ResultAnnouncementPresentationProps) => {
    return (
        <>
            <div>{props.message}</div>
            <Link to={PATH_NAME.home()}>retry!</Link>
        </>
    )
}
