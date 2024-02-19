import React from "react";
import Homepage from "./Pages/Homepage";
import Itinary from "./Pages/Itinary";
import Competition from "./Pages/Competition";

import Sponsors from "./Pages/Sponsors";

import Header from "./components/static/Header";
import Footer from "./components/static/Footer";
import { Route, Routes } from "react-router-dom";
const App = () => {
	return (
		<>
			<Header />
			<Routes>
				
				{/* This route will direct to the homepage  */}
				<Route path="/" element={<Homepage />} />
				{/* This route will direct to the Itinary  */}
				<Route path="/Itinary" element={<Itinary />} />
				{/* This route will direct to the Competition  page  */}
				<Route path="/Competition" element={<Competition />} />
				{/* This page will direct to the Sponsors page  */}
				<Route path="/Sponsers" element={<Sponsors />} />
				
			</Routes>
			<Footer />
		</>
	);
};
export default App;
