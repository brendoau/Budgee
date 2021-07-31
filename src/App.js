import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Uploader from './components/Uploader';
import Transactions from './components/Transactions';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>

      <Link class="nav-link" to="/">Home</Link>
      <Link class="nav-link" to="/uploader">Uploader</Link>
      <Link class="nav-link" to="/transactions">Transactions</Link>

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
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
