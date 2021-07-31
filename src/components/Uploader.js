import { useState } from 'react';
import firebase from './Firebase/firebase';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';

export default function Uploader() {

    const [uploadedFile, setUploadedFile] = useState('');
    const [isUploading, setIsUploading] = useState(false);


    const storage = firebase.storage();

    const upload = (e) => {
        // console.log(e.target.files[0]);
        // const uploadedFile = e.target.files[0]
        // setUploadedFile(file => (uploadedFile))

        // two options - can have 1 upload function that uploads as soon as file is selelected https://dev.to/itnext/how-to-do-image-upload-with-firebase-in-react-cpj
        // or    split in two
        // https://www.geeksforgeeks.org/how-to-upload-files-in-firebase-storage-using-reactjs/
        // https://lo-victoria.com/introduction-to-firebase-storage-uploading-files
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(uploadedFile)
        // get our new errors
        //firebase upload here.
        if (uploadedFile == null)
            return;
        setIsUploading(true)
        storage.ref(`/${uploadedFile.name}`)
            .put(uploadedFile)
            .then(() => {
                setIsUploading(false)
            })
        // .on("state_changed", alert("success"), alert);

    }

    return (
        <>
            <Container className="mt-4">
                <Form onSubmit={handleSubmit}>
                    <Row xs="auto" className="justify-content-md-center">
                        <Col>
                            <Form.Group controlId="formFileLg" className="mb-3">
                                {/* <Form.Label>Large file input example</Form.Label> */}
                                <Form.Control type="file" size="lg" onChange={e => setUploadedFile((file) => e.target.files[0])} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit" size="lg" disabled={isUploading}>
                                {isUploading ? 'Uploading…' : 'Upload'}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>

            {/* <input
                type="file"
                accept=".csv"
            /> */}

            {



                //             onChange={upload}
                //         />
                //         <label htmlFor="contained-button-file">
                //             <Button variant="contained" color="primary" component="span">
                //                 Upload
                //             </Button>
                //         </label> */
            }
        </>
    )
}