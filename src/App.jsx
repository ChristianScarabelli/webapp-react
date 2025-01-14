import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import GlobalContext from './contexts/GlobalContext.js'

// Layouts
import BlankLayout from "./layouts/BlankLayout"
import DefaultLayout from "./layouts/DefaultLayout"

// Pages
import NotFound from "./pages/notFound"
import Contacts from './pages/Contacts.jsx'
import AboutUs from './pages/AboutUs.jsx'
import HomePage from './pages/HomePage.jsx'
import MovieDetails from "./pages/movieDetails.jsx"


function App() {

  // stato per il loading della pagina (false di default)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/api/movies" />} />
          <Route element={<DefaultLayout />}>
            <Route path="/api/movies">
              <Route index element={<HomePage />} />
              <Route path=':id' element={<MovieDetails />} />
            </Route>
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<AboutUs />} />
          </Route>
          <Route element={<BlankLayout />}>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
