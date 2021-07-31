import { useEffect, useState } from 'react';
import firebase from './Firebase/firebase';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

export default function Transactions() {
    const [transactions, setTransactions] = useState([]);
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
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        // <TableContainer component={Paper}>
        //     <Table className={classes.table} aria-label="simple table">
        //         <TableHead>
        //             <TableRow>
        //                 <TableCell>Date</TableCell>
        //                 <TableCell>Description</TableCell>
        //                 <TableCell>Amount</TableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {
        //                 transactions.map(transaction => {
        //                     return (
        //                         <TableRow key={transaction.key}>
        //                             <TableCell>{transaction.date}</TableCell>
        //                             <TableCell>{transaction.amount}</TableCell>
        //                             <TableCell>{transaction.desc}</TableCell>
        //                         </TableRow>
        //                     )
        //                 })
        //             }
        //         </TableBody>
        //     </Table>
        // </TableContainer>
    )
}