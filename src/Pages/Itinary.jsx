// import React from "react";
import "../stylesheet/itinary.css"
import table from "../assets/table";
import TableContent from "../components/dynamic/TableContent";


function Itinary() {
	return (
		<>
		<div className="page-back lg:mt-5 ">
		
		<div className=" lg:flex lg:justify-center lg:gap-5 ">
			{
				table.map((defo) =>(
					<TableContent src={defo.src} title = {defo.title} key={defo.key} />
				))
			}
			
		</div>


	 {/*  Divider */}
	<div className=" flex justify-center py-3 px-6">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
	</div>


		</div>
		</>
	);
}

export default Itinary;
