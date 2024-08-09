import React from 'react'

//

import { Col, Container, Row } from 'react-bootstrap'

//

import { animated, useSpring } from '@react-spring/web'

//

import U from '../../../asset/logoUTV/U.svg'
import T from '../../../asset/logoUTV/T.svg'
import V from '../../../asset/logoUTV/V.svg'
import PROD from '../../../asset/logoUTV/production.svg'


//




const OpenPage = () => {


  const USprings = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(-300px)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0px)'
    },
    config: {
      duration: 1000,
      mass: 5,
      friction: 14,
      tension: 120,
    }
  })

  const TSprings = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(300px)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0px)'
    },
    config: {
      duration: 1000,
      mass: 5,
      friction: 14,
      tension: 120,
    }
  })


  const VSprings = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(-300px)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0px)'
    },
    config: {
      duration: 1000,
      mass: 5,
      friction: 14,
      tension: 120,
    }

  })



  const ProdSpring = useSpring({
    from : {
      opacity: 0,
      transform: 'scale(0.9)'

    },
    to: {
      opacity: 1,
      transform: 'scale(1)'

    },
    delay: 500,
    config: {
      duration: 1600,
      mass: 5,
      friction: 120,
      tension: 120,
    }
  })






  return (

      <Container>
        <Col style={{width: '100%', marginTop: '800px'}} className='d-flex flex-column justify-content align-items-center mt-4'>

            <Col style={{width:'100%', height: 'max-content', marginTop: '200px'}} className='d-flex justify-content-center'>

              <Col md={3} className='d-flex justify-content-center' style={{overflow: 'hidden', marginRight: '10px'}}><animated.div style={USprings}><img src={U} alt="123" /></animated.div></Col>
              <Col md={3} className='d-flex justify-content-center' style={{overflow: 'hidden'}}><animated.div style={TSprings}><img src={T} alt="123" /></animated.div></Col>
              <Col md={3} className='d-flex justify-content-center' style={{overflow: 'hidden'}}><animated.div style={VSprings}><img src={V} alt="123" /></animated.div></Col>

            </Col>

            <Col style={{width: '100%'}} className='d-flex justify-content-center'>

              <Col md={9} className='d-flex justify-content-center mt-3'><animated.div style={ProdSpring}><img src={PROD} alt="" /></animated.div></Col>

            </Col>

      </Col>
      </Container>

  )
}

export default OpenPage
