import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./redux";
import "./index.css";
import "./assets/style/index.scss";
import Sidebar from "./components/SideBar";
// import Menu from "./components/Menu";
import * as serviceWorker from "./serviceWorker";
import Home from "./page/Home";
import runtimeEnv from "@mars/heroku-js-runtime-env";

// const { REACT_APP_MIXPANEL_KEY } = runtimeEnv();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Sidebar>
          <Switch>
            <Route path="/torrent" component={() => <h1>Torrent</h1>} />
            <Route path="/nickname" component={() => <h1>Nickname</h1>} />
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
