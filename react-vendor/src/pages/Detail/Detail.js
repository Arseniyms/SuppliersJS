import React, {useMemo, useRef, useState} from "react";

import "./Detail.css"
import {useParams} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import {useQuery} from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import columnsData from "../../components/Table/Columns";
import AddInput from "../AddVendor/AddInput";
import MainButton from "../../components/MainButton/MainButton";
import toast, {Toaster} from "react-hot-toast";
import {useCompanyById} from "../../services/serviceHooks";
import {CompanyService} from "../../services/companyService";

const Detail = () => {
    let { extId } = useParams();
    const columns = useMemo(() => columnsData, [])
    const resultRef = useRef(new Map());
    const [isPatching, setIsPatching] = useState(false);

    const {
        isPending,
        error,
        data,
        refetch
    } = useCompanyById(extId)

    const handleChange = (e) => {
        resultRef.current.set(e.target.id, e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (resultRef.current.size === 0) {
            return
        }
        setIsPatching(true);
        resultRef.current.set("extId", extId);
        const obj = Object.fromEntries(resultRef.current)

        CompanyService.updateCompany(obj)
            .then(res => {
                resultRef.current.clear()
                toast.success("Компания успешно изменена")
                console.log(res)
                setIsPatching(false);
            })
            .catch(err => {
                console.log(err)
                toast.error("Ошибка сохранения, повторите позже")
                setIsPatching(false);
            });
    }

    let initialData = new Map()
    if (data !== null && data !== undefined) {
        initialData = new Map(Object.entries(data))
    }

    return (
        <div>
            <div><Toaster/></div>
            <Navbar/>
            {(() => {
                if (isPending) {
                    return <div className="table-loader"><Loader/></div>
                }
                if (error) {
                    return <div className="table-error"><Error onClick={() => refetch()}/></div>
                }
                return <div className="detail-full">
                    <div className="detail-buttons">
                        <MainButton text={"Сохранить изменения"} onClick={handleSubmit} isLoading={isPatching}/>
                        <MainButton text={"Отправить данные на почту"}/>
                    </div>

                    <div className="detail-container">
                        {columns.map(column => (
                            <AddInput className="detail-input"
                                      text={column.header}
                                      key={column.accessorKey}
                                      keyDB={column.accessorKey}
                                      onChange={handleChange}
                                      isRequired={false}
                                      value={initialData.get(column.accessorKey)}
                            />
                        ))}
                    </div>

                </div>
            })()}
        </div>
    )
}

export default Detail;