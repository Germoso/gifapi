import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Search } from "./routes/Search"
import { Home } from "./routes/Home"
import { Detail } from "./routes/Detail"
import { LastSearch } from "./routes/LastSearch"
import { GifContext } from "./context/GifsContext"

function App() {
    return (
        <BrowserRouter>
            <div className="font-mono min-h-screen bg-slate-900 text-slate-50">
                <Header />
                <GifContext>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="search/" element={<Home />} />
                        <Route path="search/:keyword" element={<Search />} />
                        <Route path="/lastSearch" element={<LastSearch />} />
                        <Route path="/gif/:id" element={<Detail />}></Route>
                    </Routes>
                </GifContext>
            </div>
        </BrowserRouter>
    )
}

export default App
