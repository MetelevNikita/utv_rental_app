
import './../css/team.css'
import img2 from './../../../asset/team-card-test-2.png'
import img1 from './../../../asset/team-card-test-3.png'
import img3 from './../../../asset/team-card-test.png'

// bootstrap

import { Container, Col, Row } from 'react-bootstrap'

// redux

import { useSelector, useDispatch } from 'react-redux'
import { getFireStoreTeam } from '../../../store/team-slice'


// components

import TeamCard from '../../../UI/teamCard'
import MyButton from '../../../UI/myButton'

//

import ScrollCarousel from 'scroll-carousel-react'
import { useEffect } from 'react'


const Team = () => {


  const teamBase = useSelector((state) => state.addTeam.team)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getFireStoreTeam())
  }, [dispatch])



  const teamPerson = teamBase.map((item) => {
    return item.team
  })


  return(

      <Row>
        <Col className='col-12 mt-5 mb-5'>

        <div className="team-title">наша команда</div>
        <div className="team-subtitle">наши специалисты</div>


        <ScrollCarousel autoplay autoplaySpeed={5}>
          {teamPerson.map((card, index) => {
            return <Col><TeamCard key={index} img={card.img} name={card.name} profession={card.profession}></TeamCard></Col>
          })}
        </ScrollCarousel>


        </Col>
      </Row>


  )

}

export default Team