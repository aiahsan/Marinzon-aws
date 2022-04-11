import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/admin/dashboard";
import Services from "../pages/admin/services";
import Category from "../pages/admin/category";
import Item from "../pages/admin/item";
import MyServices from "../pages/admin/MyServices";
import Users from "../pages/admin/users";
import Bookings from "../pages/admin/bookings";
import Reports from "../pages/admin/reports";
import Reviews from "../pages/admin/Reviews";
import Profile from "../pages/admin/profile";

import Login from "../pages/login";
import PageNotFound from "../pages/404";
function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/category">
            <Category />
          </Route>
          <Route exact path="/item">
            <Item />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/myservices">
            <MyServices />
          </Route>
          <Route exact path="/reviews">
            <Reviews />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/reports">
            <Reports />
          </Route>

          <Route exact path="/bookings">
            <Bookings />
          </Route>
          <Route exact path="/home">
            <Dashboard />
          </Route>

          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
