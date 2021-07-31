import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Uploader from './components/Uploader';
import Transactions from './components/Transactions';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Budgee</Navbar.Brand>
            <Nav className="me-auto">
              <Link class="nav-link" to="/uploader">Upload</Link>
              <Link class="nav-link" to="/transactions">Transactions</Link>
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/uploader">
            <Uploader />
          </Route>
          <Route path="/transactions">
            <Transactions />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    </>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
