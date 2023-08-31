import './video.css'

//

import video from './../asset/showreel.webm'

// bootstap


import { Col, Container, Row } from 'react-bootstrap'


const Video = () => {

  return(

    <Container>
      <Row>
        <Col className='col-12 d-flex flex-column  justify-content-center'>

            <video className='video-bg' muted autoPlay loop>
                <source
                  src={video}
                  type="video/mp4"
                />
            </video>


            <div className="video-titles-box">

              <div className='video-title'>Организация <br /> Онлайн-трансляций</div>
              <div className="video-subtitle">Текст о компании, цели и достижения за время работы, опыт</div>
              <button className='video-btn'>Отправить заявку</button>

            </div>
        </Col>
      </Row>
    </Container>



  )
}

export default Video