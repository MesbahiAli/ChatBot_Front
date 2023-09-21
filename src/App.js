import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from "./common/components/Layout";
import ProtectedRoute from './routing/ProtectedRoute';
import _ from "lodash";
import Spinner from "./common/components/SpinnerCustomized";
import { useSelector } from "react-redux";
import Chat from './modules/Chatbot-RightBar/ui/Chat';
import Dashboard from "./common/components/dashboard/ui/Dashboard";
import NotFound from "./common/components/NotFound";
import Login from './modules/Authentification/components/Login';

const protectedRoutes = {
  // chatbot: { path: "/Chatbot45", requiredRoles: [], component: Login },
};

function App() {
  let isAuthenticated = localStorage.getItem("token"); 
  const state = useSelector(state => state);

  let loadingProps;
  let reducerHasLoading = _.pickBy(state, { isLoading: true });
  if (reducerHasLoading) {
    const target = _.keys(reducerHasLoading)[0];
    let nextProps = reducerHasLoading[target];
    if (target) {
      loadingProps = { ...nextProps };
    }
  }

  // les  route  de hors Authentication
  let routes = (
    <Layout>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  );

  //After login
  let content = (
    <Switch>
      <Route exact path="/Chatbot" component={Chat} />
      {protectedRoutes && Object.entries(protectedRoutes).map(([routeKey, routeProps]) => (
        <ProtectedRoute
          key={routeKey}
          roles={routeProps.requiredRoles}
          path={routeProps.path}
          component={routeProps.component}
        />
      ))}
      <Route exact path="/" render={() => <Redirect to="/Chatbot" />} />
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
