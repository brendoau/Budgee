import { useEffect, useState } from 'react';
import firebase from './Firebase/firebase';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const classes = useStyles();
    const db = firebase.firestore();

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        const transactionsArray = [];
        const data = await db.collection("anztransactions").get();
        data.docs.forEach((doc) => {
            const { date, desc, amount } = doc.data();
            transactionsArray.push({
                key: doc.id,
                date: date,
                desc: desc,
                amount: amount
            })
        })
        setTransactions(transactionsArray)
    }

    return (
        <Container maxWidth="sm">
            <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                transactions.map(transaction => {
                                    return (
                                        <TableRow key={transaction.key}>
                                            <TableCell>{transaction.date}</TableCell>
                                            <TableCell>{transaction.amount}</TableCell>
                                            <TableCell>{transaction.desc}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>)
}