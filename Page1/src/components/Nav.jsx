import React from 'react'

function Nav() {
  return (
    <div className='nav flex justify-center items-center gap-52 h-20 w-full bg-transparent '>
        <h1 className='left font-medium p-6' >PORTOFILO</h1>
        <div className="right flex ml-96 font-medium text-xl gap-6 py-6">
          <span className='underline decoration-white' >HOME</span>  
          <span>ABOUT</span>  
          <span>WORKS</span>  
          <span>BLOG</span>  
          <span>CONTACT</span>  

        </div>

    </div>
  )
}

export default Nav