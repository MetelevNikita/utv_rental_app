import './video.css'

//

import video from './../asset/showreel.webm'


// bootstap


import { Col, Row } from 'react-bootstrap'


//



const Video = ({ modalAnimation }) => {


const {api} = modalAnimation



  return(
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
                <div className='video-title'>Организация <br /> Онлайн-трансляций</div>
            </Col>



            <Col className="video-subtitle-box">
                <div className="video-subtitle">Текст о компании, цели и достижения за время работы, опыт</div>
            </Col>



            <Col md={12} className='video-btn-box'>
            <button className='video-btn' onClick={() => {api.start({from: {opacity: 0, transform: 'scale(0)'}, to: {opacity: 1, transform: 'scale(1)'}})}}>Отправить заявку</button>
            </Col>

    </Row>



  )
}

export default Video