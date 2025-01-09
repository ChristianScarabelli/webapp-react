import Logo from '../assets/cinema_logo.svg'
import NavBar from './Navbar'

export default function Header() {
    return (
        <header className='bg-dark-subtle p-3'>
            <div className="container-fluid d-flex justify-content-between align-items-center g-4">
                <figure>
                    <img src={Logo} style={{ height: 'auto', width: '80px', display: 'block' }} alt="" />
                </figure>
                <h1 className='display-2 text-uppercase text-dark-emphasis'>Movies library</h1>
                <NavBar />
            </div>
        </header>
    )
}