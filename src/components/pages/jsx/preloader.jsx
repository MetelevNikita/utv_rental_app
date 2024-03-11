import './../css/preloader.css'

//


import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'


//

import preloaderGif from './../../../asset/final-animation-alpha.gif'

const Preloader = () => {

  const [fade, setFade] = useState(['preloader-container preloader-fade'])


  return (


    <Col className={fade}>


      <Col style={{width: "100%", height: '100vh', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} md={12} sm={12} className='d-flex justify-content-center align-items-center'><img className='preloader-logo' src={preloaderGif} alt="preloader" /></Col>
      <div className="preloader-bg"></div>


    </Col>




  )
}

export default Preloader