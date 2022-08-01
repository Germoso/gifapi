import React from "react"
import { ListOfGifs } from "../components/ListOfGifs"
import { useParams } from "react-router-dom"

const abortController = new AbortController()
const signal = abortController.signal

const Search = () => {
    const { keyword } = useParams()
    return (
        <div>
            <ListOfGifs keyword={keyword} signal={signal} />
        </div>
    )
}

export { Search }
