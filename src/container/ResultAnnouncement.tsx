import { ResultAnnouncementPresentation } from "../presentation/ResultAnnouncement";
import { useSelector } from "react-redux";
import { selectResult } from "../store/result";

export const ResultAnnouncement = () => {
    const result = useSelector(selectResult);
    return <ResultAnnouncementPresentation result={result}/>
}
