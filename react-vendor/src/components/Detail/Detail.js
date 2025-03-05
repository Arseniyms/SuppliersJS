import React, {useMemo, useRef} from "react";

import "./Detail.css"
import {useParams} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {useQuery} from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import columnsData from "../Table/Columns";
import AddInput from "../AddVendor/AddInput";
import MainButton from "../MainButton/MainButton";

const Detail = () => {
    let { extId } = useParams();
    const columns = useMemo(() => columnsData, [])
    const resultRef = useRef(new Map());

    const {
        isPending,
        error,
        data,
        refetch
    } = useQuery({
        queryKey: ['company-detail'],
        refetchOnWindowFocus: false,
        queryFn: async () => {
            const response = await fetch(`http://127.0.0.1:9090/users/${extId}`)
            return await response.json()
        }
    })

    const handleChange = (e) => {
        resultRef.current.set(e.target.id, e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (resultRef.current.size === 0) {
            return
        }
        resultRef.current.set("extId", extId);
        const obj = Object.fromEntries(resultRef.current)
        
        fetch('http://127.0.0.1:9090/users/', {
            method: 'PATCH',
            body: JSON.stringify(obj)
        })
            .then(res => {
                alert("Компания успешно изменена")
                resultRef.current.clear()
                console.log(res)
            })
            .catch(err => {console.log(err)});
    }

    let initialData = new Map()
    if (data !== null && data !== undefined) {
        initialData = new Map(Object.entries(data))
    }

    return (
        <div>
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
                        <MainButton text={"Сохранить изменения"} onClick={handleSubmit}/>
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