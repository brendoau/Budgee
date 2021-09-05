import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Uploader from './components/Uploader';
import Transactions from './components/Transactions';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
// import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <Router>
        <Navbar className="sticky-top">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src="/budgee-logo.png"
                width="30"
                height="30"
              // className="d-inline-block align-top"
              />{' '}
              Budgee
            </Navbar.Brand>
            <Nav className="me-auto">
              <Link class="nav-link" to="/uploader">Upload</Link>
              <Link class="nav-link" to="/transactions">Transactions</Link>
              {/* TODO - Toggle for obfuscate data and numbers  */}
              {/* (<div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch1">
                <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
              </div>) */}
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
  return (
    <>
      <h2>Home</h2>
      <Form />
      {/* <TodoList /> */}
    </>
  )
}

export default App;
