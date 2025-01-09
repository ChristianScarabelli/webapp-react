import Logo from '../assets/cinema_logo.svg'
import NavBar from './Navbar'

export default function Header() {
    return (
        <header>
            <div className="container-full">
                <figure>
                    <img src={Logo} style={{ height: 'auto', width: '100px', display: 'block' }} alt="" />
                </figure>
                <h1>Movies library</h1>
                <NavBar />
            </div>
        </header>
    )
}