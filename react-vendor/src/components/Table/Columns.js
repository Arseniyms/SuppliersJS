import React from "react";

const columnsData = [
    {
        accessorKey: 'companyName',
        header: 'Название компании',
        size: 100,
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true,
        defaultValue: ""
    },
    {
        accessorKey: 'companyType',
        enableSorting: false,
        size: 100,
        header: 'Агрегатор/Вендор',
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true,
        defaultValue: ""
    },
    {
        accessorKey: 'inn',
        header: 'ИНН',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true,
        defaultValue: ""
    },
    {
        accessorKey: 'website',
        header: 'Сайт',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true,
        defaultValue: ""
    },
    {
        accessorKey: 'people',
        header: 'ФИО',
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true,
        defaultValue: ""
    },
    {
        accessorKey: 'phones',
        header: 'Телефоны',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true,
        defaultValue: ""
    },
    {
        accessorKey: 'emails',
        header: 'Эл. Почта',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true,
        defaultValue: ""
    },
    {
        accessorKey: 'address',
        header: 'Адрес',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true,
        defaultValue: ""
    },
    {
        accessorKey: 'ITEquipment',
        header: 'Тип ИТ оборудования',
        cell: (props) => <p>{
            props.getValue()
        }</p>,
        isDefaultToExport: true,
        defaultValue: ""
    },
    {
        accessorKey: 'softwareName',
        header: 'Наименование ПО',
        cell: (props) => <p>{
            props.getValue()
        }</p>,
        isDefaultToExport: true,
        defaultValue: ""
    },
    {
        accessorKey: 'isMinPromTorg',
        header: 'Наличие в реестре Минпромторга',
        enableSorting: false,
        cell: (props) => <p>{
            props.getValue() ? "Да" : "Нет"
        }</p>,
        isDefaultToExport: true,
        defaultValue: false
    },
    {
        accessorKey: 'isMincifr',
        header: 'Наличие в реестре Минцифор',
        enableSorting: false,
        cell: (props) => <p>{
            props.getValue() ? "Да" : "Нет"
        }</p>,
        isDefaultToExport: true,
        defaultValue: false
    },
    {
        accessorKey: 'description',
        header: 'Краткое описание ИТ-решения',
        size: 400,
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
        defaultValue: ""
    },
    {
        accessorKey: 'status',
        header: 'Статус',
        cell: (props) => <p>{props.getValue()}</p>,
        defaultValue: ""
    },
    {
        accessorKey: 'approbation',
        header: 'Апробация в Технопарке',
        cell: (props) => <p>{props.getValue()}</p>,
        defaultValue: ""
    },
    {
        accessorKey: 'feedback',
        header: 'Обратная связь со стороны Технопарка',
        size: 400,
        cell: (props) => <p>{props.getValue()}</p>,
        defaultValue: ""
    },
    {
        accessorKey: 'comments',
        header: 'Комментарии',
        size: 400,
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
        defaultValue: ""
    }
]

export default columnsData;