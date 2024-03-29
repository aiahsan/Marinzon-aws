import React from 'react';
import { BrowserRouter, HashRouter as Router, Route, Switch } from "react-router-dom";
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
import EOrders from "../pages/admin/ebookings";
import ECategory from '../pages/admin/ecategory';
import EProducts from '../pages/admin/eproduct';
import Login from "../pages/login";
import Coupons from "../pages/admin/coupons";
import PageNotFound from "../pages/404";
import { useDispatch, useSelector } from "react-redux";
import { IReduxStore } from "../interfaces/data/reduxStore";
import Loader from "../components/_update/loader";
import Toast from "../components/_update/toast";
import { messageAction } from '../redux/actionMethodes/message';
import Register from '../pages/register';
import Store from '../pages/admin/Bookings/store'
import Documents from '../pages/admin/Bookings/document'
import Bank from '../pages/admin/Bookings/bank'
import Vat from '../pages/admin/Bookings/vat'
import Application from '../pages/admin/Bookings/application'
import MyApplication from '../pages/admin/myapplication';
import { GetDocument } from '../functions/Document';
import Vendors from '../pages/admin/vendors';
function Routes() {

  const User = useSelector((x: IReduxStore) => x.User);
  const Loading = useSelector((x: IReduxStore) => x.Loading);
  const Message = useSelector((x: IReduxStore) => x.Message);
  const dispatch=useDispatch();
  React.useEffect(()=>{
    if(Message!=null)
    {
      setTimeout(() => {
        dispatch(messageAction());
      }, 5000);
    }
  },[Message])

  React.useEffect(() => {
    if(User!=null)
    {
                 //@ts-ignore
    dispatch(GetDocument());
    
    }
  }, [User]);
  return (
    <BrowserRouter>
      <Router>
        <Switch>
       
          {User !== null ? <>
            <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/myapplication">
          <MyApplication />
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
          <Route exact path="/vendors">
            <Vendors />
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
          <Route exact path="/ecategory">
            <ECategory />
          </Route>

          <Route exact path="/eproducts">
            <EProducts />
          </Route>
          <Route exact path="/eorders">
            <EOrders />
          </Route>
          <Route exact path="/bookings">
            <Bookings />
          </Route>
          <Route exact path="/coupons">
          <Coupons />
          </Route>
          <Route exact path="/edit/storedetails">
          <Store />
          </Route>
          <Route exact path="/edit/documents">
          <Documents />
          </Route>
          <Route exact path="/edit/bank">
          <Bank />
          </Route>
          <Route exact path="/edit/vat">
          <Vat />
          </Route>
          <Route exact path="/edit/application">
          <Application />
          </Route>
          <Route exact path="/">
            <Dashboard   />
          </Route>
          </>:<>
          <Route exact path="/">
          <Login />
          </Route>
          <Route exact path="/register">
          <Register />
          </Route>
          
          </>}
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>

        {Loading === true ? <Loader /> : <></>}
       
       {Message != null &&Message.type==3? <Toast message={Message} /> : <></>}
    </BrowserRouter>
  );
}

export default Routes;
