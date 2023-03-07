import React from 'react'
import hero1 from '../assets/hero1.svg'
import Footer from './Footer'
import Inputbox from './Inputbox'
import Statistics from './Statistics'

const Home = () => {
  return (
    <>

    {/* ----------------------------HERO SECTION --------------------------------- */}

    <div className='container'>

      <div className='row'>
        <div className='col-md-6 col-sm-12 mt-5'>
          <h1 className='text-left heroh1'>More Than Just <br/> Shorter Links</h1>
          <span className='herospan'>Build your brand's recognition and get detailed insights on how your links are performing.</span>
          <br />
          <button className='btn btn-primary mt-4 herobtn'>Get Started</button>
        </div> 

        <div className='col-md-6 col-sm-12'>
        <img src={hero1} className="heroimage" alt="Your SVG" />
        </div>
      </div>


      {/* ----------------------------INPUT SECTION --------------------------------- */}

      <Inputbox/>

    </div>

    {/* ----------------------------STATISTICS SECTION -------------------------------- */}

    <Statistics/>

    
{/* ----------------------------SUB FOOTER SECTION -------------------------------- */}

    <div className='container-fluid subfootercage text-center'>
      <h1>Boost Your Links Today</h1>
      <button className='subfbtn mt-4'>Get Started</button>
    </div>
    
    <Footer/>

    <div className="container-fluid text-center p-3 copyfooter">
    <i class="fas fa-copyright me-2 text-white hhh "></i> 
    <h6 className='fa-copyrighttext text-white mt-2 hhh'>Website Crafted by Ankit Shrestha</h6>
    </div>

    </>
    
  )
}

export default Home
