import LayoutPage from "./LayoutPage";
import { Link, Switch, Route, Redirect } from "react-router-dom";

function PageAbout() {
  return (
    <LayoutPage>
      <h2>About เกี่ยวกับเรื่องของหมู่เฮา</h2>
      <p><Link to="/about/myself">Myself</Link></p>
      <p><Link to="/about/history">History</Link></p>
      <Switch>
        <Route path="/about/myself">
          <h3>Myself</h3>
          <p>เรื่องส่วนตัว</p>
        </Route>
        <Route path="/about/history">
          <h3>History</h3>
          <p>ประวัติส่วนตัว</p>
        </Route>
        <Route to="/about">
            <Redirect to="/about/myself" />
        </Route>
      </Switch>
    </LayoutPage>
  );
}

export default PageAbout;
