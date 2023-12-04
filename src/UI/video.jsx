import './video.css'

//

import video from './../asset/showreel.webm'
import video2 from './../asset/final7.mp4'

// bootstap


import { Col, Container, Row } from 'react-bootstrap'


//



const Video = ({modalCreateOpen}) => {



  const {modalCreate, setModalCreate} = modalCreateOpen



  return(
      <Row>
        <Col className='col-12 d-flex flex-column  justify-content-start'>

            <video className='video-bg' muted autoPlay loop>
                <source
                  src={video2}
                  type="video/mp4"
                />
            </video>


            <div className="video-titles-box">

              <div className='video-title'>Организация <br /> Онлайн-трансляций</div>
              <div className="video-subtitle">Текст о компании, цели и достижения за время работы, опыт</div>
              <button className='video-btn' onClick={() => {setModalCreate(prev => !prev)}}>Отправить заявку</button>

            </div>
        </Col>
      </Row>

  )
}

export default Video