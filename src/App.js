import { Switch, Route } from "react-router-dom";

import "./App.css";
import AppHeader from "./AppHeader";
import PageHome from "./PageHome";
import PageAbout from "./PageAbout";
import Page404 from "./Page404";
import PagePost from "./PagePost";

function App() {
  return (
    <div className="app-container">
      <AppHeader />
      <Switch>
        <Route path="/" exact>
          <PageHome />
        </Route>
        <Route path="/about">
          <PageAbout />
        </Route>
        <Route path="/posts/:postId">
          <PagePost />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
