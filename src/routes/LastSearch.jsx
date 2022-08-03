import React from "react"
import { ListOfGifs } from "../components/ListOfGifs"
import { useTitle } from "../hooks/useTItle"

const LastSearch = () => {
    const lastSearchKeyword = localStorage.getItem("keyword")
    useTitle(`${lastSearchKeyword || "Loading..."} | Last search`)
    console.log("getting: " + lastSearchKeyword)
    return (
        <div>
            <ListOfGifs keyword={lastSearchKeyword} />
        </div>
    )
}

export { LastSearch }
