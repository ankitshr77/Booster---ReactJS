import React from 'react'
import Statsbox from './Statsbox'
import brandicon from '../assets/brandicon.svg'
import recordsicon from '../assets/recordsicon.svg'
import customicon from '../assets/customicon.svg'

const Statistics = () => {
  return (
    <div className='container-fluid statscontainer mt-5 text-center '>
        
        <h2 className='statsh1 mb-3'>Advanced Statistics</h2>
        <span className='statspan'>Track how your links are performing across the web with <br/> our advanced statistics dashboard.</span>     

        <div className='container row d-flex statsoptionsbox '>
          <div className="col-md-4 col-sm-12 statindi">
          <Statsbox statboximage={brandicon} statboxtitle="Brand Recognition" statboxdesc="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help install confidence in your content."/>
          </div>

          <div className="col-md-4 col-sm-12 statindi">
          <Statsbox statboximage={recordsicon} statboxtitle="Detailed Records" statboxdesc="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."/>
          </div>

          <div className="col-md-4 col-sm-12 statindi">
          <Statsbox statboximage={customicon} statboxtitle="Fully Customizable" statboxdesc="Improve brand awareness and content discoverability through customizable links, superchanging audience engagement."/>
          </div>

        </div>
        
    </div>
  )
}

export default Statistics
