import { useEffect, useState } from "react"

const useGif = (id) => {
    const [gif, setGif] = useState({})
    const [loading, setloading] = useState(true)

    useEffect(() => {
        window.stop()
        fetch(
            `https://api.giphy.com/v1/gifs/${id}?api_key=Ow1DZKBkVFbDFuZrByuykaN9FruAfuRO`
        )
            .then((res) => res.json())
            .then((json) => {
                setGif(json.data)
                setloading(false)
            })
    }, [id])

    return [gif, loading]
}

export { useGif }
