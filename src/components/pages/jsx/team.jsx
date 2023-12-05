
import './../css/team.css'
import img2 from './../../../asset/team-card-test-2.png'
import img1 from './../../../asset/team-card-test-3.png'
import img3 from './../../../asset/team-card-test.png'

// bootstrap

import { Container, Col, Row } from 'react-bootstrap'


// components

import TeamCard from '../../../UI/teamCard'
import MyButton from '../../../UI/myButton'
import { teamData } from '../../../servers/teamData'

//


import ScrollCarousel from 'scroll-carousel-react'


const Team = () => {

  return(

      <Row>
        <Col className='col-12 mt-5 mb-5'>

        <div className="team-title">наша команда</div>
        <div className="team-subtitle">наши специалисты</div>

        <ScrollCarousel autoplay autoplaySpeed={8}>
          {teamData.map((card, index) => {
            return <TeamCard key={index} img={card.img} name={card.name} profession={card.profession}></TeamCard>
          })}
        </ScrollCarousel>


        </Col>
      </Row>


  )

}

export default Team