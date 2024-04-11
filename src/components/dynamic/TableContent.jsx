import React from 'react'

function TableContent(props) {
  return (
    <>
      

        <div className=" flex justify-center  flex-col">
            <img className=' lg:w-[20em] flex justify-center border border-white border-double ' src={props.src} alt="techical issue" />
           <a href={props.src} className=' flex justify-center py-4'  download ><button className='btn-style text-white py-4 px-2 rounded-md  comptextheader font-bold  border border-white border-double'>{props.title}</button> </a>
        </div>

    </>
  )
}

export default TableContent
