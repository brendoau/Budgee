import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none',
    }
}));

export default function Uploader() {

    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                        Upload
                    </Button>
                </label>
            </Box>
        </Container>)
}
