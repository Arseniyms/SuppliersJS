import React, {useMemo, useRef, useState} from "react";

import "./Detail.css"
import {useParams} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import columnsData from "../../components/Table/Columns";
import AddInput from "../../components/AddInput/AddInput";
import MainButton from "../../components/MainButton/MainButton";
import toast, {Toaster} from "react-hot-toast";
import {useCompanyById} from "../../services/serviceHooks";
import {CompanyService} from "../../services/companyService";
import {LoginService} from "../../services/LoginService";
import {MailService} from "../../services/mailService";
import ToastLogin from "../../components/ToastLogin/ToastLogin";
import {useLocalStorage} from "../../services/useLocalStorage";

const SaveToast = {
    loading: "В процессе",
    success: "Компания успешно изменена",
    error: "Ошибка сохранения, повторите позже",
}

const MailingToast = {
    loading: "В процессе",
    success: "Информация была успешно отправлена",
    error: "Ошибка отправки, проверьте корректность почты или повторите позже",
}


const Text = {
    SAVE: "Сохранить изменения",
    TO_MAIL: "Отправить данные на почту"
}

const MailToast = {
    id: "mail",
    duration: 50000
}

const MailToastText = {
    TITLE: "Введите почту для отправки",
    ENTER: "Отправить",
    PLACEHOLDER: "Почта"
}

const Detail = () => {
    let { extId } = useParams();
    const columns = useMemo(() => columnsData, [])
    const resultRef = useRef(new Map());
    const [isPatching, setIsPatching] = useState(false);
    const isLoggedIn = LoginService.isAuthenticated()
    const { setItem, getItem } = useLocalStorage("user_email")

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
        const promise = CompanyService.updateCompany(obj)

        toast.promise(promise, SaveToast)
            .then(res => {
                resultRef.current.clear()
                console.log(res)
                setIsPatching(false);
            })
            .catch(err => {
                console.log(err)
                setIsPatching(false);
            });
    }

    const handleMail = (mail) => {
        setItem(mail)

        const promise = MailService.sendToMail({
            mail: mail,
            extId: extId
        })

        toast.promise(
            promise,
            MailingToast,
            {id:"email"}
        )
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const pressedMail = (e) => {
        e.preventDefault();
        toast(() => (
            <ToastLogin
                t
                onLogin={handleMail}
                title={MailToastText.TITLE}
                enterText={MailToastText.ENTER}
                defaultValue={getItem()}
                placeholder={MailToastText.PLACEHOLDER}
            />), MailToast
        );
    }

    let initialData = new Map()
    if (data !== null && data !== undefined) {
        initialData = new Map(Object.entries(data))
    }

    return (
        <div>
            <div><Toaster/></div>
            {(() => {
                if (isPending) {
                    return <div className="table-loader"><Loader/></div>
                }
                if (error) {
                    return <div className="table-error"><Error onClick={() => refetch()}/></div>
                }
                return <div className="detail-full">
                    <div className="detail-buttons">
                        {isLoggedIn && <MainButton text={Text.SAVE} onClick={handleSubmit} isLoading={isPatching}/>}
                        <MainButton text={Text.TO_MAIL} onClick={pressedMail}/>
                    </div>

                    <div className="detail-container">
                        {columns.map(column => (
                            <AddInput className="detail-input"
                                      text={column.header}
                                      selectableFields={column.selectableFields}
                                      key={column.accessorKey}
                                      keyDB={column.accessorKey}
                                      onChange={handleChange}
                                      isRequired={false}
                                      value={initialData.get(column.accessorKey)}
                                      readOnly={!isLoggedIn}
                            />
                        ))}
                    </div>

                </div>
            })()}
        </div>
    )
}

export default Detail;