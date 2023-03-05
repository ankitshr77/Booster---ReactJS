import React from 'react'

const Inputbox = () => {
  return (
    <div className='container inputcage'>
      <input type="text" className='inputbox' placeholder='      Shorten a link here...'/>
      <button className='btn btn-primary mt-4 inputbtn'>Shorten It!</button>
    </div>
  )
}

export default Inputbox
