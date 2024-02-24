import React from "react";
const Footer = () => {
	return (
		<div className="text-white">
		<div className=" flex justify-center  rounded-xl  w-full h-[27em] relative  bg-opacity-5 backdrop-filter bg-brown-50 backdrop-blur-md">
 			<div className="px-5">

				<div className="flex justify-center h-[6em] gap-3 p-3">

				        <img  className="w-[5em]" src={process.env.PUBLIC_URL + "/images/text/clgLogo.png"} alt="" />
						<div className="flex  items-center">
						<img  className="w-[1em] " src={process.env.PUBLIC_URL + "/images/text/X.png"} alt="" />
						</div>
						<div className="flex items-center">
						<img  className="w-[6em] h-[8em]" src={process.env.PUBLIC_URL + "/images/text/LOGoWhite.png"} alt="#" />

				</div>


				</div>
				

				<div className="px-5 py-3">
						<img src={process.env.PUBLIC_URL + "/images/text/address-plate.png"} alt="" />
				</div>
				     {/*  Social media icon */}
				<div className="flex gap-4 justify-center py-5"> 
				<a href="https://www.instagram.com/kalrav_dduc/"> <img  className="" src={process.env.PUBLIC_URL + "/images/text/insta.png"} alt="instagram" /></a> 
				<a href="#"><img  className="" src={process.env.PUBLIC_URL + "/images/text/twitter.png"} alt="" /></a>
				<a href="#"><img  className="" src={process.env.PUBLIC_URL + "/images/text/linkdin.png"} alt="" /></a>
				<a href="#"><img  className="" src={process.env.PUBLIC_URL + "/images/text/youtube.png"} alt="" /></a>

				</div>

				{/* divider */}

				<div className="py-2 flex justify-center">
				<img  className="" src={process.env.PUBLIC_URL + "/images/text/Line2.png"} alt="" />
				</div>

				{/* credits */}

				<div className=" text-sm text-[#b79563] ">
					<h2 className=" flex justify-center font-semibold">2024 KALRAV. All rights reserved.</h2>
					<p className="flex py-1 justify-center"> Designed by <span className="px-1 text-white ">  <a href="https://www.linkedin.com/in/harsh-vardhan-413100230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> Harsh Vardhan </a> </span></p>
					<p className="flex flex-wrap justify-center"> Developed by <span className="px-1 font-semibold text-white"> <a href="https://github.com/prashantjinwal"> Prashant Jinwal </a> </span> & <span className="px-1 font-semibold text-white"> <a href="https://www.linkedin.com/in/yash-chauhan-8a32b6231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> Yash </a> </span> </p>
				</div>

			</div>	
		</div>

	       			
		</div>
	);
};
export default Footer;
