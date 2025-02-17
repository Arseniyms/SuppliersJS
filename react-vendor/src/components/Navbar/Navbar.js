import React from 'react'
import './Navbar.css'
import notificationImage from './Resources/notifications.svg'
import searchImage from './Resources/search.svg'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-icon-name">
                Vendor+
            </div>

            <div className="navbar-links">
                <ul>
                    <li>
                        <NavLinkButton text="Вендоры" link="/vendors"/>
                    </li>
                    <li>
                        <NavLinkButton text="Экспорт" link="/export"/>
                    </li>
                </ul>
            </div>

            <div className="navbar-buttons">
                <div className="navbar-buttons-only-icons">
                    <NavButtonIcon src={notificationImage} link="/notifications"/>
                    <NavButtonIcon src={searchImage} link="/search"/>
                </div>
                <div className="navbar-button-only-text">
                    <NavButtonText text="Добавить" link="/add"/>
                </div>
            </div>
        </nav>
    );
}

const NavLinkCommon = (props) => {
    return (
        <NavLink to={props.link} end className={({isActive}) => (isActive ? 'active' : '')}>
            {props.children}
        </NavLink>
    )
}

const NavLinkButton = (props) => {
    return (
        <NavLinkCommon link={props.link}>
            {props.text}
        </NavLinkCommon>
    )
}

const NavButtonIcon = (props) => {
    return (
        <NavLinkCommon link={props.link}>
            <button>
                <img src={props.src} alt=""/>
            </button>
        </NavLinkCommon>
    )
}

const NavButtonText = (props) => {
    return (
        <NavLinkCommon link={props.link}>
            <button>
                {props.text}
            </button>
        </NavLinkCommon>
    )
}

export default Navbar;