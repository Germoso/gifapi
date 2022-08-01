import React from "react"
import { useParams } from "react-router-dom"
import { useGif } from "../hooks/useGif"
import { Gif } from "../components/Gif"
import { Loading } from "../components/Loading"

const Detail = () => {
    const { id } = useParams()
    console.log(id + " id")
    const [gif, loading] = useGif(id)
    console.log(gif, loading)

    if (loading) return <Loading />
    else
        return (
            <div className="w-80 m-auto sm:w-96">
                <Gif
                    title={gif.title}
                    id={gif.id}
                    url={gif.images.downsized.url}
                />
            </div>
        )
}

export { Detail }
