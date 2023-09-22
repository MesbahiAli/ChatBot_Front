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
import Login from './modules/Authentification/components/Login';
import NotFound from "./routing/NotFound";
import config from './common/Config';


const protectedRoutes = {
  // chatbot: { path: "/Chatbot45", requiredRoles: [], component: Login },
};


function App() {
  let isAuthenticated = localStorage.getItem("token"); 
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

  // les  route  de hors Authentication
  let routes = (
    <Layout>
      <Switch>
        <Route exact path={config.frontRouting+"/login"} component={Login} />
        <Route exact path={config.frontRouting+"/"} render={() => <Redirect to={config.frontRouting+"/login"} />} />
        <Route path={config.frontRouting+"/*"} component={NotFound} />
      </Switch>
    </Layout>
  );

  //After login
  let content = (
    <Switch>
      <Route exact path={config.frontRouting+"/chatBot"} component={Chat} />
      {protectedRoutes && Object.entries(protectedRoutes).map(([routeKey, routeProps]) => (
        <ProtectedRoute
          key={routeKey}
          roles={routeProps.requiredRoles}
          path={routeProps.path}
          component={routeProps.component}
        />
      ))}
      <Route exact path={config.frontRouting+"/"} render={() => <Redirect to={config.frontRouting+"/chatBot"} />} />
      <Route path={config.frontRouting+"/*"} component={NotFound} />
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
