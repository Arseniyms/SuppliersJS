import React, {useEffect, useMemo, useRef} from "react";
import AddInput from "../../components/AddInput/AddInput";
import "./AddVendor.css"
import columnsData from "../../components/Table/Columns";
import {CompanyService} from "../../services/companyService";
import toast, {Toaster} from "react-hot-toast";
import {LoginService} from "../../services/LoginService";
import {useNavigate} from "react-router-dom";

const Text = {
    TITLE: "Добавление нового поставщика",
    ADD: "Добавить",
    PLACEHOLDER: "Ввод",
    SAVE: "Сохранить"
}

const AddVendor = () => {
    const columns = useMemo(() => columnsData, [])
    const requiredColumns = useMemo(() => columnsData.filter(i => i.isRequired), [])
    const [isButtonEnabled, setIsButtonEnabled] = React.useState(requiredColumns.length === 0);
    const resultRef = useRef(new Map(columns.map(i => [i.accessorKey, i.defaultValue])));
    const isLoggedIn = LoginService.isAuthenticated()
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn){
            navigate("/");
        }
    },[isLoggedIn]);

    const handleChange = (e) => {
        resultRef.current.set(e.target.id, e.target.value);

        setIsButtonEnabled(
            requiredColumns.every(column => {
                return resultRef.current.get(column.accessorKey) !== "";
            })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = Object.fromEntries(resultRef.current)

        CompanyService.addCompany(obj)
            .then(res => {
                console.log(res)
                toast.success("Компания успешно добавлена")
            })
            .catch(err => {
                console.log(err)
                toast.error("Ошибка сохранения, повторите позже")
            });
    }

    return (
        <div >
            <div><Toaster/></div>
            <div className="add-container">
                <form className="add-vendor">
                    <h1>{Text.TITLE}</h1>

                    {columns.map(column => (
                        <AddInput
                            text={column.header}
                            selectableFields={column.selectableFields}
                            key={column.accessorKey}
                            keyDB={column.accessorKey}
                            onChange={handleChange}
                            isRequired={column.isRequired}
                        />
                    ))}
                </form>
                <div className="button-background">
                    <button disabled={!isButtonEnabled} onClick={handleSubmit}>{Text.SAVE}</button>
                </div>
            </div>
        </div>
    )
}

export default AddVendor;