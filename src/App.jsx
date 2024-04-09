import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Itinary from "./Pages/Itinary";
import Competition from "./Pages/Competition";
import Register from "./Pages/Register";
import Sponsors from "./Pages/Sponsors";
import Loader from "./components/loader/Loader";
import Header from "./components/static/Header";
import Footer from "./components/static/Footer";
import Day from "./Resgister/Day";
import Day3 from "./Resgister/Day3";
import Day2 from "./Resgister/Day2";


const App = () => {


	const [isLoading, setIsLoading] = useState(true);

	// creating Async method to fetch
	useEffect(() =>{
		const FakeDataFetch = () =>{
			setTimeout(() =>{
				setIsLoading(false);
			},4700);
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
						<Route path="/Register" element={<Register/>} />
						<Route path="/Register/Day" element={<Day/>} />
						<Route path="/Register/Day2" element={<Day2/>} />
						<Route path="/Register/Day3" element={<Day3/>} />
							
					</Routes>
					<Footer />
				</>
			)}
		</>
	);
};
export default App;
