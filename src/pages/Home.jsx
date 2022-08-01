import React from "react"
import { ListOfGifs } from "../components/ListOfGifs"
import { LazyTrendingSearches } from "../components/TrendingSearches/LazyTrendingSearches"

export const Home = () => {
    const abortController = new AbortController()
    const signal = abortController.signal

    return (
        <div className="container mx-auto flex flex-col gap-2 sm:flex-row ">
            <ListOfGifs signal={signal} />
            <LazyTrendingSearches />
        </div>
    )
}
