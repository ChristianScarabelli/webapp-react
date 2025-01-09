import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <section className="bg-dark text-white">
            <div className="container d-flex align-items-center justify-content-center flex-column g-3 vh-100 vw-100">
                <h1 className="display-1">404</h1>
                <span className="fs-4 mb-4">Page not found!</span>
                <Link to='/api/movies' >Go back to homepage</Link>
            </div>
        </section>
    )
}

