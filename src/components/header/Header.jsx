import "./header.scss"
import Logo from "../../helper/clarusway-logo-black-1024x237.png"
const Header = () =>{


    return(
        <header className="header">
            <img className="header-image"src={Logo} alt="logo" />
            <h1 className="header-h1">Lesson Reminder</h1>
        </header>

    )
}

export default Header;