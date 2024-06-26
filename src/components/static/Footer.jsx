import React from "react";
import "./footer.css"
const Footer = () => {
	return (
		<div className="text-white">
		<div className=" flex justify-center  rounded-xl  w-full h-[27em] lg:h-[36em] relative  bg-opacity-5 backdrop-filter bg-brown-50 backdrop-blur-md lg:block">
 			<div className="px-5">

				<div className="flex justify-center h-[6em] lg:h-[8em] gap-3 lg:gap-6 p-3 lg:justify-end lg:pr-[20em]">

				        <img  className="w-[5em] lg:w-[7em]" src={process.env.PUBLIC_URL + "/images/text/clgLogo.png"} alt="" />
						<div className="flex  items-center">
						<img  className="w-[1em]  " src={process.env.PUBLIC_URL + "/images/text/X.png"} alt="" />
						</div>
						<div className="flex items-center">
						<img  className="w-[6em] h-[8em] lg:w-[8em] lg:h-[10em]" src={process.env.PUBLIC_URL + "/images/text/LOGoWhite.png"} alt="#" />

				</div>


				</div>
				

				<div className=" address px-5 py-3 lg:pl-[20em]">
						{/* <img src={process.env.PUBLIC_URL + "/images/text/address-plate.png"} alt="" /> */}
						<h2 className=" text-3xl lg:text-6xl">DDUC</h2>
						<p className="text-sm lg:text-2xl">DEEN DAYAL UPADHYAYA COLLEGE. DELHI UNIVERSITY</p>
						<p className="text-sm lg:text-2xl">AZAD HIND FAUJ MARG, SECTOR-3</p>
						<p className="text-sm lg:text-2xl">Dwarka, New Delhi, 110078</p>
				</div>
				     {/*  Social media icon */}
				<div className="flex gap-4 justify-center py-5 lg:gap-[8em]"> 
				<a href="https://www.instagram.com/kalrav_dduc/"> <img  className="lg:w-[6em]" src={process.env.PUBLIC_URL + "/images/text/insta.png"} alt="instagram" /></a> 
				<a href="#"><img  className="lg:w-[6em]" src={process.env.PUBLIC_URL + "/images/text/twitter.png"} alt="" /></a>
				<a href="https://www.linkedin.com/in/kalrav-dduc-4642b32b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img  className="lg:w-[6em]" src={process.env.PUBLIC_URL + "/images/text/linkdin.png"} alt="" /></a>
				<a href="#"><img  className="lg:w-[6em]" src={process.env.PUBLIC_URL + "/images/text/youtube.png"} alt="" /></a>

				</div>

				{/* divider */}

				<div className="py-2 flex justify-center">
				<img  className="" src={process.env.PUBLIC_URL + "/images/text/Line2.png"} alt="" />
				</div>

				{/* credits */}

				<div className=" text-sm text-[#b79563] ">
					<h2 className=" flex justify-center font-semibold lg:text-lg">2024 KALRAV. All rights reserved.</h2>
					<p className="flex py-1 justify-center lg:text-lg"> Designed by <span className="px-1 text-white ">  <a href="https://www.linkedin.com/in/harsh-vardhan-413100230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> Harsh Vardhan </a> </span></p>
					<p className="flex flex-wrap justify-center lg:text-lg"> Developed by <span className="px-1 font-semibold text-white"> <a href="https://www.linkedin.com/in/prashant-jinwal-b863142a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> Prashant Jinwal </a> </span>  </p>
				</div>

			</div>	
		</div>

	       			
		</div>
	);
};
export default Footer;
