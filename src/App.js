import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Super from './components/Super';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super">Superannuation</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/super">
            <Super />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
