import posters from "../assets/CompData";
import Compscard from "../components/dynamic/Compi";
import { Rhapsody, Kalamkaar, Raaga, robotic, Sangyaan, Enactus, wdc, FinS, nE , VSC ,EOC } from "../assets/CompData";


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



	 {/*  Divider */}
	<div className=" flex justify-center py-3">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
	</div>


	{/* Robotics club */}
    <h4 className= "comptextheader text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">Robotics Club </h4>
	{
		robotic.map((post) => (
			<Compscard src={post.src} link={post.link} />
		))
	}


	 {/*  Divider */}
	<div className=" flex justify-center py-3">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
	</div>


	{/* Sangyaan */}
    <h4 className= "comptextheader text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">Sangyaan </h4>
	{
		Sangyaan.map((post) => (
			<Compscard src={post.src} link={post.link} />
		))
	}



	 {/*  Divider */}
	<div className=" flex justify-center py-3">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
	</div>


	{/* Enactus */}
    <h4 className= "comptextheader text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">Enactus </h4>
	{
		Enactus.map((post) => (
			<Compscard src={post.src} link={post.link} />
		))
	}


	 {/*  Divider */}
	<div className=" flex justify-center py-3">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
	</div>


	{/* Fin-S  */}
    <h4 className= "comptextheader text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">Fin-S  </h4>
	{
		FinS.map((post) => (
			<Compscard src={post.src} link={post.link} />
		))
	}


	 {/*  Divider */}
	<div className=" flex justify-center py-3">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
	</div>


	{/* North east cell  */}
    <h4 className= "comptextheader text-white bg-black inline-block mb-2 px-2 text-3xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">North-East Cell </h4>
	{
		nE.map((post) => (
			<Compscard src={post.src} link={post.link} />
		))
	}



	 {/*  Divider */}
	 <div className=" flex justify-center py-3">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
	</div>


	{/* EOC */}
    <h4 className= "comptextheader text-white bg-black inline-block mb-2 px-2 text-2xl mt-9 lg:ml-[3em] lg:text-5xl border border-white border-double">Equal Opportunity Cell</h4>
	{
		EOC.map((post) => (
			<Compscard src={post.src} link={post.link} />
		))
	}







	
	 {/*  Divider */}
	<div className=" flex justify-center py-3">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
	</div>


	{/* Women Development Cell */}
    <h4 className= "comptextheader text-white bg-black inline-block mb-2 px-2 text-2xl mt-9 lg:ml-[3em] lg:text-5xl border border-white border-double">Women Development Cell </h4>
	{
		wdc.map((post) => (
			<Compscard src={post.src} link={post.link} />
		))
	}


	 {/*  Divider */}
	<div className=" flex justify-center py-3">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
	</div>


	{/* VSC */}
    <h4 className= "comptextheader text-white bg-black inline-block mb-2 px-2 text-2xl mt-9 lg:ml-[3em] lg:text-5xl border border-white border-double">Vivekananda study circle</h4>
	{
		VSC.map((post) => (
			<Compscard src={post.src} link={post.link} />
		))
	}


	








	{/*  Divider */}
	<div className=" flex justify-center py-7">
		<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
		<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
	</div>
	</div>


			



	




	</>
	);
}

export default Competition;
