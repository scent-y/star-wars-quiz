import {DateTime} from "luxon";

export type Film = {
    director: string | null,
    producer: string | null,
    opening_crawl: string | null,
    title: string | null,
    release_date: DateTime | null,
    episode_id: number | null,
}
