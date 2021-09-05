import React, { useState } from 'react';
import { db } from './Firebase/firebase';
import { collection, addDoc } from "firebase/firestore";

export default function Form() {
    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };
    const createTodo = async () => {
        try {
            // Add a new document with a generated id.
            const docRef = await addDoc(collection(db, "todos"), {
                title,
                complete: false,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }; return (
        <div>
            <input type="text" onChange={handleOnChange} value={title} />
            <button onClick={createTodo}>Add Todo</button>
        </div>
    );
}