import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from "./common/components/Layout";
import ProtectedRoute from './routing/ProtectedRoute';
import _ from "lodash";
import Spinner from "./common/components/SpinnerCustomized";
import { useSelector } from "react-redux";
import ForbiddenComponent from './routing/ForbiddenComponent';

// import * as roles from "./routing/roles";
// import HomeBeforeLogin from './common/components/HomeBeforeLogin';
// import HomeAfterLogin from './common/components/HomeAfterLogin';



// const protectedRoutes = {
//   homeAfterLogin: { path: "/homeafterlogin", requiredRoles: [], component: HomeAfterLogin },
// };

 let isAuthenticated = localStorage.getItem("token"); 
function App() {
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

  // Routes for non-authenticated users
  let routes = (
    <Layout>
      <Switch>
        <Route exact path="/homebeforelogin" component={Layout} />
        <Route exact path="/" render={() => <Redirect to="/homebeforelogin" />} />
        <Route path="*" component={ForbiddenComponent} />
      </Switch>
    </Layout>
  );
  
  // Routes for authenticated users
  // let content = (
  //   <Switch>
  //     <Route exact path="/homeafterlogin" component={HomeAfterLogin} />
  //     {protectedRoutes && Object.entries(protectedRoutes).map(([routeKey, routeProps]) => (
  //       <ProtectedRoute
  //         key={routeKey}
  //         roles={routeProps.requiredRoles}
  //         path={routeProps.path}
  //         component={routeProps.component}
  //       />
  //     ))}
  //     <Route exact path="/" render={() => <Redirect to="/homeafterlogin" />} />

  //     <Route path="*" component={NotFound} />
  //   </Switch>
  // );

  // if (isAuthenticated) {
  //   routes = (
  //     <Layout>
  //       <Dashboard
  //         roles={protectedRoutes}
  //         content={content}
  //       />
  //     </Layout>
  //   );
  // }

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
