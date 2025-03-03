import React, {useMemo} from "react";
import Navbar from "../Navbar/Navbar";
import AddInput from "./AddInput";
import "./AddVendor.css"
import columnsData from "../Table/Columns";

const Text = {
    TITLE: "Добавление нового поставщика",
    ADD: "Добавить",
    PLACEHOLDER: "Ввод",
    SAVE: "Сохранить"
}

const AddVendor = () => {
    const columns = useMemo(() => columnsData, [])
    let result = new Map(columns.map(i => [i.accessorKey, i.defaultValue]));

    const handleChange = (e) => {
        result.set(e.target.id, e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = Object.fromEntries(result)

        fetch('http://127.0.0.1:9090/users/add', {
            method: 'POST',
            body: JSON.stringify(obj)
        })
            .then(res => {console.log(res)})
            .catch(err => {console.log(err)});
    }

    return (
        <div >
            <Navbar/>
            <div className="add-container">
                <form className="add-vendor">
                    <h1>{Text.TITLE}</h1>

                    {columns.map(column => (
                        <AddInput
                            text={column.header}
                            key={column.accessorKey}
                            keyDB={column.accessorKey}
                            onChange={handleChange}
                        />
                    ))}
                </form>
                <div className="button-background">
                    <button onClick={handleSubmit}>{Text.SAVE}</button>
                </div>
            </div>
        </div>
    )
}

export default AddVendor;