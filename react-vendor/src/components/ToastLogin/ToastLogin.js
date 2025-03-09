import toast from "react-hot-toast";
import React, {useState} from "react";
import "./ToastLogin.css"
import MainButton from "../MainButton/MainButton";

const Text = {
    TITLE: "Для получения полного доступа введите пароль",
    CANCEL: "Отмена",
    ENTER: "Вход"
}

const ToastLogin = ({t, onLogin}) => {
    const [password, setPassword] = useState("");

    const onLoginClick = (e) => {
        e.preventDefault();

        if (password === "") {
            return
        }
        onLogin(password)
    }


    return (
        <div className="toast-login">
            <div className="heading">{Text.TITLE}</div>
            <form className="form" action="">
                <div className="input-field">
                    <input
                        required
                        autoComplete="off"
                        // type="password"
                        name="text"
                        id="password"
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                    <label htmlFor="password">Пароль</label>
                </div>

                <div className="toast-login-buttons">
                    <MainButton text = {Text.CANCEL} onClick={(e) => {
                        e.preventDefault();

                        toast.dismiss(t.id)
                    }}/>
                    <MainButton text = {Text.ENTER} onClick={onLoginClick}/>
                </div>
            </form>
        </div>
    )
}

export default ToastLogin;