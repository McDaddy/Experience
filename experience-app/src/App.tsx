import * as React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { PageContainer } from './page-container';
import { HookClosure } from './react-hooks/hook-closure';
import { CounterRef } from './react-hooks/hook-useRef';

import 'antd/dist/antd.css';

function BasicExample() {
  return (
    <Router basename="/experience">
      <PageContainer>
        <Route exact={true} path="/experience" component={Home} />
        <Route path="/experience/react-hooks" component={About}>
          <Switch>
            <Route
              path="/experience/react-hooks/hook-closure"
              component={HookClosure}
            />
            <Route
              path="/experience/react-hooks/hook-useRef"
              component={CounterRef}
            />
          </Switch>
        </Route>
      </PageContainer>
      {/* <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>; */}
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topics({ match }: any) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact={true}
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }: any) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default BasicExample;
