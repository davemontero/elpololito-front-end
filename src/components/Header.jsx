import Navbar from "./Navbar"
import Main from "./Main"
import ModalRegister from "./ModalRegister"
import ModalLogin from "./ModalLogin"


const Header = () => {
    return (
        <header className="header-wrapper">
            <Navbar />
            <Main />
            <ModalRegister />
            <ModalLogin />
        </header>
    )
}

export default Header