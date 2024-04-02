import posters from "../assets/CompData";
import Compscard from "../components/dynamic/Compi";
import { Rhapsody,Kalamkaar,Raaga} from "../assets/CompData";


function Competition() {
	return (
		<>
		
	<div className="mx-5 ">
		{/* polaroid */}
    <h4 className= "comptextheader text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">Polaroid </h4>
	{
		posters.map((post) => (
			<Compscard src={post.src} link={post.link} />
		))
	}

	  {/*  Divider */}
	  <div className=" flex justify-center py-3">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
		</div>

	{/* Rhapsody */}
    <h4 className= "comptextheader text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">Rhapsody </h4>
	{
		Rhapsody.map((post) => (
			<Compscard src={post.src} link={post.link} />
		))
	}


	 {/*  Divider */}
	<div className=" flex justify-center py-3">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
	</div>


	{/* Kalamkaar  */}
    <h4 className= "comptextheader text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">Kalamkaar  </h4>
	{
		Kalamkaar.map((post) => (
			<Compscard src={post.src} link={post.link} />
		))
	}


	 {/*  Divider */}
	<div className=" flex justify-center py-3">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
	</div>


	{/* Raaga dance society   */}
    <h4 className= "comptextheader text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">Raaga dance society   </h4>
	{
		Raaga.map((post) => (
			<Compscard src={post.src} link={post.link} />
		))
	}
	</div>


			



	




	</>
	);
}

export default Competition;
