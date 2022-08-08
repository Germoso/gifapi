import React, { useEffect } from "react"
import { ListOfGifs } from "../components/ListOfGifs"
import { LazyTrendingSearches } from "../components/TrendingSearches/LazyTrendingSearches"
import { useTitle } from "../hooks/useTItle"

export const Home = () => {
    const abortController = new AbortController()
    const signal = abortController.signal

    useTitle(`GIFACTS`)

    return (
        <div className="container mx-auto flex flex-col gap-2 sm:flex-row ">
            <ListOfGifs signal={signal} storage={false} />
            <LazyTrendingSearches />
        </div>
    )
}
