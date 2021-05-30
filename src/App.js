import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Uploader from './components/Uploader';

function App() {
  return (
    <Router>

      <Link class="nav-link" to="/">Home</Link>
      <Link class="nav-link" to="/uploader">Uploader</Link>

      <Switch>
        <Route path="/uploader">
          <Uploader />
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
