import React from 'react';
import Router, {Route} from 'react-router';
import AuthenticateApp from './components/AuthApp';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Homepage.jsx';
import Dashboard from './components/Dashboard';
import RouterContainer from './services/RouterContainer'

var routers = (
	<Route handler={AuthenticateApp}>
		<Route name="login" handler={Login} />
		<Route name="signup" handler={SignUp} />
		<Route name="home" handler={Home} />
		<Route name="dashboard" handler={Dashboard}.
	</Route>
);

var router = Router.create({routes});
RouterContainer.set(router);

let jwt = localStorage.getItem('jwt');

if(jwt){
	LoginActions.loginUser(jwt);
}

router.run(function(Handler){
	React.render(<Handler />, document.getElementById('content'));
});
