import React from "react";

const columnsData = [
    {
        accessorKey: 'companyName',
        header: 'Название компании',
        size: 100,
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true,
        defaultValue: "",
        isRequired: true,
        isPublic: true
    },
    {
        accessorKey: 'companyType',
        enableSorting: false,
        size: 100,
        header: 'Агрегатор/Вендор',
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true,
        defaultValue: "",
        isRequired: true,
        isPublic: true,
        selectableFields: ['Агрегатор', 'Вендор']
    },
    {
        accessorKey: 'inn',
        header: 'ИНН',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true,
        defaultValue: "",
        isRequired: true,
        isPublic: true,
    },
    {
        accessorKey: 'website',
        header: 'Сайт',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true,
        defaultValue: "",
        isPublic: true,
    },
    {
        accessorKey: 'people',
        header: 'ФИО',
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true,
        defaultValue: "",
        isPublic: false,
    },
    {
        accessorKey: 'phones',
        header: 'Сотовые',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true,
        defaultValue: "",
        isPublic: false
    },
    {
        accessorKey: 'emails',
        header: 'Эл. Почта',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true,
        defaultValue: "",
        isPublic: false
    },
    {
        accessorKey: 'address',
        header: 'Адрес',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
        isDefaultToExport: true,
        defaultValue: "",
        isPublic: true
    },
    {
        accessorKey: 'ITEquipment',
        header: 'Тип ИТ оборудования',
        cell: (props) => <p>{
            props.getValue()
        }</p>,
        isDefaultToExport: true,
        defaultValue: "",
        isPublic: true
    },
    {
        accessorKey: 'softwareName',
        header: 'Наименование ПО',
        cell: (props) => <p>{
            props.getValue()
        }</p>,
        isDefaultToExport: true,
        defaultValue: "",
        isPublic: true
    },
    {
        accessorKey: 'isMinPromTorg',
        header: 'Наличие в реестре Минпромторга',
        enableSorting: false,
        cell: (props) => <p>{
            props.getValue()
        }</p>,
        isDefaultToExport: true,
        defaultValue: "",
        isPublic: true,
        selectableFields: ['Да', 'Нет']
    },
    {
        accessorKey: 'isMincifr',
        header: 'Наличие в реестре Минцифор',
        enableSorting: false,
        cell: (props) => <p>{
            props.getValue()
        }</p>,
        isDefaultToExport: true,
        defaultValue: "",
        isPublic: true,
        selectableFields: ['Да', 'Нет']
    },
    {
        accessorKey: 'description',
        header: 'Краткое описание ИТ-решения',
        size: 400,
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
        defaultValue: "",
        isPublic: true,
    },
    {
        accessorKey: 'status',
        header: 'Статус',
        cell: (props) => <p>{props.getValue()}</p>,
        defaultValue: "",
        isPublic: true,
        selectableFields: ['Принято', 'В обработке', "Отказано"]
    },
    {
        accessorKey: 'approbation',
        header: 'Апробация в Технопарке',
        cell: (props) => <p>{props.getValue()}</p>,
        defaultValue: "",
        isPublic: true,
    },
    {
        accessorKey: 'feedback',
        header: 'Обратная связь со стороны Технопарка',
        size: 400,
        cell: (props) => <p>{props.getValue()}</p>,
        defaultValue: "",
        isPublic: true,
    },
    {
        accessorKey: 'comments',
        header: 'Комментарии',
        size: 400,
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
        defaultValue: "",
        isPublic: true
    }
]

export default columnsData;