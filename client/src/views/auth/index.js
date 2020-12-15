import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";

import Signup from './signup';
import Login from './login';

const Auth = () => {
  let { path, url } = useRouteMatch();

  return (
    <React.Fragment>
      <nav>
        <ul>
          <li>
            <Link to={`${url}/signup`}>Signup</Link>
          </li>
          <li>
            <Link to={`${url}/login`}>Login</Link>
          </li>
        </ul>
      </nav>

      <Route path={`${path}/signup`}>
        <Signup />
      </Route>

      <Route path={`${path}/login`}>
        <Login />
      </Route>
    </React.Fragment>
  );
}

export default Auth