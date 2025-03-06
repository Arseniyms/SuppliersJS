import * as XLSX from "xlsx";
import {CompanyService} from "../companyService";
import columnsData from "../../components/Table/Columns";

export const exportToExcel = async (columnsToExport) => {
    try {
        const data = await CompanyService.getAllCompanies();
        const columnsHeaders = columnsData.filter(item => columnsToExport.includes(item.accessorKey)).map(item => item.header)
        const newArray = data.map(obj =>
            Object.fromEntries(
                Object.entries(obj).filter(([key]) => columnsToExport.includes(key))
            )
        );

        const worksheet = XLSX.utils.json_to_sheet(newArray, {
            origin: 'A2',
            skipHeader: true,
            s: { font: { name: "Courier", sz: 24 } }
        });
        XLSX.utils.sheet_add_aoa(worksheet, [columnsHeaders], { origin: 'A1' });

        worksheet["!cols"] = columnsHeaders.map(item => {
            const minWidth = Math.max(30, item.length)
            return {wch: minWidth}
        })

        // worksheet["!rows"] = newArray.map(item => {
        //     return {hpt: 30}
        // })
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

        const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `Компании_от_${getToday()}.xlsx`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    } catch (error) {
        console.error('Error exporting data:', error);
    }
}

function getToday() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
}