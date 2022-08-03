import React, { Suspense } from "react"
import { useNearScreen } from "../../hooks/useNearScreen"
import { Loading } from "../Loading"

const TrendingSearches = React.lazy(() => import("./TrendingSearches"))

const LazyTrendingSearches = () => {
    const [show, ref] = useNearScreen()
    return (
        <div ref={ref}>
            <Suspense fallback={<Loading />}>
                {show && <TrendingSearches />}
            </Suspense>
        </div>
    )
}

export { LazyTrendingSearches }
