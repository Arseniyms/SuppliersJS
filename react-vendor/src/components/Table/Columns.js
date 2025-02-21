import React from "react";

const columnsData = [
    {
        accessorKey: 'companyName',
        header: 'Название компании',
        size:100,
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'type',
        enableSorting: false,
        size: 100,
        header: 'Агрегатор/Вендор',
        cell: (props) => <p>{props.getValue().type}</p>,
    },
    {
        accessorKey: 'inn',
        header: 'ИНН',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: 'website',
        header: 'Сайт',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: 'contacts',
        header: 'ФИО',
        id: "fio",
        cell: (props) => <p>
            {
                props.getValue()[0].name
            }
        </p>,
    },
    {
        accessorKey: 'contacts',
        header: 'Телефон',
        id: "phone",
        enableSorting: false,
        cell: (props) => <p>
            {
                props.getValue()[0].phones[0].number
            }
        </p>,
    },
    {
        accessorKey: 'contacts',
        header: 'Эл. Почта',
        id: "email",
        enableSorting: false,
        cell: (props) => <p>
            {
                props.getValue()[0].email
            }
        </p>,
    },
    {
        accessorKey: 'address',
        header: 'Адрес',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: 'itEquipmentInfo',
        header: 'Тип ИТ оборудования',
        id: "ITtype",
        cell: (props) => <p>{
            props.getValue().type
        }</p>,
    },
    {
        accessorKey: 'itEquipmentInfo',
        header: 'Наименование ПО',
        id: "poName",
        cell: (props) => <p>{
            props.getValue().name
        }</p>,
    },
    {
        accessorKey: 'itEquipmentInfo',
        header: 'Наличие в реестре Минпромторга',
        enableSorting: false,
        id: "minpromtorg",
        cell: (props) => <p>{
            props.getValue().isMinPromTorg ? "Да" : "Нет"
        }</p>,
    },
    {
        accessorKey: 'itEquipmentInfo',
        header: 'Наличие в реестре Минцифор',
        id: "mincifr",
        enableSorting: false,
        cell: (props) => <p>{
            props.getValue().isMinCifri ? "Да" : "Нет"
        }</p>,
    },
    {
        accessorKey: 'itEquipmentInfo',
        header: 'Краткое описание ИТ-решения',
        id: "description",
        size: 300,
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
        id: "feedback",
        cell: (props) => <p>{
            props.getValue().feedback
        }</p>,
    },
    {
        accessorKey: 'comment',
        header: 'Комментарии',
        enableSorting: false,
        cell: (props) => <p>{
            props.getValue().comment
        }</p>,
    }
]

export default columnsData;