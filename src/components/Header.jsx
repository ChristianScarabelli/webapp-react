import Logo from '../assets/cinema_logo.svg'
import NavBar from './Navbar'

export default function Header() {
    return (
        <header className='bg-dark-subtle p-3'>
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between">
                    <figure className="mb-0">
                        <img src={Logo} style={{ height: 'auto', width: '70px' }} alt="Cinema Logo" />
                    </figure>
                    <h1 className='display-3 text-uppercase text-dark-emphasis text-center flex-grow-1'>
                        Movies Library
                    </h1>
                </div>
            </div>
            <div className='py-1'>
                <NavBar />
            </div>
        </header>
    )
}
