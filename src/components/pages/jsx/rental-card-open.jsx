import '../css/pack-card-open.css'

import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'motion/react'

// bootstrap

import { Container, Row, Col } from 'react-bootstrap'

// redux

import { useSelector, useDispatch } from 'react-redux'
import { getProductAsync } from '../../../store/productSlice'
import { addToTrash } from '../../../store/trashActiveSlice'


// components

import MyButton from '../../../UI/myButton'




const RentalCardOpen = ({ trash, modalRentalSubmitAnimation, modalAnimation }) => {

  const { id } = useParams()
  const [showImage, setShowImage] = useState(null)
  const [currentCard, setCurrentCard] = useState(null)

  console.log(id)



  const dispatch = useDispatch()
  const productState = useSelector(state => state.product.product)


  const {modalOpen, api} = modalAnimation
  const {modalSubmitRentalOpen, apiSubmitRental} = modalRentalSubmitAnimation
  const {counterTrash, setCounterTrash} = trash


  useEffect(() => {
    dispatch(getProductAsync())
  }, [])



  useEffect(() => {
    if (!id) return
    setCurrentCard(productState.find(item => item.id == id))
  }, [])




  if (!currentCard) {
    return <>LOADING</>
  }

  console.log('RENTAL!!!!!')


  const addToTrashCard = () => {


    dispatch(addToTrash({title: productState[0].title, card: productState[0], counterQuantity: counterTrash}))
    setCounterTrash(counterTrash + 1)


    apiSubmitRental.start({
      from: {opacity: 0, transform: 'scale(0)'},
      to: {opacity: 1, transform: 'scale(1)'}
    })

  }



  function createSetList (set) {


    let newData = []
    const data = set.trim().split('\n')
    
    for (let value of data) {
      if (value.length > 1) {
        newData.push(value)
      }
    }

    return newData

  }


  const techList = createSetList(currentCard.set)


  return (

    <Container className='mt-5'>
      <Row>

        <Col md={6}>

            <div className='card-title-image-container'>
              <img className='card-title-image' src={showImage ?? currentCard.imageOne} alt="" />
            </div>

            <div className='card-open-image-container'>
                <div
                  onClick={() => {setShowImage(currentCard.imageOne)}}
                  className={(showImage === currentCard.imageOne || showImage === null) ? 'card-open-image-box_active' : 'card-open-image-box'}>
                    <img src={currentCard.imageOne}
                  alt="img_one"/>
                </div>


                <div
                  onClick={() => {setShowImage(currentCard.imageTwo)}}
                  className={(showImage === currentCard.imageTwo) ? 'card-open-image-box_active' : 'card-open-image-box'}>
                    <img src={currentCard.imageTwo} alt="img_two"/>
                  </div>


                <div
                  onClick={() => {setShowImage(currentCard.imageThree)}}
                  className={(showImage === currentCard.imageThree) ? 'card-open-image-box_active' : 'card-open-image-box'}>
                    <img src={currentCard.imageThree} alt="img_three"/>
                </div>
            </div>

        </Col>


        <Col md={6}>
        
          <div className='card-open_title'>{currentCard.title}</div>
          <div className='card-open_description'>{currentCard.description}</div>

          {/*  */}

          <hr className='card-open_line'/>

          <div className='card-open_tech_list_title'>Комплект поставки</div>
          
          <ul style={{paddingLeft: '0'}}>
            {
              (techList.length > 1) && techList.map((item) => {
                return <li className='card-open_tech_list_value' style={{listStyle: 'inside'}}>{item}</li>
              })
            }
          </ul>

          {/*  */}

          <hr className='card-open_line'/>

          <div className='card-open_info_wrapper'>
            <div className='card-open_info_price'>Цена: {currentCard.price} р</div>
            <div className='card-open_info_quantity'>Количество: {currentCard.quantity}</div>
          </div>


          <Row className='mb-5 mt-3'>

            <Col mb={6} sm={4} xs={12} className='mb-3'><MyButton className={'myBtn_blue'} style={{marginRight: 20 + 'px'}} onClick = {() => {addToTrashCard()}}>Добавить в корзину</MyButton></Col>
            <Col mb={6} sm={4} xs={12} className='mb-3'><MyButton className={'myBtn_blue'} onClick={() => {api.start({from: {opacity: 0, transform: 'scale(0)'}, to: {opacity: 1, transform: 'scale(1)'}})}}>Задайте вопрос</MyButton></Col>

          </Row>
        
        </Col>


      </Row>


    </Container>

  )
}

export default RentalCardOpen
