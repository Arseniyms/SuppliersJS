import React from 'react'
import './Navbar.css'
import notif from './Resources/notifications.svg'
import search from './Resources/search.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-icon-name">
                Vendor+
            </div>

            <div className="navbar-links">
                <ul>
                    <li>
                       <a href="/vendors">
                           Вендоры
                       </a>
                    </li>
                    <li>
                       <a href="/export">
                           Экспорт
                       </a>
                    </li>
                </ul>
            </div>

            <div className="navbar-buttons">
                <a href="/notifications" className="notification-icon"> <NavButtonIcon src={notif}/> </a>
                <a href="/search" className="search-icon"> <NavButtonIcon src={search}/> </a>
                <NavButtonText onClick={clickMe}/>
            </div>
        </nav>
    );
}

const NavButtonIcon = (props) => {
    return (
        <button className="navbar-button-only-icon">
            <img src={props.src} />
        </button>
    );
}

const NavButtonText = (props) => {
    return (
        <button
            className="navbar-button-only-text"
            onClick={props.onClick}
        >
            Добавить
        </button>
    )
}

function clickMe() {
    console.log('click me')
}

export default Navbar;