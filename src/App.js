
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Signin from './Components/Signin/Signin';
import MyOrders from './Components/MyOrders/MyOrders';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import AddService from './Components/AddService/AddService';
import Services from './Components/Services/Services';
import AuthProvider from './Context/AuthProvider';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Order from './Components/Order/Order';

function App() {
  return (
    <div >
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/order/:id'>
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path='/services'>
              <Services></Services>
            </PrivateRoute>
            <Route path='/signin'>
              <Signin></Signin>
            </Route>
            <Route path='/orders'>
              <MyOrders></MyOrders>
            </Route>
            <Route path='/addservice'>
              <AddService></AddService>
            </Route>
            <Route path='/manageorders'>
              <ManageOrders></ManageOrders>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
