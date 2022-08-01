import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Search } from "./pages/Search"
import { Home } from "./pages/Home"
import { Detail } from "./pages/Detail"
import { LastSearch } from "./pages/LastSearch"
import { GifContext } from "./context/GifsContext"

function App() {
    const lastSearchKeyword = localStorage.getItem("keyword")
    return (
        <BrowserRouter>
            <div className="font-mono min-h-screen bg-slate-900 text-slate-50">
                <Header />
                <GifContext>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="search/" element={<Home />} />
                        <Route path="search/:keyword" element={<Search />} />
                        <Route
                            path="/lastSearch"
                            element={<LastSearch keyword={lastSearchKeyword} />}
                        />
                        <Route path="/gif/:id" element={<Detail />}></Route>
                    </Routes>
                </GifContext>
            </div>
        </BrowserRouter>
    )
}

export default App