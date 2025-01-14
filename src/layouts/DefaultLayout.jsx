import { Outlet } from "react-router-dom"
import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

// Components
import Header from "../components/Header"
import Footer from "../components/Footer"
import PageLoader from "../components/PageLoader"



export default function DefaultLayout() {

    // richiamo la funzione loader dal context
    const { isLoading } = useContext(GlobalContext)

    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <header>
                    <Header />
                </header>
                <main className="flex-grow-1 bg-light">
                    <Outlet />
                </main>
                <footer>
                    <Footer />
                </footer>
                {isLoading && <PageLoader />}
            </div>
        </>
    )
}