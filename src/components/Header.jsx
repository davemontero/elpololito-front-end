import Navbar from "./Navbar"
import Main from "./Main"
import ModalLogin from "./ModalLogin"


const Header = () => {
    return (
        <header className="header-wrapper">
            <Navbar />
            <Main />
            <ModalLogin />
        </header>
    )
}

export default Header