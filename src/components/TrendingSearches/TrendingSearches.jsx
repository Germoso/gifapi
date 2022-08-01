import { useTrendingSearches } from "../../hooks/useTrendingSearches"

const TrendingSearches = () => {
    const [data] = useTrendingSearches()

    return (
        <div className="">
            <h2 className="text-xl whitespace-nowrap">Trending searches</h2>
            <div>
                {data.map((el) => (
                    <span
                        className="block hover:underline hover:cursor-pointer   "
                        key={el}
                    >
                        {el}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default TrendingSearches
