import React, {useMemo} from "react";
import Navbar from "../Navbar/Navbar";
import AddInput from "./AddInput";
import "./AddVendor.css"

const Text = {
    TITLE: "Добавление нового поставщика",
    ADD: "Добавить",
    PLACEHOLDER: "Ввод",
    SAVE: "Сохранить"
}

const AddVendor = () => {
    return (
        <div>
            <Navbar/>
            <div className="add-vendor">
                <h1>{Text.TITLE}</h1>

                <AddInput text="Название компании"/>
                <AddInput text="Агрегатор/Вендор"/>
                <AddInput text="ИНН"/>
                <AddInput text="Сайт"/>
                <AddInput text="ФИО"/>
                <button>{Text.SAVE}</button>
            </div>
        </div>
    )
}

export default AddVendor;