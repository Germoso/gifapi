import React from "react"
import { useParams } from "react-router-dom"
import { useGif } from "../hooks/useGif"
import { Gif } from "../components/Gif"
import { Loading } from "../components/Loading"
import { useTitle } from "../hooks/useTItle"

const Detail = () => {
    const { id } = useParams()
    const [gif, loading] = useGif(id)

    useTitle(`${gif.title || "Loading..."} | Gifapi`)

    if (loading) return <Loading />
    else
        return (
            <div className="w-80 m-auto sm:w-96 pt-10">
                <Gif
                    title={gif.title}
                    id={gif.id}
                    url={gif.images.downsized.url}
                />
            </div>
        )
}

export { Detail }
