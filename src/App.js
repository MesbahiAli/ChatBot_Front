import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from "./common/components/dashboard/Layout";
import ProtectedRoute from './routing/ProtectedRoute';
import _ from "lodash";
import Spinner from "./common/components/SpinnerCustomized";
import { useSelector } from "react-redux";
import Chat from './modules/Chatbot-RightBar/ui/Chat';
import Dashboard from "./common/components/dashboard/ui/Dashboard";
import Login from './modules/Authentification/components/Login';
import NotFound from "./routing/NotFound";
import Home from './modules/Home/components/Home';
import CategoryUi from './modules/CategoryForm/ui/Category';
// import CategoryComponent from './modules/Category/components/Categorie';
// import Categorie from '../modules/Category/ui/Category.jsx';

const protectedRoutes = {
  chatbot: { path: "/chatbot", requiredRoles: [], component: Chat },
  home: { path: "/home", requiredRoles: [], component: Home },
  Category: { path: "/category", requiredRoles: [], component: CategoryUi},
};


function App() {
  let isAuthenticated = localStorage.getItem("token"); 
  const state = useSelector(state => state);

  const isLoading = useSelector(state => state.Summarize.loading);
  // const uploading = useSelector(state => state);

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
        <Route exact path="/login" component={Chat} />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="*" component={Chat} />
      </Switch>
    </Layout>
  );
  //After login
  let content = (
    <Switch>
      {protectedRoutes && Object.entries(protectedRoutes).map(([routeKey, routeProps]) => (
        <ProtectedRoute
          key={routeKey}
          roles={routeProps.requiredRoles}
          path={routeProps.path}
          component={routeProps.component}
        />
      ))}
      <Route exact path="/" render={() => <Redirect to="/Chatbot" />} />
      <Route path="*" component={Chat} />
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
      {isLoading ? <Spinner /> : null}
      {routes}
    </div>
  );
}

export default App;
