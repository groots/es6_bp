/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
	//import React from 'react';
	// import Router, {Route} from 'react-router';
	// import AuthenticateApp from './components/AuthApp';
	// import Login from './components/Login';
	// import SignUp from './components/SignUp';
	// import Home from './components/Homepage';
	// import Dashboard from './components/Dashboard';
	// import RouterContainer from './services/RouterContainer';

	// var routers = (
	// 	<Route handler={AuthenticateApp}>
	// 		<Route name="login" handler={Login} />
	// 		<Route name="signup" handler={SignUp} />
	// 		<Route name="home" handler={Home} />
	// 		<Route name="dashboard" handler={Dashboard} />
	// 	</Route>
	// );

	// var router = Router.create({routes});
	// RouterContainer.set(router);

	// let jwt = localStorage.getItem('jwt');

	// if(jwt){
	// 	LoginActions.loginUser(jwt);
	// }

	// router.run(function(Handler){
	// 	React.render(<Handler />, document.getElementById('content'));
	// });
	document.write('Hi George');
	console.log("App loaded again and again");

/***/ }
/******/ ]);