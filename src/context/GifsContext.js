import React, { useState } from "react"

const Context = React.createContext({})

const GifContext = ({ children }) => {
    const [gifs, setGifs] = useState([])

    return (
        <Context.Provider value={[gifs, setGifs]}>{children}</Context.Provider>
    )
}

export { Context, GifContext }
