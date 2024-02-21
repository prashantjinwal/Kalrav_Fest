import React from "react";
import Accodian from "../components/dynamic/Faqcom";
import Slider from "../components/dynamic/Slider";
import Team1,{Coordinaters} from "../assets/Team";

const Homepage = () => {
	return (
		<>
	<div className="px-5 ">
		
		<div className="container h-[25em] flex lg:h-[49em] justify-center">
			<img className="   shadow-slate-900 " src={process.env.PUBLIC_URL + "/images/animations/GodANI.gif"}/>
		</div>

       <div className="">
		
		{/* divider */}
		<div className=" flex justify-center py-5">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
		</div>

		
			<div className="flex justify-center">
				<div className="flex justify-center  rounded-xl  w-[12em] h-[5em] relative  bg-opacity-5 backdrop-filter bg-brown-50 backdrop-blur-md">
				<img className="flex bg-transparent z-1 pt-5 justify-center absolute" src={process.env.PUBLIC_URL + "/images/text/Theme.png"} alt="Theme" />
				</div>
			</div>
		</div>

		<div className="flex justify-center py-6">

			<div className=" lg:w-[50em] lg:leading-loose lg:h-[20em] md:w-[40em] md:h-[18em] flex justify-center  rounded-xl  w-[20em] h-[36em] relative  bg-opacity-5 backdrop-filter bg-brown-50 backdrop-blur-md" >
			<div className="px-7">
				<p className="para text-white pt-3 lg:text-xl ">Prepare to ascend Mount Olympus, mortals! KALRAV throws open its gates to a realm of gods, heroes, and myths whispered through time. Immerse yourselves in the vibrant tapestries of Greek lore, where mortals defied destiny and deities wielded Olympian power. Challenge your wit with riddles from the Sphinx, test your might in Herculean trials, and dance under the celestial gaze of starry constellations. From the cunning schemes of Athena to the daring exploits of Odysseus, let your inner legend rise! This KALRAV, Olympus trembles before the revelry below – join us and etch your name in the annals of myth! But, Remember Mortals "OLYMPUS HAS NOTHING ON US".</p>
			</div>
			</div>
		</div>



	<div className="">

		{/* divider  */}
		<div className=" flex justify-center py-5">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
		</div>


			<div className="flex justify-center">
				<div className="flex justify-center  rounded-xl  w-[12em] h-[5em] relative  bg-opacity-5 backdrop-filter bg-brown-50 backdrop-blur-md">
				<img className="flex bg-transparent z-1 pt-5 justify-center absolute" src={process.env.PUBLIC_URL + "/images/text/About.png"} alt="Theme" /></div>
			</div>
	</div>

		<div className="flex justify-center py-6">

			<div className="lg:w-[50em] lg:leading-12 lg:h-[30em] flex justify-center  rounded-xl  w-[20em] h-[38em] relative  bg-opacity-5 backdrop-filter bg-brown-50 backdrop-blur-md" >
			<div className="px-7">
				<p className="para text-white pt-3 text-sm lg:text-xl">The revival of Kalrav, the annual extravaganza organized by Deen Dayal Upadhyaya, brings with it an electrifying anticipation! With over <span className=" text-amber-600">20,000</span> students from <span className=" text-amber-600">100+</span> colleges nationwide eagerly awaiting its return, Kalrav holds immense significance. This year's Kalrav pledges an unforgettable experience, showcasing a myriad of delights – from tantalizing cuisine to vibrant music and playful activities. The lineup promises an even grander musical spectacle, building upon the legacy of past performances featuring icons like Honey Singh, Jubin Nautiyal, and Guru Randhawa. Yet, Kalrav transcends mere entertainment; it serves as a beacon of cultural unity, drawing attendees from diverse backgrounds into a shared celebration of artistic expression. With renowned artists, musicians, and performers gracing the stage, the campus is set to transform into a captivating mosaic of creativity and camaraderie. So, mark your calendars and immerse yourself in the enchantment of Kalrav – an experience sure to resonate long after the final note fades.</p>
			</div>
			</div>
		</div>


		{/* FAQ */}


		<div className="">
		{/* divider  */}
		<div className=" flex justify-center py-5">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
		</div>



		</div>


		{/* FaQ */}

		<div className="flex justify-center mb-[2em]">
				<div className=" flex justify-center  rounded-xl  w-[8em] h-[5em] relative  bg-opacity-5 backdrop-filter bg-brown-50 backdrop-blur-md">
				<img className="flex bg-transparent z-1 pt-4 justify-center absolute" src={process.env.PUBLIC_URL + "/images/text/Faq.png"} alt="Theme" />
		        </div>		
		</div>

		<div className="lg:mx-[20em]">
		<Accodian/>
		</div>

    {/*  Divider */}
	    <div className=" flex justify-center py-5">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
		</div>






		{/* Team */}
		
		<div className="flex justify-center mb-[2em]">
				<div className=" flex justify-center  rounded-xl  w-[8em] h-[5em] relative  bg-opacity-5 backdrop-filter bg-brown-50 backdrop-blur-md">
				<img className="flex bg-transparent z-1 pt-4 justify-center absolute" src={process.env.PUBLIC_URL + "/images/text/Team.png"} alt="Theme" />
		        </div>

						
		</div>

		<div className="flex justify-center my-5">
				<img src={process.env.PUBLIC_URL + "/images/text/CulturalCouncil.png"} alt="#" />
		</div>


			{/* CulturalCouncil */}

		<div className="py-4 flex gap-5 w-full overflow-x-auto overflow-hidden">
			{/* <Slider/> */}
			{Team1.map((T) => (
							<Slider
								src = {T.src}
								name = {T.name}								
							/>
			))}
		</div>


				{/* Coordinaters */}

<div className="py-7">
		<div className="flex justify-center my-5">
				<img src={process.env.PUBLIC_URL + "/images/text/Coordinators.png"} alt="#" />
		</div>

		<div className="py-4 mt-5 flex gap-5 w-full overflow-x-auto overflow-hidden">
		{Coordinaters.map((T) => (
							<Slider
								src = {T.src}
								name = {T.name}								
							/>
			))}
		</div>
</div>


			{/* Event Coordinaters */}


{/* <div className="py-7">
		<div className="flex justify-center my-5">
				<img className="w-[18em]"  src={process.env.PUBLIC_URL + "/images/text/EventCoordinators.png"} alt="#" />
		</div>
		
		<div className="py-4  mt-5 flex gap-5 w-full overflow-x-auto overflow-hidden">
		{Coordinaters.map((T) => (
							<Slider
								src = {T.src}
								name = {T.name}								
							/>
			))}

		</div>
</div> */}



{/* divider  */}
<div className=" flex justify-center py-5">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
		</div>









	</div>	
		</>
	);
};
export default Homepage;
