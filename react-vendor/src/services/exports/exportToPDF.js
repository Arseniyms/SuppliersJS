import { jsPDF } from 'jspdf';
import { autoTable } from 'jspdf-autotable'

export const exportToPdf = async () => {
    const response = await fetch('http://127.0.0.1:9090/users/');
    const data = await response.json(); // Assuming the data is in JSON format

    const doc = new jsPDF("landscape");

    doc.setFontSize(20);
    doc.text('My PDF Report', 14, 22);

    doc.setFontSize(12);

    const headers = Object.keys(data[0]);
    const rows = data.map(item => headers.map(header => item[header]));

    autoTable(doc, {
        head: [headers],
        body: rows,
        startY: 30,
    });
    doc.save('data.pdf');
};