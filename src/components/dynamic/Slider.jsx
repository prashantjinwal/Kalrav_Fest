import React from "react";

function Slider(props){
    return (

        <>

        <div className="flex gap-3 justify-center w-full ">

           <div> <img  className="h-[8em] min-w-[7em] lg:min-w-[10em] lg:h-[10em] py-2" src={process.env.PUBLIC_URL + props.src} alt="" />
            <p className="text-white flex justify-center text-sm">{props.name}</p></div>

        </div>


        </>

    )
}
export default Slider;