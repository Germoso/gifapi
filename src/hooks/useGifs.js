import { useState, useEffect, useContext } from "react"
import { Context } from "../context/GifsContext"

const useGif = (keyword, page, signal, storage = false) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useContext(Context)

    useEffect(() => {
        console.log("storage: " + storage)
        if (storage) {
            localStorage.clear()
            if (keyword) localStorage.setItem("keyword", keyword)
            console.log("setting: " + keyword)
        }
        setLoading(true)
        fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=Ow1DZKBkVFbDFuZrByuykaN9FruAfuRO&q=${keyword}&limit=20&offset=${
                page * 20
            }&rating=g&lang=en`,
            { signal }
        )
            .then((res) => res.json())
            .then((json) => json.data)
            .then((gifs) => {
                setLoading(false)
                setData(gifs)
            })
        return () => window.stop()
    }, [keyword, setData, signal, page])

    return [data, loading]
}

export { useGif }
