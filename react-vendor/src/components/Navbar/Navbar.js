import React from 'react'
import './Navbar.css'
import notificationImage from '../Resources/notifications.svg'
import {NavLink} from "react-router-dom";
import MainButton from "../MainButton/MainButton";

const Text = {
    VENDORS: "Поставщики",
    EXPORT: "Экспорт",
    ADD: "Добавить"
}

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-icon-name">
                Vendor+
            </div>

            <div className="navbar-links">
                <ul>
                    <li>
                        <NavLinkButton text={Text.VENDORS} link="/vendors"/>
                    </li>
                    <li>
                        <NavLinkButton text={Text.EXPORT} link="/export"/>
                    </li>
                </ul>
            </div>

            <div className="navbar-buttons">
                <div className="navbar-buttons-only-icons">
                    <NavButtonIcon src={notificationImage} link="/notifications"/>
                </div>
                <div>
                    <NavButtonText text={Text.ADD} link="/add"/>
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
            <MainButton text={props.text}/>
        </NavLinkCommon>
    )
}

export default Navbar;