import './../css/rental.css'

// bootstrap

import { Row, Col, Container } from 'react-bootstrap'

//

import { useState, useEffect } from 'react'

// components

import RentalCard from '../../../UI/rentalCard'
import PackCard from '../../../UI/PackCard'
import MyButton from '../../../UI/myButton'

//


import { useSelector, useDispatch } from 'react-redux'
import { getProductAsync } from '../../../store/productSlice'
import { getComplectAsync } from '../../../store/complectSlice'




const Rental = ({trash, modalRentalSubmitAnimation}) => {

  useEffect(() => {
    dispatch(getProductAsync())
    dispatch(getComplectAsync())
  }, [])

  const dispatch = useDispatch()
  const rentalProduct = useSelector(state => state.product.product)
  const rentalComplect = useSelector(state => state.complect.complect)



  const {modalSubmitRentalOpen, apiSubmitRental} = modalRentalSubmitAnimation



  const rentalMenu = [
    {
      item: 'Камеры',
      value: 'camera'
    },
    {
      item: 'Оптика',
      value: 'lens'
    },
    {
      item: 'Свет',
      value: 'light'
    },
    {
      item: 'Операторское оборудование',
      value: 'operator_equipment'
    }

  ]



  const [rental, setRental] = useState(rentalMenu[0])

  const shortText = (text) => {

    if (text.length  > 100)  {
      return  text.slice(0, 100) + '...'
    }
  }

  return(

      <Container>

        <Row>
          <Col>
          <div className="rental-title">Комплекты техники</div>
          <div className="rental-subtitle">Мы предлагаем широкий выбор оборудования, включая камеры, объективы, стабилизаторы, световое оборудование и многое другое. Все наше оборудование профессионального уровня и регулярно проходит техническое обслуживание, чтобы гарантировать его безупречную работу.</div>
          </Col>
        </Row>



        <Row className='mt-4'>

          {(!rentalComplect || rentalComplect.length < 1 ) ? <></> : rentalComplect.map((item) => {

            const short = shortText(item.description)

            return <Col>
                      <PackCard
                        id={item.id}
                        img={item.imageOne}
                        title={item.title}
                        description={short}
                        quantity={item.quantity}
                        price={item.price}
                        addGetTrash={trash}
                        modalRentalButton={modalRentalSubmitAnimation}/>
                    </Col>
          })}
          
        </Row>




        {/*  */}



        <Row>
          <Col>
          <div className="rental-title">техника</div>
          <div className="rental-subtitle">Мы предлагаем широкий выбор оборудования, включая камеры, объективы, стабилизаторы, световое оборудование и многое другое. Все наше оборудование профессионального уровня и регулярно проходит техническое обслуживание, чтобы гарантировать его безупречную работу.</div>
          </Col>
        </Row>



        <Row className='mt-4' md={12} xs={12} sm={12}>

              {rentalMenu.map((item, index) => {

                return <Col
                  key={index}
                  md={3}
                  sm={6}
                  xs={12}
                  className='d-flex justify-content-around mb-3 '>
                    <MyButton
                      onClick={(e) => {
                        const currentMenu = rentalMenu.find((item) => item.value === e.target.value)
                        setRental(currentMenu)
                      }}
                      className={(rental.value == item.value) ? 'myBtn myBtn-click' : 'myBtn'}
                      value={item.value}>
                        {item.item}
                    </MyButton>
                  </Col>
              })}

        </Row>


        <Row md={12} className='mt-4'>
          {(rentalProduct.length < 1) ? <></> : rentalProduct.map((item, index) => {
            if(item.category === rental.value) {
              return <Col md={3} key={index} className='rental-card d-flex justify-content-md-around justify-content-center'><RentalCard modalRentalButton={modalRentalSubmitAnimation} addGetTrash={trash} id={item.id} img={item.imageOne} title={item.title} subtitleShort={shortText(item.description)} price={item.price} quantity={item.quantity} counterQuantityTitle={item.counterQuantity}></RentalCard></Col>
            }
          })}
        </Row>

      </Container>


  )
}


export default Rental