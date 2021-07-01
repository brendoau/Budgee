import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import storage from './Firebase/firebase';

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none',
    }
}));

export default function Uploader() {

    const [uploadedFile, setUploadedFile] = useState('');

    const upload = (e) => {
        console.log(e.target.files[0]);
        const uploadedFile = e.target.files[0]
        setUploadedFile(file => (uploadedFile))

        // two options - can have 1 upload function that uploads as soon as file is selelected https://dev.to/itnext/how-to-do-image-upload-with-firebase-in-react-cpj
        // or split in two
        // https://www.geeksforgeeks.org/how-to-upload-files-in-firebase-storage-using-reactjs/
        // https://lo-victoria.com/introduction-to-firebase-storage-uploading-files

        //firebase upload here.
        if (uploadedFile == null)
            return;
        storage.ref(`/images/${uploadedFile.name}`).put(uploadedFile)
            .on("state_changed", alert("success"), alert);
    }


    const classes = useStyles();

    return (

        <Container maxWidth="sm">
            <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
                <input
                    accept="*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={upload}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                        Upload
                    </Button>
                </label>
            </Box>
        </Container>)
}
