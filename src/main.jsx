import React from 'react';
import Router, {Route} from 'react-router';
import AuthenticateApp from './components/AuthApp';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Homepage.jsx';
import Dashboard from './components/Dashboard';

var routers = (
	<Route handler={AuthenticateApp}>
		<Route name="login" handler={Login} />
		<Route name="signup" handler={SignUp} />
		<Route name="home" handler={Home} />
		<Route name="dashboard" handler={Dashboard}.
	</Route>
	);

const message = () => {
	return 'Hello, I\'m now doing es6!!!';
}

console.log(message());	