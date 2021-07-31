import { useEffect, useState } from 'react';
import firebase from './Firebase/firebase';
import Table from 'react-bootstrap/Table';
import { Container, Row, Col } from 'react-bootstrap';

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
        <Container className="mt-4">
            <Row>
                <Col>
                    <Table borderless striped hover>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                transactions.map(transaction => {
                                    return (
                                        <tr>
                                            <td>{transaction.date}</td>
                                            <td>{transaction.amount}</td>
                                            <td>{transaction.desc}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}