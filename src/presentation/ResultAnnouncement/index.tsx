interface ResultAnnouncementPresentationProps {
    result: number;
}

export const ResultAnnouncementPresentation = (props: ResultAnnouncementPresentationProps) => {
    return <div>{props.result}</div>
}
