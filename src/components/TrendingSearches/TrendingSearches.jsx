import { Link } from "react-router-dom"
import { useTrendingSearches } from "../../hooks/useTrendingSearches"

const TrendingSearches = () => {
    const [data] = useTrendingSearches()

    return (
        <div className="">
            <h2 className="text-xl whitespace-nowrap text-neutral-400">Trending searches</h2>
            <div className="flex gap-2 flex-wrap sm:flex-col sm:gap-0">
                {data.map((el) => (
                    <Link
                        to={`/search/${el}`}
                        className="underline text-neutral-500 sm:block sm:hover:underline hover:cursor-pointer"
                        key={el}
                    >
                        {el}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default TrendingSearches
