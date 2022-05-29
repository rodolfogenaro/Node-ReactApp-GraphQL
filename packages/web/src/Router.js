import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';


function Router() {
	return (
		<Routes>
			<Route path='/' element={<Home/>} />
			<Route path='/about-us' element={<AboutUs/>} />
		</Routes>
	);
}

export default Router;