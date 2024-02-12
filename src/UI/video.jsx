import './video.css'

//

import video from './../asset/showreel.webm'


// bootstap


import { Col, Row } from 'react-bootstrap'


//



const Video = ({modalCreateOpen}) => {



  const {modalCreate, setModalCreate} = modalCreateOpen



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
            <button className='video-btn' onClick={() => {setModalCreate(prev => !prev)}}>Отправить заявку</button>
            </Col>

    </Row>



  )
}

export default Video