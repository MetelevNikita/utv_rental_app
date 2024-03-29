
import './../css/team.css'

// bootstrap

import { Col, Row } from 'react-bootstrap'

// redux

import { useSelector, useDispatch } from 'react-redux'
import { getFireStoreTeam } from '../../../store/team-slice'


// components

import TeamCard from '../../../UI/teamCard'

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
            console.log(teamPerson)
            return <Col key={index}><TeamCard img={card.img} name={card.name} profession={card.profession}></TeamCard></Col>
          })}
        </ScrollCarousel>


        </Col>
      </Row>


  )

}

export default Team