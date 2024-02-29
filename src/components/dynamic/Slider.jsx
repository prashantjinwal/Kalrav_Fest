import React from "react";


function Slider(props){
    return (

        <>

        <div className=" flex gap-3 justify-center w-full ">

           <div className="lg:mx-2"> 
            <img  className="h-[9em] rounded-full bg-black border-4 border-[#BE9D6C] min-w-[9em] lg:min-w-[11em] lg:h-[11em] " src={process.env.PUBLIC_URL + props.src} alt="#" />
            <p className="TeamT text-white font-bold text-base underline decoration-1 py-1 flex justify-center ">{props.name}</p></div>
            
        </div>
        

        </>

    )
}
export default Slider;