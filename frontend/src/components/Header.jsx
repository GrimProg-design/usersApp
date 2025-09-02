import "../style/header.css"
import HomeButton from "./headerComponents/HomeButton"
import MoreButton from "./headerComponents/MoreButton"

export default function Header() {
    return (
        <div className="header-wrapper">
            <h2>My Web-Site</h2>
            <nav>
                <HomeButton/>
                <MoreButton/>
            </nav>
        </div>
    )
}