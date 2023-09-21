import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from "./common/components/Layout";
import ProtectedRoute from './routing/ProtectedRoute';
import _ from "lodash";
import Spinner from "./common/components/SpinnerCustomized";
import { useSelector } from "react-redux";
import ForbiddenComponent from './routing/ForbiddenComponent';
import Auth from './modules/Authentification/ui/Auth';
import Chat from './modules/Chatbot-RightBar/ui/Chat';
import Dashboard from "./common/components/dashboard/ui/Dashboard";
import NotFound from "./common/components/NotFound";

// import * as roles from "./routing/roles";

const protectedRoutes = {
  homeAfterLogin: { path: "/homeafterlogin", requiredRoles: [], component: Auth },
};
let isAuthenticated = localStorage.getItem("token"); 
function App() {
  const state = useSelector(state => state);

  let loadingProps;
  let reducerHasLoading = _.pickBy(state, (value, key) => {
    return value.isLoading === true && key !== "chat";
});
  if (reducerHasLoading) {
    const target = _.keys(reducerHasLoading)[0];
    let nextProps = reducerHasLoading[target];
    if (target) {
      loadingProps = { ...nextProps };
    }
  }

  // Routes for non-authenticated users
  let routes = (
    <Layout>
      <Switch>
        <Route exact path="/homebeforelogin" component={Auth} />
        <Route exact path="/" render={() => <Redirect to="/homebeforelogin" />} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  );
  //After login
  let content = (
    <Switch>
      <Route exact path="/homeafterlogin" component={Chat} />
      {protectedRoutes && Object.entries(protectedRoutes).map(([routeKey, routeProps]) => (
        <ProtectedRoute
          key={routeKey}
          roles={routeProps.requiredRoles}
          path={routeProps.path}
          component={routeProps.component}
        />
      ))}
      <Route exact path="/" render={() => <Redirect to="/homeafterlogin" />} />
      <Route path="*" component={NotFound} />
    </Switch>
  );

  if (isAuthenticated) {
    routes = (
      <Layout>
        <Dashboard
          roles={protectedRoutes}
          content={content}
        />
      </Layout>
    );
  }

  return (
    <div>
      {loadingProps?.isLoading ? (
        <Spinner />
      ) : (
        <></>
      )}
      {routes}
    </div>
  );
}

export default App;
