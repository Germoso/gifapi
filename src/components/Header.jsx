import React from "react"
import { useNavigate, Link } from "react-router-dom"
import { Search } from "./Search"

const Header = () => {
    const navigate = useNavigate()

    const search = (keyword) => {
        navigate(`/search/${keyword}`, { replace: true })
    }

    return (
        <div className="z-50 h-fit py-4 sticky top-0 border-b-2 border-b-stone-500 sm:px-10 bg-black ">
            <div className="text-slate-900 font-mono font-bold text-xl h-full container mx-auto flex flex-col gap-4 items-center justify-center  sm:flex-row sm:justify-between">
                <Link to="/" className="text-5xl text-stone-400">
                    GIFACTS
                </Link>
                <div className="flex grow justify-end">
                    <Link to="/lastSearch" className="text-stone-500 hover:underline">
                        Last Search
                    </Link>
                </div>
                <Search onSubmit={search} />
            </div>
        </div>
    )
}

export { Header }
