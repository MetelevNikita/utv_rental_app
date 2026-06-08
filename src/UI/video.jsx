import './video.css'
import { motion } from "motion/react"

//

import video from './../asset/showreel.webm'


// bootstap


import { Col, Container, Row } from 'react-bootstrap'


//



const Video = ({ modalAnimation }) => {


const {api} = modalAnimation


  return(

    <Container fluid>
      <Row md={12} sm={12} xs={12} className='d-flex flex-column justify-content-start align-items-center'>

            <Col>
                <video className='video-bg' muted autoPlay loop>
                    <source
                    src={video}
                    type="video/mp4"
                    />
                </video>
            </Col>





            <Col md={8} className="video-wrapper">

                <motion.div whileHover={{scale: 1.2}} transition={{duration: 2}} className='video-title'>Аренда <br /> видеооборудования</motion.div>
                <div className="video-subtitle">прокат видеокамер, оптики, света, аксессуаров для съёмки</div>

                <div className='video-btn-wrapper'>

                    <motion.div whileHover={{scale: 1.07}} ><button className='video-btn' onClick={() => {api.start({from: {opacity: 0, transform: 'scale(0)'}, to: {opacity: 1, transform: 'scale(1)'}})}}>Отправить заявку</button></motion.div>

                </div>

            </Col>


    </Row>
    </Container>



  )
}

export default Video