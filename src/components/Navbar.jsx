import { NavLink } from "react-router-dom";

export default function NavBar() {
    const menu = [
        { name: "Home", path: "/" },
        { name: "About us", path: "/about" },
        { name: "Contacts", path: "/contacts" },
    ];

    return (
        <nav>
            <ul>
                {menu.map((menuItem, i) => (
                    <li key={i}>
                        <NavLink to={menuItem.path} className={({ isActive }) => (isActive ? "active-class" : "")}>
                            <span>{menuItem.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
