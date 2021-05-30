import Button from '@material-ui/core/Button';

function Home() {

    const element = (
        <div>
            <h2>Uploader</h2>
            <label for="upload">Choose a file to upload:</label>
            <input type="file" id="upload" name="upload"></input>

            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </div>
    );

    return element;
}

export default Home;
