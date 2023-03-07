import React from 'react'

const Footer = () => {
  return (
    <>

    <div className='container-fluid footerbox'>
        <div className="row footerrow">
            <div className="col-md-3 col-sm-12">
                <h3 className='text-white footerlogo'>Booster</h3>
            </div>

            <div className="col-md-6 col-sm-12">
                <div className="row">
                    <div className="col-md-3 col-sm-12 text-white footerftrs footerftrs1 mt-2">
                        <h6 className='mb-3'>Features</h6>
                        <a href="/" className='footeroptions'>Link Shortening</a><br />
                        <a href="/" className='footeroptions'>Branded Links</a><br />
                        <a href="/" className='footeroptions'>Analytics</a>
                    </div>
                    
                    <div className="col-md-3 col-sm-12 text-white footerftrs footerftrs2 mt-2">
                        <h6 className='mb-3'>Resources</h6>
                        <a href="/" className='footeroptions'>Blog</a><br />
                        <a href="/" className='footeroptions'>Developers</a><br />
                        <a href="/" className='footeroptions'>Support</a>
                    </div>

                    

                    <div className="col-md-3 col-sm-12 text-white footerftrs footerftrs3 mt-2">
                    <h6 className='mb-3'>Company</h6>
                        <a href="/" className='footeroptions'>About</a><br />
                        <a href="/" className='footeroptions'>Our Team</a><br />
                        <a href="/" className='footeroptions'>Careers</a><br />
                        <a href="/" className='footeroptions'>Contact</a>
                    </div>
                </div>
            </div>

            <div className="col-md-3 col-sm-12 siconcage">
            <a href="/"><i className="fab fa-facebook-square text-white sicon"></i></a>
            <a href="/"><i className="fab fa-twitter text-white sicon"></i></a>
            <a href="/"><i className="fab fa-pinterest text-white sicon"></i></a>
            <a href="/"><i className="fab fa-instagram text-white sicon"></i></a>
            
            </div>
        </div>
    </div>


    </>
  )
}

export default Footer
