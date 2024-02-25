import React from "react";


function Slider(props){
    return (

        <>

        <div className=" flex gap-3 justify-center w-full ">

           <div> <img  className="h-[10em] rounded-[100em] bg-black border-4 border-[#BE9D6C] min-w-[9em] lg:min-w-[10em] lg:h-[10em] py-2" src={process.env.PUBLIC_URL + props.src} alt="" />
            <p className="TeamT text-white font-bold text-base underline decoration-1 py-1 flex justify-center ">{props.name}</p></div>
            
        </div>
        

        </>

    )
}
export default Slider;