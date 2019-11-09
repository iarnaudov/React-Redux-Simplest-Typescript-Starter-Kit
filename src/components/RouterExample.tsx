import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
  useParams,
  useLocation
} from "react-router-dom";

export default function RouterExample() {
  return (
    <Router>
      <div>
        <nav>
          <h3>-----------------------Router----------------------</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users/:type/:id?">
            <Users/>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <h3>-----------------------Router----------------------</h3>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  let match = useRouteMatch();
  let history = useHistory();
  let location = useLocation();
  let params = useParams();
  console.log(JSON.stringify(match));
  console.log(JSON.stringify(history));
  console.log(JSON.stringify(location));
  console.log(JSON.stringify(params));

  return (<div>
    <h2>Users</h2>
    <button onClick={() => history.push("/about")}>Redirect to about</button>
    </div>);
}