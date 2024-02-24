import React, { useState } from 'react'

function Accordian({questions , answer}) {
  const [show, setshow] = useState(false);

  return (
    
    <>
     
        <div className="main-heading">
          <img className='w-[2em]' onClick={() => setshow(!show) } src={process.env.PUBLIC_URL + "/svg/arrow.svg"} alt="+"  />
          <h3>{questions}</h3>
        </div>
        {
          show && <p className='answers font-semibold'>{answer}</p>
        }
         
    </>

  )
}

export default Accordian;