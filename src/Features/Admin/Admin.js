import { Button } from '@mui/material'
import React, { useState } from 'react'
import * as XLSX from 'xlsx';

import { DataGrid } from '@mui/x-data-grid';

const Admin = () => {

    let [tableData, setTableData] = useState([]);
    let [columnData, setColumnData] = useState([]);

    const handleChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (evt) => {
            /* Parse data */
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            processData(data);
        };
        reader.readAsBinaryString(file);
    }

    const processData = (csvDataString) => {
        const csvRows = csvDataString.split(/\r\n|\n/);
        const headers = csvRows[0].split(/,/);

        const list = [];

        for (let i = 1; i < csvRows.length; i++) {
            let cols = csvRows[i].split(',');
            let obj = {};
            for (let j = 0; j < cols.length; j++) {
                obj[headers[j]] = cols[j];
            }
            list.push(obj);
        }
        console.log(list);
        setTableData(list);
        setColumnData(generateColumnData(headers));

    }

    const generateColumnData = (header) => {

        let list = [];

        header.forEach(elm => {
            list.push({
                field: elm,
                headerName: elm,
                sortable: true,
                width: 200,
            })
        });

        return list;
    }

    const generateRowId = () => {
        return Math.random();
    }


    return (
        <>
            <div>
                <input
                    accept=".csv"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    type="file"
                    onChange={handleChange}
                />
                <label htmlFor="raised-button-file">
                    <Button variant="raised" component="span">
                        Upload
                    </Button>
                </label>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={tableData}
                    columns={columnData}
                    pageSize={20}
                    rowsPerPageOptions={[20]}
                    getRowId={generateRowId}
                />
            </div>
        </>

    )
}

export default Admin