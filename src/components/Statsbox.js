import React from 'react'

const Statsbox = (props) => {
  return (
    <>
    <div className="card text-start mx-4 mt-5" style={{width: "20rem", height: "12rem"}}>
        
        <div className="card-body">
            
            <div className='statboximg'>
            <img src={props.statboximage} alt="" />
            </div>
            <h4 className="card-title">{props.statboxtitle}</h4>
            <span className="card-text">{props.statboxdesc}</span>
            
        </div>
        </div>

    </>
  )
}

export default Statsbox
