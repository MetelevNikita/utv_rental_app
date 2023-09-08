
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

  console.log(teamData)


  return(

    <Container>

      <Row>
        <Col className='col-12 mt-5 mb-5'>


        <ScrollCarousel autoplay autoplaySpeed={8}>
          {teamData.map((card) => {
            return <TeamCard img={card.img} name={card.name} profession={card.profession}></TeamCard>
          })}
        </ScrollCarousel>




        </Col>
      </Row>
    </Container>


  )

}

export default Team