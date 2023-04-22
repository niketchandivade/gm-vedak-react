import React, { useEffect, useState } from "react";
import UseTable from "./UseTable";
import {
    TableBody,
    TableCell,
    TableRow,
    Paper,
} from '@mui/material';
import axios from "axios";

const tableData = [
    {
        sr: "1",
        name: "Hon. Dr. Nandkumar. G. Vedak",
        designation: "Chairman",
    },
    {
        sr: "2",
        name: "Hon. Shri Unmesh. N. Vedak	",
        designation: "Secretary",
    },
    {
        sr: "3",
        name: "Hon. Mrs. Sanjivani N. Vedak",
        designation: "Member of trust",
    },
    {
        sr: "4",
        name: "Hon. Mrs. Sajani U. Vedak",
        designation: "Member of trust",    
    },
    {
        sr: "5",
        name: "Hon. Mrs. Janani P. Shrungi",
        designation: "Member of trust",
    },
    {
        sr: "6",
        name: "Hon. Shri. Yashwant Gholap",
        designation: "Member of trust",
    },
    {
        sr: "7",
        name: "Hon. Shri. Shriniwas Bendkhale",
        designation: "Member (Industrialist)",
    },
    {
        sr: "8",
        name: "Regional Director, WRo, AICTE",
        designation: "Ex-Officio",
    },
    {
        sr: "9",
        name: "Dr. S. N. Bansal",
        designation: "Member (Educationalist)",
    },
    {
        sr: "10",
        name: "Dr. R. N. Duche",
        designation: "Member (Educationalist)",
    },
    {
        sr: "11",
        name: "Director DTE Maharashtra",
        designation: "Ex-Officio",
    },
    {
        sr: "12",
        name: "Registrar University of Mumbai",
        designation: "Ex-Officio",
    },
    {
        sr: "13",
        name: "Dr. D. N. Jaiswal",
        designation: "Member secretary",
    }
    

    
]

const ManageKeyword = () => {

    let newPlayersData = [];


    const newHeadCells = [
        { id: "sr", label: "Sr. No.", align: "center", disableSorting: true },
        { id: "name", label: "Name of the member", align: "center", disableSorting: true },
        { id: "designation", label: "Designation", align: "center", disableSorting: true }
    ];

    const [playersData, setPlayersData] = useState(newPlayersData);


    const [filterFn,] = useState({
        fn: (items) => {
            return items;
        },
    });

    const { TblContainer, TblHead} = UseTable(
        playersData,
        newHeadCells,
        filterFn
    );

    useEffect(() => {
        const apiUrl = `https://api.npoint.io/20c1afef1661881ddc9c`;
        axios.get(apiUrl).then((res) => {
            const responseData = res.data || [];
            console.log(responseData)
            console.log("responseData :", responseData);
            setPlayersData(responseData.playerList);
        });
    }, [setPlayersData]);


    return (
        <>
            <Paper>
                    <TblContainer className='tblConten'>
                        <TblHead />

                        <TableBody className='fillExpand'>
                            {tableData?.map((record) => (
                                <TableRow key={record.sr}>
                                    <TableCell
                                        className='tablecell'
                                        align="center"
                                    >
                                        {record.sr}
                                    </TableCell>
                                    <TableCell
                                        className='tablecell'
                                        align="center"
                                    >
                                        {record.name}
                                    </TableCell>
                                    <TableCell
                                        className='tablecell'
                                        align="center"
                                    >
                                        {record.designation} 
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </TblContainer>
            </Paper>
        </>
    );
};

export default ManageKeyword;
