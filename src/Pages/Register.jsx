import React from 'react'
import { Link } from 'react-router-dom'
import "./resgister.css"

function Register() {
  return (
    <>
    
    <section className='main-body px-4 py-7 lg:py-9'>
        {/* temp.. wartning */}
    <h3 className=' text-red-600 font-semibold text-2xl py-3 mb-5' > This page will updated Soon.. </h3>

    <div className='headings flex justify-center'>
        <h3 className=' text-white text-4xl lg:text-5xl font-bold '> Click On The Below Section To Register DAY-WISE For <span className=' font-bold text-yellow-600'>KALRAV</span> 24 Passes </h3>
    </div>

    {/* divider */}
		<div className=" flex justify-center py-8">
			<img className=" lg:hidden" src={process.env.PUBLIC_URL + "/images/text/Divider.png"} alt="" />
			<img className="hidden lg:block" src={process.env.PUBLIC_URL + "/images/text/bigD.png"} alt="" />
		</div>


            {/* Day wise button  */}

        <div className='btn text-white flex justify-center gap-10 flex-col mx-12'>

          <div className='flex justify-center'>
          <Link to="/Register/Day" key="Day1">
            <button className='p-3 rounded-md  text-4xl font-semibold bg-[#BE9D6C] border-b-2 border-r-2 border-solid border-yellow-800 '> DAY 1</button>
          </Link>
          </div>

          <div className='flex justify-center'>
          <Link to="/Register/Day2" key="Day2Passes">
            <button className='p-3 rounded-md text-4xl font-semibold bg-[#BE9D6C] border-b-2 border-r-2 border-solid border-yellow-800 ' > DAY 2</button>
          </Link>
          </div>

          <div className='flex justify-center'>
          <Link to="/Register/Day3" key="Day3Passes">
            <button className='p-3 rounded-md text-4xl font-semibold bg-[#BE9D6C] border-b-2 border-r-2 border-solid border-yellow-800 ' > DAY 3</button>
          </Link>
          </div>

        </div>

    </section>
    </>
  )
}

export default Register
