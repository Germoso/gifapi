import React from "react"
import { ListOfGifs } from "../components/ListOfGifs"
import { useParams } from "react-router-dom"
import { useTitle } from "../hooks/useTItle"

const abortController = new AbortController()
const signal = abortController.signal

const Search = () => {
    const { keyword } = useParams()
    useTitle(`${keyword} | Search`)

    return (
        <div>
            <ListOfGifs keyword={keyword} signal={signal} storage={true} />
        </div>
    )
}

export { Search }
