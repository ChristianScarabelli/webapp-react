import { NavLink } from "react-router-dom"

export default function NavBar() {
    const menu = [
        { name: "Home", path: "/api/movies" },
        { name: "About us", path: "/about" },
        { name: "Contacts", path: "/contacts" },
    ]

    return (
        <nav className="nav nav-underline">
            <div className="container-fluid">
                <ul className="navbar-nav text-body-secondary text-center d-flex flex-row gap-4">
                    {menu.map((menuItem, i) => (
                        <li key={i} className="nav-item">
                            <NavLink to={menuItem.path} className={({ isActive }) => (isActive ? "nav-link active text-primary" : "nav-link")}>
                                <span>{menuItem.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
