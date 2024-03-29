
import './../css/team.css'

// bootstrap

import { Col, Row } from 'react-bootstrap'


// components

import TeamCard from '../../../UI/teamCard'
import TeamData from '../../../servers/teamData'

//

import ScrollCarousel from 'scroll-carousel-react'
import { useEffect } from 'react'


const Team = () => {



  return(

      <Row>
        <Col md={12} className='mt-5 mb-5'>

        <div className="team-title">наша команда</div>
        <div className="team-subtitle">наши специалисты</div>


        <ScrollCarousel autoplay autoplaySpeed={4}>

          {TeamData.map((card, index) => {
            return <Col key={index}><TeamCard img={card.img} name={card.name} profession={card.prof}></TeamCard></Col>
          })}

        </ScrollCarousel>


        </Col>
      </Row>


  )

}

export default Team