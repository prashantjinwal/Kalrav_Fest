import { useState } from "react";


function Compscard(props){
    
const [Loader, setLoader] = useState(true);

    setTimeout(function(){setLoader(false)},2500 );
    return(
        <div className="flex justify-center mt-5 " >
    
    <div className=" p-3 bg-opacity-5 backdrop-filter bg-brown-100 backdrop-blur-md mb-3 rounded-2xl ">
        <div  className="flex justify-center flex-wrap ">


        {Loader ? <div className="Competiton-poster-loder rounded-lg lg:w-[24em] lg:h-[22em] w-[14em] h-[14em] bg-black"> </div>
            :
            <img className=" lg:w-[24em] w-[14em]  gap-3 border border-white border-dashed  " src={process.env.PUBLIC_URL + props.src} alt="#" />
        }


        </div>
        <div className="flex justify-center mt-4">
        {/* <a href={props.link}> <button className= "comptextheader btn-style font-bold text-2xl text-white flex justify-center px-5 py-2 mb-2 rounded-lg bg-gradient-to-r from-[#582f0e] to-[#e2bc2f] border border-white border-solid "> Register </button></a> */}
        <a href={props.link}> <button className= "comptextheader btn-style font-bold text-2xl text-white flex justify-center px-5 py-2 mb-2 rounded-lg  border border-white border-solid "> Register </button></a>
        </div>
    </div>
       
        </div>
        
    );
}

export default Compscard ;