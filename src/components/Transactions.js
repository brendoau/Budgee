import { useState } from 'react';
import firebase from './Firebase/firebase';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

export default function Transactions() {

    const [transactions, setTransationc] = useState('');

    const db = firebase.firestore();

    db.collection("anztransactions").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    });

    return (

        <Container maxWidth="sm">
            <Box height="100vh" display="flex" justifyContent="center" alignItems="center">

            </Box>
        </Container>)
}
