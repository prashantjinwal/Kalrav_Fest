
import React from "react";
import "./loader.css"

const Loader = () => {
  return (
    <>
    <div className="screenSettings h-full w-full flex  items-center justify-center">
        <div className="flex flex-col justify-center items-center w-[8em] relative text-white"><img className="mb-[9em]" src={process.env.PUBLIC_URL + "/images/animations/Preloader.gif"}/><img className="mt-0 absolute" src={process.env.PUBLIC_URL + "/images/text/LOGoWhite.png"} /> </div>
    </div>
    </>
  )
}

export default Loader;