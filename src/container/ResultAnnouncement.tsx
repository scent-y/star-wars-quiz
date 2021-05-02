import { ResultAnnouncementPresentation } from "../presentation/ResultAnnouncement";
import { useSelector } from "react-redux";
import { selectResult } from "../store/result";

export const ResultAnnouncement = () => {
    const result = useSelector(selectResult);
    let message: string = "";
    switch (result) {
        case 5:
            message = `Perfect! You are master of star wars!`;
            break;
        case 4:
            message = `4/5 Correct answer! Your love for Star Wars is great!`;
            break;
        case 3:
            message = `3/5 Correct answer! You are familiar with Star Wars.`;
            break;
        case 2:
        case 1:
            message = `${result}/5 correct answer! You are a beginner about star wars.`;
            break;
        default:
            message = `Unfortunately it was 0 points...`;
    }
    return <ResultAnnouncementPresentation message={message}/>
}
