import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'aos/dist/aos.css';
import AuthProvider from './context/AuthProvider';
import Home from './Components/Home/Home/Home';
import Login from './Components/Authentication/Login/Login';
import Registration from './Components/Authentication/Registration/Registration';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboad from './Components/Dashboard/Dashboard/Dashboad';
import PlaceORder from './Components/PlaceOrder/PlaceORder';
import Services from './Components/Services/Services';
import NotWork from './Components/Shared/NotWork/NotWork';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route  path="/login">
              <Login></Login>
            </Route>
            <Route  path="/registation">
              <Registration></Registration>
            </Route>
            <PrivateRoute  path="/placeOrder/:id">
              <PlaceORder></PlaceORder>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboad></Dashboad>
            </PrivateRoute>
            <Route path="/allProducts">
              <Services></Services>
            </Route>
            <Route path="*">
              <NotWork></NotWork>
            </Route>
          </Switch>
          
        </Router>

      </AuthProvider>

    </div>
  );
}

export default App;
