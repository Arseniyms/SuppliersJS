import React, {useEffect, useMemo} from 'react'
import './Navbar.css'
import {NavLink, useNavigate} from "react-router-dom";
import MainButton from "../MainButton/MainButton";
import {LoginService} from "../../services/LoginService";
import {useLocalStorage} from "../../services/useLocalStorage";
import toast, {Toaster} from "react-hot-toast";
import ToastLogin from "../ToastLogin/ToastLogin";
import exit from "../Resources/exit.svg"
import icon from "../Resources/icon.svg"

const Text = {
    VENDORS: "Поставщики",
    EXPORT: "Экспорт",
    ADD: "Добавить",
    LOGIN: "Вход"
}

const LoginToastText = {
    TITLE: "Для получения полного доступа введите пароль",
    ENTER: "Вход",
    PLACEHOLDER: "Пароль"
}

const PromiseToast = {
    loading: "В процессе",
    success: "Успешный вход",
    error: "Ошибка входа, проверьте пароль",
}

const LoginToast = {
    id: "login",
    duration: 50000
}

const LOCAL_TOKEN_KEY = "token"

const Navbar = () => {
    const navigate = useNavigate();
    const {setItem, removeItem} = useLocalStorage(LOCAL_TOKEN_KEY)
    const isLoggedIn = LoginService.isAuthenticated()

    useEffect(() => {
        LoginService.validateToken()
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const handleMainClick = () => {
        if (isLoggedIn) {
            navigate("/add")
        } else {
            toast(() => (
                <ToastLogin
                    t
                    onLogin={handleLogin}
                    title={LoginToastText.TITLE}
                    enterText={LoginToastText.ENTER}
                    placeholder={LoginToastText.PLACEHOLDER}
                    inputType={"password"}
                />), LoginToast
            );
        }
    }

    const handleLogin = (password) => {
        const promise = LoginService.login({
            password: password
        })
        toast.promise(
            promise,
            PromiseToast,
            {id: "error"}
        )
            .then(res => {
                setItem(res.token)

                setTimeout(() => { window.location.reload() }, 500)
            })
            .catch(err => {
                console.log(err)
            });
    }

    const handleLogout = (e) => {
        e.preventDefault()
        removeItem()
        window.location.reload()
    }

    return (
        <nav className="navbar">
            <Toaster/>
            <div className="navbar-icon-name">
                <button className="main-icon-image" onClick={() => navigate("/")}>
                    <img src={icon} alt=""/>
                </button>
                {isLoggedIn &&
                    <button className="navbar-buttons-only-icons" onClick={handleLogout}>
                        <img src={exit} alt=""/>
                    </button>
                }
            </div>

            <div className="navbar-links">
                <ul>
                    <li>
                        <NavLinkButton text={Text.VENDORS} link="/"/>
                    </li>
                    <li>
                        <NavLinkButton text={Text.EXPORT} link="/export"/>
                    </li>
                </ul>
            </div>

            <div className="navbar-buttons">
                <NavButtonText text={isLoggedIn ? Text.ADD : Text.LOGIN} onClick={handleMainClick}/>
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

const NavButtonText = (props) => {
    return (
        <MainButton text={props.text} onClick={props.onClick}/>
    )
}

export default Navbar;