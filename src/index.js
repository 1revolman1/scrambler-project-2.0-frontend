import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./redux";
import "./index.css";
import "./assets/style/index.scss";
import Sidebar from "./components/SideBar"
// import Menu from "./components/Menu";
import * as serviceWorker from "./serviceWorker";
import Home from "./page/Home";
import Transfers from "./page/Transfers";
import runtimeEnv from "@mars/heroku-js-runtime-env";

// const { REACT_APP_MIXPANEL_KEY } = runtimeEnv();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
         <Router>
           <Sidebar>
             <Switch>        
            <Route path="/transfers" component={Transfers} />
            <Route exact path="/" component={Home} />
          </Switch>
           </Sidebar>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
