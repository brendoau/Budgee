import { useEffect, useState } from 'react';
import { db } from './Firebase/firebase';
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import Table from 'react-bootstrap/Table';
import { Container, Row, Col, Pagination, Badge, Form, Button } from 'react-bootstrap';
// import ReactECharts from 'echarts-for-react';

export default function Transactions() {
    const [transactions, setTransactions] = useState([]);

    //fetch transactions
    useEffect(() => {
        fetchTransactions();
    }, []);

    async function updateCategory(id) {
        console.log(id)
        const ref = doc(db, "anztransactions", id);

        // Set the "capital" field of the city 'DC'
        await updateDoc(ref, {
            category: 'Dummy'
        });
    }

    const fetchTransactions = async () => {
        const transactionsArray = [];

        const querySnapshot = await getDocs(collection(db, "anztransactions"));

        querySnapshot.forEach((doc) => {
            const { date, desc, amount } = doc.data();
            transactionsArray.push({
                key: doc.id,
                date: date,
                desc: desc,
                amount: amount,
                value: amount,
                name: desc
            })
        });

        setTransactions(transactionsArray)
    }


    //pagination
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    //viz
    const options = {
        title: {
            text: 'Spend by Category',
            // subtext: '纯属虚构',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        // legend: {
        //     top: '5%',
        //     left: 'center'
        // },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '50%',
                data: transactions,
                // [
                // { value: 1048, name: '搜索引擎' },
                // { value: 735, name: '直接访问' },
                // { value: 580, name: '邮件营销' },
                // { value: 484, name: '联盟广告' },
                // { value: 300, name: '视频广告' }
                // ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    return (
        <Container className="mt-4">
            <Row>
                {/* <ReactECharts
                    option={options}
                // theme={"dark"}
                /> */}
            </Row>
            <Row>
                <Col>
                    <Table borderless striped hover >
                        {/* <Table borderless striped hover variant="dark" > */}
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                transactions.map(transaction => {
                                    return (
                                        <tr>
                                            <td>{transaction.key}</td>
                                            <td>{transaction.date}</td>
                                            <td>{transaction.desc}</td>
                                            <td>{transaction.amount}</td>
                                            <td>
                                                <Form.Select aria-label="Floating label select example" size="lg">
                                                    <option>Category</option>
                                                    <option value="1">Food</option>
                                                    <option value="2">Car</option>
                                                    <option value="3">House</option>
                                                    <option value="4">Entertainment</option>
                                                </Form.Select>
                                            </td>
                                            <td>
                                                <Button variant="primary" type="submit" size="lg" onClick={() => updateCategory(transaction.key)}>Update</Button>
                                            </td>
                                            {/* <td>
                                                <div>
                                                    <Badge pill bg="info">
                                                        Info
                                                    </Badge>{' '}
                                                    <Badge pill bg="dark">
                                                        Dark
                                                    </Badge>
                                                </div>
                                            </td> */}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <div>
                <Pagination>{items}</Pagination>
            </div>
        </Container>
    )
}