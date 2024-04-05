import React from 'react'

function TableContent(props) {
  return (
    <>
      

        <div className=" flex justify-center  flex-col">
            <img className=' lg:w-[20em] flex justify-center border border-white border-double ' src={props.src} alt="techical issue" />
           <a href={props.src} className=' flex justify-center py-4'  download ><button className=' py-4 px-2 rounded-md bg-[#BE9D6C] comptextheader font-semibold  border border-white border-double'>{props.title}</button> </a>
        </div>

    </>
  )
}

export default TableContent
