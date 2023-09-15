import './../css/rental-all-card.css'

// bootstrap

import { Container, Col, Row } from "react-bootstrap"

// components


import { rentalData } from '../../../servers/rentalData'
import RentalCard from '../../../UI/rentalCard'


//

import { Link } from 'react-router-dom'



const RentalAllCard = () => {







  return(
    <Container>
      <Row>
        <Col className='col-12 col-xl-12 col-sm-12'>
            <div className="rental-all-card-container">

                <div className='rental-all-card-title mb-5'>Камеры</div>


                <div className="rental-box-title d-flex col-sm-12 flex-xl-row flex-md-row flex-sm-column">
                  {rentalData.map((card,index) => {
                    if(card.category === 'Камеры') {
                      return <Col key={card.id} className='col-xl-4 col-md-4 col-sm-12 col-xs-12'><RentalCard id={card.id} img={card.img} title={card.title} subtitle={card.subtitle} price={card.price} quantity={card.quantity}></RentalCard></Col>
                    }
                  })}
                </div>


                <div className='rental-all-card-title mb-5'>Свет</div>


                <div className="rental-box-camera d-flex col-sm-12 flex-xl-row flex-md-row flex-sm-column">
                  {rentalData.map((card, id) => {
                    if(card.category === 'Свет') {
                      return <Col key={id} className='col-xl-4 col-md-4 col-sm-12 col-xs-12'><RentalCard id={card.id} img={card.img} title={card.title} subtitle={card.subtitle} price={card.price} quantity={card.quantity}></RentalCard></Col>
                    }
                  })}
                </div>



                <div className='rental-all-card-title mb-5'>Звук</div>


                <div className="rental-box-camera d-flex flex-xl-row flex-md-row col-sm-12 flex-sm-column">
                  {rentalData.map((card, id) => {
                    if(card.category === 'Звук') {
                      return <Col key={id} className='col-xl-4 col-md-4 col-sm-12 col-xs-12'><RentalCard id={card.id} img={card.img} title={card.title} subtitle={card.subtitle} price={card.price} quantity={card.quantity}></RentalCard></Col>
                    }
                  })}
                </div>



                <div className='rental-all-card-title mb-5'>Операторская техника</div>


                <div className="rental-box-camera d-flex flex-xl-row flex-md-row col-sm-12 flex-sm-column">
                  {rentalData.map((card, id) => {
                    if(card.category === 'Операторская техника') {
                      return <Col key={id} className='col-xl-4 col-md-4 col-sm-12 col-xs-12'> <Link to={`/rental/${card.id}`}><RentalCard id={card.id} img={card.img} title={card.title} subtitle={card.subtitle} price={card.price} quantity={card.quantity}></RentalCard></Link></Col>
                    }
                  })}
                </div>




            </div>

        </Col>
      </Row>
    </Container>
  )
}

export default RentalAllCard