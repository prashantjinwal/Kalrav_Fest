import Polaroid, { Yavanika } from "../assets/CompData";
import Compscard from "../components/dynamic/Compi";
import { Rhapsody, Kalamkaar, Raaga, robotic, Sangyaan, Enactus, wdc, FinS, nE , VSC , EOC, Markonic } from "../assets/CompData";
import { useState } from "react";




function Competition() {

const allowedWords = ["All", "Polaroid", "Rhapsody", "Kalamkaar", "Raaga", "robotic" ,"Sangyaan" ,"Enactus" ,"FinS" , "Womens Development Cell" , "North-east cell" , "Vivekananda study circle" , "Markonic" , "Yavanika" ,"Equal Opportunity Cell"];

const [selectedWord, setSelectedWord] = useState('All');


  
const handleSelectWord = (event) => {
    const selectedValue = event.target.value;
    setSelectedWord(selectedValue);
};


return (
<>

 <div className="flex justify-center">

    <div className="bg-opacity-5 backdrop-filter bg-brown-100 backdrop-blur-md mx-[3em] w-[16em] flex justify-center  rounded-xl mt-4 border border-solid border-white  " >
      <label className="px-4 text-xs py-3 text-white font-semibold " htmlFor="filteredDropdown">Filter By Category </label>
      <select  className="Currentstate w-full  rounded-xl bg-[#b06c12] border border-solid border-black pl-3 font-semibold " id="filteredDropdown" onChange={handleSelectWord} value={selectedWord}>
        <option  value="" placeholder="Filter By Category" >All</option>
        {allowedWords.map((word, index) => (
          <option key={index} value={word}>{word}</option>
        ))}
      </select>
    </div>

 </div>

{ selectedWord === 'All' &&
	<div className="mx-5 ">


		{/* polaroid */}
		<h4 className= "comptextheader  text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">Polaroid </h4>
	{
		Polaroid.map((post) => (
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


	{/* markonic */}
    <h4 className= "comptextheader text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">Markonic </h4>
	{
		Markonic.map((post) => (
			<Compscard src={post.src} link={post.link} />
		))
	}



	 {/*  Divider */}
	<div className=" flex justify-center py-3">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
	</div>


	{/* Yavanika */}
    <h4 className= "comptextheader text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">Yavanika </h4>
	{
		Yavanika.map((post) => (
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

}


	{/* if Selected polaroid  */}
			{
				selectedWord === 'Polaroid' &&
			<> 
			<div className="mx-5 ">
				{/* Polaroid */}
		    <h4 className= "comptextheader  text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">Polaroid </h4>
			{
			Polaroid.map((post) => (
				<Compscard src={post.src} link={post.link} />
			))
			}
	
			{/*  Divider */}
		    <div className=" flex justify-center py-3">
				<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
				<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
			</div>
			</div>
			</>
	}


	{/* if Selected Rhapsody  */}
			{
				selectedWord === 'Rhapsody' &&
			<> 
			<div className="mx-5 ">
				{/* Rhapsody */}
		    <h4 className= "comptextheader  text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">Rhapsody </h4>
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
			</div>
			</>
	}


	{/* if Selected Kalamkaar  */}
			{
				selectedWord === 'Kalamkaar' &&
			<> 
			<div className="mx-5 ">
				{/* Kalamkaar */}
		    <h4 className= "comptextheader  text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">Kalamkaar </h4>
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
			</div>
			</>
	}


	{/* if Selected Raaga  */}
			{
				selectedWord === 'Raaga' &&
			<> 
			<div className="mx-5 ">
			
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
			</div>
			</>
	}


	{/* if Selected Robotics  */}

		{
			selectedWord === 'robotic' &&
		<> 
			<div className="mx-5 ">
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
			
			</div>
		</>
	}


	{/* if Selected Sanyaan  */}

		{
			selectedWord === 'Sangyaan' &&
		<> 
			<div className="mx-5 ">
			{/* RSangyaan */}
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
			
			</div>
		</>
	}
	

	{/* if Selected Enactus  */}

		{
			selectedWord === 'Enactus' &&
		<> 
			<div className="mx-5 ">
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
			
			</div>
		</>
	}


	{/* if Selected Fin-s  */}

		{
			selectedWord === 'FinS' &&
		<> 
			<div className="mx-5 ">
			{/* Enactus */}
			<h4 className= "comptextheader text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">Fin-s </h4>
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
			
			</div>
		</>
	}


	{/* if Selected Womens Development Cell  */}

		{
			selectedWord === 'Womens Development Cell' &&
		<> 
		<div className="mx-5 ">
		
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
			
			</div>
		</>
	}



	{/* if Selected North east cell  */}

		{
			selectedWord === 'North-east cell' &&
		<> 
			<div className="mx-5 ">
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
			</div>
		</>
	}

	
	{/* if Selected Vivekananda study circle  */}

		{
			selectedWord === 'Vivekananda study circle' &&
		<> 
			<div className="mx-5 ">
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
	}
	


	{/* if Selected Markonic */}

		{
			selectedWord === 'Markonic' &&
		<> 
			<div className="mx-5 ">
			{/* VSC */}
			<h4 className= "comptextheader text-white bg-black inline-block mb-2 px-2 text-3xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">Markonic</h4>
			{
			Markonic.map((post) => (
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
	}



	{/* if Selected Yavanika */}
		{
			selectedWord === 'Yavanika' &&
		<> 
			<div className="mx-5 ">
			 {/*  Divider */}
			<div className=" flex justify-center py-3">
				<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
				<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
			</div>

			{/* Yavanika */}
    		<h4 className= "comptextheader text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">Yavanika </h4>
			{
				Yavanika.map((post) => (
					<Compscard src={post.src} link={post.link} />
			))
			}

			</div>
		</>
	}


	{/* if Selected Equal Opportunity Cell */}
		{
			selectedWord === 'Equal Opportunity Cell' &&
		<> 
			<div className="mx-5 ">
			
			{/*Equal Opportunity Cell */}
    		<h4 className= "comptextheader text-white bg-black inline-block mb-2 px-2 text-2xl mt-9 lg:ml-[3em] lg:text-5xl border border-white border-double">Equal Opportunity Cell </h4>
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

			</div>
		</>
	}



	




	</>
	);
}

export default Competition;
