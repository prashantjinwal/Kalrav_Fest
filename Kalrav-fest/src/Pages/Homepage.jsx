import React from "react";

const Homepage = () => {
	return (
		<>
	<div className="px-5">
		<div className="container h-[25em] ">
			<img className=" shadow-slate-900 " src={process.env.PUBLIC_URL + "/images/animations/GodANI.gif"}/>
		</div>

       <div className="">
		
		{/* divider */}
		<div className=" flex justify-center py-5">
			<img className="" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
		</div>

		
			<div className="flex justify-center">
				<div className="flex justify-center  rounded-xl  w-[12em] h-[5em] relative  bg-opacity-5 backdrop-filter bg-brown-50 backdrop-blur-md">
				<img className="flex bg-transparent z-1 pt-5 justify-center absolute" src={process.env.PUBLIC_URL + "/images/text/Theme.png"} alt="Theme" />
				</div>
			</div>
		</div>

		<div className="flex justify-center py-6">

			<div className="flex justify-center  rounded-xl  w-[20em] h-[36em] relative  bg-opacity-5 backdrop-filter bg-brown-50 backdrop-blur-md" >
			<div className="px-7">
				<p className="para text-white pt-3 ">Prepare to ascend Mount Olympus, mortals! KALRAV throws open its gates to a realm of gods, heroes, and myths whispered through time. Immerse yourselves in the vibrant tapestries of Greek lore, where mortals defied destiny and deities wielded Olympian power. Challenge your wit with riddles from the Sphinx, test your might in Herculean trials, and dance under the celestial gaze of starry constellations. From the cunning schemes of Athena to the daring exploits of Odysseus, let your inner legend rise! This KALRAV, Olympus trembles before the revelry below – join us and etch your name in the annals of myth! But, Remember Mortals "OLYMPUS HAS NOTHING ON US".</p>
			</div>
			</div>
		</div>



	<div className="">
		{/* divider  */}
		<div className=" flex justify-center py-5">
			<img className="" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
		</div>

			<div className="flex justify-center">
				<div className="flex justify-center  rounded-xl  w-[12em] h-[5em] relative  bg-opacity-5 backdrop-filter bg-brown-50 backdrop-blur-md">
				<img className="flex bg-transparent z-1 pt-5 justify-center absolute" src={process.env.PUBLIC_URL + "/images/text/About.png"} alt="Theme" /></div>
			</div>
	</div>

		<div className="flex justify-center py-6">

			<div className="flex justify-center  rounded-xl  w-[20em] h-[38em] relative  bg-opacity-5 backdrop-filter bg-brown-50 backdrop-blur-md" >
			<div className="px-7">
				<p className="para text-white pt-3 text-sm">The revival of Kalrav, the annual extravaganza organized by Deen Dayal Upadhyaya, brings with it an electrifying anticipation! With over <span className=" text-amber-600">20,000</span> students from <span className=" text-amber-600">100+</span> colleges nationwide eagerly awaiting its return, Kalrav holds immense significance. This year's Kalrav pledges an unforgettable experience, showcasing a myriad of delights – from tantalizing cuisine to vibrant music and playful activities. The lineup promises an even grander musical spectacle, building upon the legacy of past performances featuring icons like Honey Singh, Jubin Nautiyal, and Guru Randhawa. Yet, Kalrav transcends mere entertainment; it serves as a beacon of cultural unity, drawing attendees from diverse backgrounds into a shared celebration of artistic expression. With renowned artists, musicians, and performers gracing the stage, the campus is set to transform into a captivating mosaic of creativity and camaraderie. So, mark your calendars and immerse yourself in the enchantment of Kalrav – an experience sure to resonate long after the final note fades.</p>
			</div>
			</div>
		</div>


		{/* FAQ */}


		<div className="">
		{/* divider  */}
		  <div className=" flex justify-center py-5">
			 <img className="" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt=""  />
		  </div>


		</div>


		


		{/* Team */}






	</div>	
		</>
	);
};
export default Homepage;
