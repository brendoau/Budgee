import { useState } from 'react';
import { Button, Form, Row, Col, Container, FloatingLabel } from 'react-bootstrap';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from './Firebase/firebase'

export default function Uploader() {

    const [uploadedFile, setUploadedFile] = useState('');
    const [isUploading, setIsUploading] = useState(false);

    const handleSubmit = e => {
        e.preventDefault()
        
        if (uploadedFile == null)
            return;
        
        setIsUploading(true)

        // Create a storage reference from our storage service
        const storageRef = ref(storage, `${uploadedFile.name}`);

        // Upload the file
        const uploadTask = uploadBytesResumable(storageRef, uploadedFile)

        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                });
                setIsUploading(false)
            }
        );
    }

    return (
        <>
            {/* <Container className="mt-4">
                <Form onSubmit={handleSubmit}>
                    <Row xs="auto" className="justify-content-md-center">
                        <Col>
                            <Form.Group controlId="formFileLg" className="mb-3">
                                <Form.Control type="file" size="lg" onChange={e => setUploadedFile((file) => e.target.files[0])} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Select aria-label="Floating label select example" size="lg">
                                <option>Type</option>
                                <option value="1">ANZ</option>
                                <option value="2">AusSuper</option>
                                <option value="3">Bankwest</option>
                                <option value="4">Coinbase</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit" size="lg" disabled={isUploading}>
                                {isUploading ? 'Uploading…' : 'Upload'}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}