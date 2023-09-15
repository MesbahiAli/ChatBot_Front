 import React, { Suspense } from "react";
 import ReactDOM from "react-dom";
 import "./index.css";
 import App from "./App";
 import reportWebVitals from "./reportWebVitals";
 import configureStore from "./common/state/Store";
 import { BrowserRouter } from "react-router-dom";
 import { Provider } from "react-redux";
 import Spinner from "./common/components/SpinnerCustomized";

 const store = configureStore();

 ReactDOM.render(
   <Provider store={store}>
     <Suspense fallback={<Spinner />}>
       <BrowserRouter>
         <App />
       </BrowserRouter>
     </Suspense>
   </Provider>,
   document.getElementById("root")
 );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//
/*import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import FormAuth from "./modules/Authentification/components/FormAuth";
import NotFound from './common/components/NotFound';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/authentification" component={FormAuth} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);*/
