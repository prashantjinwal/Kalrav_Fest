import Comps from "../assets/CompData";
import Compscard from "../components/dynamic/Compi";


function Competition() {
	return (
		<>
		<div className="px-5">

		<div className="flex justify-center">
		    <div className="flex justify-center  rounded-xl mt-[2em] w-[16em] h-[4em] relative  bg-opacity-5 backdrop-filter bg-brown-50 backdrop-blur-md">
				<img className="flex bg-transparent z-1 p-1 pt-5 justify-center absolute" src={process.env.PUBLIC_URL + "/images/text/Competitions.png"} alt="Theme" />
		    </div>

		</div>


		<div className="flex flex-wrap justify-center mt-[3em] gap-7 lg:gap-[5em]" >
			{Comps.map((Comps) => (
				<Compscard
					src={Comps.src}
					div={Comps.div}
					/>
			))}
	</div>



		</div>
			
		</>
	);
}

export default Competition;
