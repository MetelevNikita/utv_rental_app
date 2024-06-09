import { useEffect, useState } from 'react'

//

import './../css/team.css'

// bootstrap

import { Col, Row } from 'react-bootstrap'


// components

import TeamCard from '../../../UI/teamCard'

// reducer

import { useSelector, useDispatch } from 'react-redux'
import { getTeamAsync } from '../../../store/teamSlice'


//




const Team = () => {

  useEffect(() => {
    dispatch(getTeamAsync())
  }, [])

  const dispatch = useDispatch()
  const team = useSelector(state => state.team.team)




  let [position, setPosition] = useState(0)
  const [teamCards, setTeamCards] = useState([])






  const autoSlider = () => {
    setInterval(() => {
      setPosition((position  -=  438))
    }, 13000)

  }









  return(

      <Row>
        <Col md={12} className='mt-5 mb-5'>

        <div className="team-title">наша команда</div>
        <div className="team-subtitle">наши специалисты</div>


          <Col className='d-flex' style={{overflow: 'hidden' }}>

              <Col className='d-flex' style={{position: 'relative', left: position, transition: '1s all ease'}}>

                {(team.length < 1) ? <></> : team.map((card, index) => {
                  return <TeamCard key={index} img={card.avatar} name={card.name} profession={card.profession}></TeamCard>
                })}

              </Col>

          </Col>






        </Col>
      </Row>


  )

}

export default Team