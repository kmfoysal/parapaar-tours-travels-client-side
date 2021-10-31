import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddPackage from './components/AddPackage/AddPackage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home.js';
import Login from './components/Login/Login';
import ManageAllBookings from './components/ManageAllBookings/ManageAllBookings';
import MyBookings from './components/MyBookings/MyBookings';
import NotFound from './components/NotFound/NotFound';
import PackageBooking from './components/PackageBooking/PackageBooking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="">
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
          <PrivateRoute path='/myBookings'>
            <MyBookings></MyBookings>
          </PrivateRoute>
          <PrivateRoute path='/manageAllBookings'>
            <ManageAllBookings></ManageAllBookings>
          </PrivateRoute>
          <PrivateRoute path='/packageBooking/:packageId'>
            <PackageBooking></PackageBooking>
          </PrivateRoute>
          <PrivateRoute path='/addPackage'>
            <AddPackage></AddPackage>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
