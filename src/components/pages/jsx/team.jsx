
import './../css/team.css'

// bootstrap

import { Container, Col, Row } from 'react-bootstrap'


// components

import TeamCard from '../../../UI/teamCard'
import MyButton from '../../../UI/myButton'

//

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';



const Team = () => {



  return(
    <Container>

        <CarouselProvider naturalSlideHeight={60} naturalSlideWidth={100} totalSlides={4} infinite={true} >

        <Slider  spinner={true}>
          <Slide><TeamCard/></Slide>
          <Slide><TeamCard /></Slide>
          <Slide><TeamCard /></Slide>
          <Slide><TeamCard /></Slide>
        </Slider>

        <ButtonBack><MyButton>Назад</MyButton></ButtonBack>
        <ButtonNext><MyButton>Вперед</MyButton></ButtonNext>
        </CarouselProvider>

    </Container>

  )

}

export default Team