import React, { useState } from 'react'

function TableContent(props) {
  const [LoaderTable , setLoaderTable] = useState(true);

  setTimeout(function(){setLoaderTable(false)},2000)

  return (
    <>
      

        <div className=" flex justify-center  flex-col">
          {!LoaderTable ?   <img className=' lg:w-[20em] flex justify-center border border-white border-double ' src={props.src} alt="techical issue" />  : <div className="Competiton-poster-loder rounded-lg mt-4 mx-[2em] lg:h-[32em] lg:w-[20em] h-[25em] bg-black"> </div> }
           <a href={props.src} className=' flex justify-center py-4'  download ><button className='btn-style text-white py-4 px-2 rounded-md  comptextheader font-bold  border border-white border-double'>{props.title}</button> </a>
        </div>

    </>
  )
}

export default TableContent
