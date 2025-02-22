import React from "react";

const columnsData = [
    {
        accessorKey: 'companyName',
        header: 'Название компании',
        size: 100,
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true,
    },
    {
        accessorKey: 'type',
        enableSorting: false,
        size: 100,
        header: 'Агрегатор/Вендор',
        cell: (props) => <p>{props.getValue().type}</p>,
        isDefaultToExport: true
    },
    {
        accessorKey: 'inn',
        header: 'ИНН',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true
    },
    {
        accessorKey: 'website',
        header: 'Сайт',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true
    },
    {
        accessorKey: 'contacts',
        header: 'ФИО',
        id: "fio",
        cell: (props) => <p>
            {
                props.getValue().map(item => (item.name)).join("\n")
            }
        </p>,
        isDefaultToExport: true
    },
    {
        accessorKey: 'contacts',
        header: 'Телефоны',
        id: "phone",
        enableSorting: false,
        cell: (props) => <p>
            {
                props.getValue().map(
                    item => (item.phones.map(
                        (item) => (item.number)
                    )).join("\n")
                ).join("\n")
            }
        </p>,
        isDefaultToExport: true
    },
    {
        accessorKey: 'contacts',
        header: 'Эл. Почта',
        id: "email",
        enableSorting: false,
        cell: (props) => <p>
            {
                props.getValue().map(item => (item.email)).join("\n")
            }
        </p>,
        isDefaultToExport: true
    },
    {
        accessorKey: 'address',
        header: 'Адрес',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true
    },
    {
        accessorKey: 'itEquipmentInfo',
        header: 'Тип ИТ оборудования',
        id: "ITtype",
        cell: (props) => <p>{
            props.getValue().type
        }</p>,
        isDefaultToExport: true
    },
    {
        accessorKey: 'itEquipmentInfo',
        header: 'Наименование ПО',
        id: "poName",
        cell: (props) => <p>{
            props.getValue().name
        }</p>,
        isDefaultToExport: true
    },
    {
        accessorKey: 'itEquipmentInfo',
        header: 'Наличие в реестре Минпромторга',
        enableSorting: false,
        id: "minpromtorg",
        cell: (props) => <p>{
            props.getValue().isMinPromTorg ? "Да" : "Нет"
        }</p>,
        isDefaultToExport: true
    },
    {
        accessorKey: 'itEquipmentInfo',
        header: 'Наличие в реестре Минцифор',
        id: "mincifr",
        enableSorting: false,
        cell: (props) => <p>{
            props.getValue().isMinCifri ? "Да" : "Нет"
        }</p>,
        isDefaultToExport: true
    },
    {
        accessorKey: 'itEquipmentInfo',
        header: 'Краткое описание ИТ-решения',
        id: "description",
        size: 400,
        enableSorting: false,
        cell: (props) => <p>{
            props.getValue().description
        }</p>,
    },
    {
        accessorKey: 'itEquipmentInfo',
        header: 'Статус',
        id: "status",
        cell: (props) => <p>{
            props.getValue().status
        }</p>,
    },
    {
        accessorKey: 'technoParkInfo',
        header: 'Апробация в Технопарке',
        id: "approbation",
        cell: (props) => <p>{
            props.getValue().approbationStatus
        }</p>,
    },
    {
        accessorKey: 'technoParkInfo',
        header: 'Обратная связь со стороны Технопарка',
        size: 400,
        id: "feedback",
        cell: (props) => <p>{
            props.getValue().feedback
        }</p>,
    },
    {
        accessorKey: 'comment',
        header: 'Комментарии',
        size: 400,
        enableSorting: false,
        cell: (props) => <p>{
            props.getValue().comment
        }</p>,
    }
]

export default columnsData;