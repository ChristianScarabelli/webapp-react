import { Outlet } from "react-router-dom"

export default function BlankLayout() {
    return (
        <section>
            <Outlet />
        </section>
    )
}