import { Button } from '@mui/material'
import React, { useState } from 'react'
import * as XLSX from 'xlsx';

const Admin = () => {

    let [tableData, setTableData] = useState([]);
    let [objProperties, setObjProperties] = useState([]);
    let [tableHeaders, setTableHeaders] = useState([]);

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

    const getObjProps = (headers) => {
        const temp = [];
        headers.map(element => {
            let val = element.toLowerCase();
            val = val.split(" ").join('_');
            console.log(val);
            temp.push(val);
        });
        console.log(temp);
        return temp;
    }

    const processData = (csvDataString) => {
        const csvRows = csvDataString.split(/\r\n|\n/);
        const headers = csvRows[0].split(/,/);
        const list = [];
        const temp = getObjProps(headers);
        for (let i = 1; i < csvRows.length; i++) {
            let cols = csvRows[i].split(',');
            let obj = {};
            for (let j = 0; j < cols.length; j++) {
                obj[temp[j]] = cols[j];
            }
            list.push(obj);
        }
        setTableData(list);
        setTableHeaders(headers);
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
            <div className='flex justify-center m-4'>
                <table className='border border-solid'>
                    <thead className='divide-y bg-slate-500 text-amber-50'>
                        <tr>
                            {tableHeaders.map((e, i) => {
                                return <th key={i} className='p-4'>{e}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((e, i) => {
                            return (<tr key={generateRowId()} className='even:bg-slate-200'>
                                <td className='p-2 text-sm lowercase'>{e.serial_number}</td>
                                <td className='p-2 text-sm lowercase'>{e.employee_markme}</td>
                                <td className='p-2 text-sm lowercase'>{e.description}</td>
                                <td className='p-2 text-sm lowercase'>{e.company_name}</td>
                                <td className='p-2 text-sm lowercase'>{e.leave}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default Admin