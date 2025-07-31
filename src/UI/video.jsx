import './video.css'

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



            <Col className='video-title-box'>
                <div className='video-title'>Аренда <br /> видеооборудования</div>
            </Col>



            <Col md={3} className="video-subtitle-box">
                <div className="video-subtitle">прокат видеокамер, оптики, света, аксессуаров для съёмки</div>
            </Col>



            <Col md={12} className='video-btn-box'>
            <button className='video-btn' onClick={() => {api.start({from: {opacity: 0, transform: 'scale(0)'}, to: {opacity: 1, transform: 'scale(1)'}})}}>Отправить заявку</button>
            </Col>

    </Row>
    </Container>



  )
}

export default Video