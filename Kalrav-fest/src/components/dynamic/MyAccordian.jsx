import React, { useState } from 'react'

function Accordian({questions , answer}) {
  const [show, setshow] = useState(false);

  return (
    
    <>
     
        <div className="main-heading">
          <img className='w-[2em]' onClick={() => setshow(!show) } src={process.env.PUBLIC_URL + "/images/text/arrow.png"} alt="+"  />
          <h3>{questions}</h3>
        </div>
        {
          show && <p className='answers'>{answer}</p>
        }
         

    </>

  )
}

export default Accordian;