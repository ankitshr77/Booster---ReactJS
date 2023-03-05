import React from 'react'
import hero1 from '../assets/hero1.svg'
import Inputbox from './Inputbox'
import Statistics from './Statistics'

const Home = () => {
  return (
    <>
    <div className='container'>

      <div className='row'>
        <div className='col-md-6 mt-5'>
          <h1 className='text-left heroh1'>More Than Just <br/> Shorter Links</h1>
          <span className='herospan'>Build your brand's recognition and get detailed<br/> insights on how your links are performing.</span>
          <br />
          <button className='btn btn-primary mt-4 herobtn'>Get Started</button>
        </div> 

        <div className='col-md-6'>
        <img src={hero1} className="heroimage" alt="Your SVG" />
        </div>
      </div>

      <Inputbox/>

    </div>

    <Statistics/>
    </>

    
  )
}

export default Home
