import React from "react"
import { ListOfGifs } from "../components/ListOfGifs"

const LastSearch = ({ keyword }) => {
    return (
        <div>
            <ListOfGifs keyword={keyword} />
        </div>
    )
}

export { LastSearch }
