import React from 'react'


const Statsbox = (props) => {
  return (
    <>
    <div className="card text-start mx-4 mt-5 indivstatbox">
        
        <div className="card-body">
            
            <div className='statboximg'>
            <img src={props.statboximage} alt="" />
            </div>
            <h5 className="card-title mt-3 stath5">{props.statboxtitle}</h5>
            <span className="card-text statspan">{props.statboxdesc}</span>
            
        </div>
        </div>

    </>
  )
}

export default Statsbox
