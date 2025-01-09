import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"


export default function DefaultLayout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <header>
                <Header />
            </header>
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}