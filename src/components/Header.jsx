import React from "react"
import { useNavigate, Link } from "react-router-dom"
import { Search } from "./Search"

const Header = () => {
    const navigate = useNavigate()

    const search = (keyword, e) => {
        navigate(`/search/${keyword}`, { replace: true })
    }

    return (
        <div className="z-50 h-fit py-4 bg-slate-300 sticky top-0 border-slate-900 border-y-8 sm:px-10">
            <div className="text-slate-900 font-mono font-bold text-xl h-full container mx-auto flex flex-col gap-4 items-center justify-center sm:flex-row sm:justify-between">
                <h1 className="text-5xl">GIFAPI</h1>
                <div className="flex grow justify-end">
                    <Link to="/lastSearch" className="underline">
                        Last Search
                    </Link>
                </div>
                <Search onSubmit={search} />
            </div>
        </div>
    )
}

export { Header }
