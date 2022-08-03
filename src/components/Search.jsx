import React, { useEffect, useState } from "react"

export const Search = ({ onSubmit }) => {
    const [keyword, setKeyword] = useState("")

    const handleChange = (e) => setKeyword(e.target.value)

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                onSubmit(keyword)
            }}
        >
            <input
                type="text"
                value={keyword}
                onChange={handleChange}
                placeholder="Search.."
                className="text-black border-black pl-4 sm:text-3xl"
            />
        </form>
    )
}
