
import './aboutInfo.css'


//

import { Row, Col } from 'react-bootstrap'

const AboutInfo = ({title, subtitle}) => {


  return(

    <Row md={12} className='mt-4 mb-4'>
      <Col>

      <div className="about-info-container">

      <div className="about-info-title">{title}</div>
      <hr className="about-info-line"/>
      <div className="about-info-subtitle">{subtitle}</div>

      </div>

      </Col>
    </Row>



  )
}


export default AboutInfo

