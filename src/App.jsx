import { BrowserRouter, Routes, Route } from "react-router-dom"
import BlankLayout from "./layouts/BlankLayout"
import NotFound from "./pages/notFound"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BlankLayout />}>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
