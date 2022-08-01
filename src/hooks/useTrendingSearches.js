import { useState, useEffect } from "react"

const useTrendingSearches = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(
            "https://api.giphy.com/v1/trending/searches?api_key=Ow1DZKBkVFbDFuZrByuykaN9FruAfuRO"
        )
            .then((res) => res.json())
            .then((json) => {
                setData(json.data)
            })
    }, [])

    return [data]
}

export { useTrendingSearches }
