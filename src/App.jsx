import React, { useEffect, useState } from "react";
import Homepage from "./Pages/Homepage";
import Itinary from "./Pages/Itinary";
import Competition from "./Pages/Competition";

import Sponsors from "./Pages/Sponsors";
import Loader from "./components/loader/Loader";
import Header from "./components/static/Header";
import Footer from "./components/static/Footer";
import { Route, Routes } from "react-router-dom";
const App = () => {

	const [isLoading, setIsLoading] = useState(true);

	// creating Async method to fetch
	useEffect(() =>{
		const FakeDataFetch = () =>{
			setTimeout(() =>{
				setIsLoading(false);
			},4500);
		}
		FakeDataFetch();
	},[])

	return (
		<>
			{isLoading && <Loader />}
			{!isLoading && (
				<>
					<Header />
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/Itinary" element={<Itinary />} />
						<Route path="/Competition" element={<Competition />} />
						<Route path="/Sponsors" element={<Sponsors />} />
					</Routes>
					<Footer />
				</>
			)}
		</>
	);
};
export default App;
