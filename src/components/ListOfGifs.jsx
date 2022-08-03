import React, { useState } from "react"
import { Gif } from "./Gif"
import { useGif } from "../hooks/useGifs"
import { Loading } from "./Loading"
import { Link } from "react-router-dom"
import { Button } from "./Button"

const ListOfGifs = ({ keyword, signal, storage }) => {
    const [page, setPage] = useState(0)
    const [data, loading] = useGif(keyword, page, signal, storage)

    const prev = () => {
        if (page === 0) return
        setPage(page - 1)
    }

    const next = () => {
        setPage(page + 1)
    }

    if (loading) return <Loading styles="min-h-screen" />
    return (
        <div className="container min-h-screen mx-auto pb-10">
            <div className="columns-2 sm:columns-3xs gap-3 p-3">
                {data.map((el) => (
                    <Link
                        key={el.id}
                        to={`/gif/${el.id}`}
                        className="block mb-3"
                    >
                        <Gif
                            title={el.title}
                            id={el.id}
                            url={el.images.downsized.url}
                        />
                    </Link>
                ))}
            </div>
            <div className="flex mx-auto w-fit gap-2 text-xl">
                <Button text="Prev" callback={prev} />
                <span>{page + 1}</span>
                <Button text="Next" callback={next} />
            </div>
        </div>
    )
}

export { ListOfGifs }
