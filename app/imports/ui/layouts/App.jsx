import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import ListStuffAdmin from '../pages/ListStuffAdmin';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import ListLeaderboard from '../pages/ListLeaderboard';
import ListStuff from '../pages/ListStuff';
import AddStuff from '../pages/AddStuff';
import ListLeaderboardAdmin from '../pages/ListLeaderboardAdmin';
import Create from '../pages/Create';
import UserCalendar from '../pages/UserCalendar';
import Profile from '../pages/Profile';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="app-style">
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <VisitorRoute path="/signin" component={Signin}/>
              <VisitorRoute path="/signup" component={Signup}/>
              <ProtectedRoute path="/create" component={Create}/>
              <ProtectedRoute path="/listleaderboard" component={ListLeaderboard}/>
              <ProtectedRoute path="/list" component={ListStuff}/>
              <ProtectedRoute path="/add" component={AddStuff}/>
              <BothRoute path="/user-profile" component={Profile}/>
              <BothRoute path="/usercalendar" component={UserCalendar}/>
              <AdminProtectedRoute path="/admin" component={ListStuffAdmin}/>
              <AdminProtectedRoute path="/leaderboardadmin" component={ListLeaderboardAdmin}/>
              <BothRoute path="/signout" component={Signout}/>
              <Route path="/notfound" component={NotFound}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      const isUser = Roles.userIsInRole(Meteor.userId(), 'admin');
      return (isLogged && !isUser) ?
          (<Component {...props} />) :
          (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
      );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
          return (isLogged && isAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

const BothRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          return isLogged ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

const VisitorRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() === null;
          return isLogged ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/notfound', state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

/** Require a component and location to be passed to each ProtectedRoute. */
BothRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

/** Require a component and location to be passed to each ProtectedRoute. */
VisitorRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

export default App;
