import React from 'react'
import pagenotfound from '../Images/pagenotfound.png'


function PageNotFound() {
  return (
   <div className='contain' style={{marginBlock: '30px'}}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <img src={pagenotfound} alt="" className='img-fluid' />
      </div>
      
   </div>

  )
}

export default PageNotFound