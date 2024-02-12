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


      <div className="preloader-blur"></div>

      <Col md={12} sm={12}><img className='ratio ratio-16x9 preloader-logo' src={preloaderGif} alt="preloader" /></Col>
      <div className="preloader-bg"></div>


    </Col>




  )
}

export default Preloader