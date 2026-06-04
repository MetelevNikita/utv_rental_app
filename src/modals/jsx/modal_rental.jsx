import './../css/modal_rental.css'

// components

import MyButton from '../../UI/myButton'
import MyCheckBox from '../../UI/myCheckBox'
import MyInput from '../../UI/myInput'
import MyTextArea from '../../UI/myTextArea'
import MyDate from '../../UI/myDate'


//

import { Row, Col } from 'react-bootstrap'
import { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

// redux

import { useDispatch, useSelector } from 'react-redux'


const ModalRental = ({trash, modalRentalAnimation, modalSubmitAnimation}) => {

  const mechanic = 12000
  const dispatch = useDispatch()
  const trashCard = useSelector(state => state.trashActive.trashActive)
  const navigate = useNavigate()


  const {modalRentalOpen, apiRental} = modalRentalAnimation
  const {modalSubmit, apiSubmit} = modalSubmitAnimation
  const {counterTrash, setCounterTrash} = trash


  const [modalDateStart, setModalDateStart] = useState('')
  const [modalDateEnd, setModalDateEnd] = useState('')
  const [modalRentalChk, setModalRentalChk] = useState(false)


  // 

  function getDateRange(start, end) {

    let datesArr = []

    const startDate = new Date(start)
    const endDate = new Date(end)

    const currentDate = new Date(startDate)

    const startDateWithoutTime = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())
    const endDateWithoutTime = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate())

    while (currentDate <= endDate) {
        datesArr.push(new Date(currentDate))
        currentDate.setDate(currentDate.getDate() + 1)
    }
    
    return datesArr


  }

  // 

  function finalPriceData (trashCard, dates) {

    let resPrice = 0

    if (!Array.isArray(trashCard)) return null

    for (let card of trashCard) {
      resPrice += parseInt(card.card.price) * parseInt(card.counterQuantity)
    }




    return (resPrice + mechanic) * dates.length
  }
  
  //

    const selectedTrash = useMemo(() => 
      trashCard.map(item => item.title) ?? [], 
      [trashCard]
    );
    const dates = useMemo(() => getDateRange(modalDateStart, modalDateEnd), [modalDateStart, modalDateEnd]);
    const finalPriceString = useMemo(() => {
        let resPrice = 0;

        if (!Array.isArray(trashCard)) return null;

        for (let card of trashCard) {
          resPrice += parseInt(card.card.price) * parseInt(card.counterQuantity);
        }
        
        return (resPrice + mechanic) * (dates?.length || 0);
      }, [trashCard, dates, mechanic]);






  useEffect(() => {

    setOrder({
      ...order,
      dates: [modalDateStart, modalDateEnd].join(' , '),
      agreed: modalRentalChk,
      price: finalPriceString.toString(),
      orderList: (selectedTrash.length >= 1) ? selectedTrash.join(' , ') : 'Список пуст',
    })
  }, [modalDateEnd, modalDateStart, modalRentalChk, finalPriceString, selectedTrash])




  // 


  const [order, setOrder] = useState({
    name: '',
    phone: '',
    comment: '',
    dates: [modalDateStart, modalDateEnd],
    agreed: modalRentalChk,
    orderList: '',
    price: 0
  })


  const modalRentalMessage = async () => {

    if(order.name === '' && order.phone === '' && modalDateStart === '' && modalDateEnd === '') {
      return alert('Заполните все поля')
    }

    if(modalRentalChk === false) {
      alert ('примите условия соглашения')
      return
    }

    


    const responce = await fetch('/api/v1/order', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })


    const data = await responce.json()

  
    setCounterTrash(0)
    setOrder({
      name: '',
      phone: '',
      telegramId: '',
      comment: '',
      dates: [modalDateStart, modalDateEnd],
      agreed: modalRentalChk,
      orderList: '',
      price: 0
    })
    navigate('/')

    apiRental.start({
      from: {opacity: 1, transform: 'scale(1)'},
      to: {opacity: 0, transform: 'scale(0)'},
    })

    apiSubmit.start({
      from: {opacity: 0, transform: 'scale(0)'},
      to: {opacity: 1, transform: 'scale(1)'}
    })


  }




  return(

    <Row>
      <Col style={{position: 'fixed', top: '0', left: '0', zIndex: '1', background: 'black', opacity: '0.2'}}></Col>


        <Col md={4} className='d-flex flex-column justify-content-center' style={{height: "max-content", background: "#0F0F0F", position: "fixed", top: "45%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "1", paddingLeft: "50px", paddingRight: "50px", borderRadius: "10px"}}>


        <Row className='mt-4 d-flex flex-row'>
            <Col md={6} sm={6} xs={12} className='d-flex justify-content-md-start mb-1' style={{fontSize: "26px"}}>Форма заказа</Col>
            <Col md={6} sm={6} xs={12} className='d-flex justify-content-md-end mb-1'><button className="modal-rental-close" onClick={() => {apiRental.start({
              from: {
                opacity: 1,
                transform: 'scale(1)',
              },
              to: {
                opacity: 0,
                transform: 'scale(0)',
              }
            })}}>&#10006;</button></Col>
          </Row>

          <Row md={12}>
            <Col className='mb-3' style={{color: 'grey', width: 100 + '%', fontSize: 12 + 'px'}}>Оставьте информацию и наш специалист перезвонит вам</Col>
          </Row>

          <Row md={12} className='d-flex flex-column'>

              <Col>
              <MyInput style={{marginBottom: 20 + 'px', width: 100 + '%'}} placeholder='Имя' value={order.name} onChange={(e) => {setOrder({...order, name: e.target.value})}}></MyInput></Col>
              <Col>
              <MyInput style={{marginBottom: 20 + 'px', width: 100 + '%'}} placeholder='Телефон' value={order.phone} onChange={(e) => {setOrder({...order, phone: e.target.value})}}></MyInput>
              </Col>
              <Col>
              <MyInput style={{marginBottom: 5 + 'px', width: 100 + '%'}} placeholder='Телеграм ID (00000000)' value={order.telegramId} onChange={(e) => {setOrder({...order, telegramId: e.target.value})}}></MyInput>
              <div className='modal-rental-info-tg'>*посмотреть свой телеграм ID можно в боте<a target='_blank' href='https://t.me/Getmyid_bot'>@UTV_LIVE_BOT</a></div>
              </Col>
              <Col>
              <MyTextArea style={{marginBottom: 10 + 'px', width: 100 + '%'}} placeholder='Комментарий к заказу' value={order.comment} onChange={(e) => {setOrder({...order, comment: e.target.value})}}></MyTextArea>
              </Col>

              <Col md={12} sm={12} className='d-flex justify-content-around align-items-center'>
                  <Col md={4}><MyDate title={'Дата начала'} style={{width: 100 + '%'}} value={modalDateStart} onChange={(e) => {setModalDateStart(e.target.value)}}></MyDate></Col>
                  <Col md={4}><MyDate title={'Дата конца'} style={{width: 100 + '%'}} value={modalDateEnd} onChange={(e) => {setModalDateEnd(e.target.value)}}></MyDate></Col>
              </Col>
          </Row>

          <Row>
            <Col md={12} sm={12} className='d-flex justify-content-around align-items-center'>
              <div className='modal-rental-info'>*Телеграм id необходим если вы хотите получать сообщения о статусе вашего заказа, подписаться на бота <a target='_blank' href='https://t.me/UTV_LIVE_BOT'>@UTV_LIVE_BOT</a></div>
            </Col>
          </Row>

          <Row md={12} className='mt-2'>
            <ul className='trash-modal-list'>
            <Col>Ваш заказ</Col>
            {(trashCard.length < 1) ? <li style={{fontSize: "10px"}}>Список пуст</li> : trashCard.map((item, index) => { return <li key={index} style={{fontSize: "10px"}} className='trash-modal-list-item'>{item.title}</li>})}
            </ul>
          </Row>


          {
            (modalDateStart && modalDateEnd) && 
          
              <Row md={12} className='mt-2'>
                <Col>
                  <div>Сумма заказа {finalPriceString} р</div>
                </Col>
              </Row>
          }

          <Row md={12} className='mt-2'>
            <Col md={6} className='d-flex justify-content-center mb-4'>
              <MyCheckBox title={'Я согласен с политикой конфиденциальности'} checked={modalRentalChk} onChange={() => {setModalRentalChk(prev => !prev)}}></MyCheckBox>
            </Col>

            <Col md={6} className='d-flex justify-content-center mb-4'>
              <MyButton className={'myBtn'} onClick={async () => {await modalRentalMessage()}}>Отправить</MyButton>
            </Col>
          </Row>


        </Col>
    </Row>

  )
}


export default ModalRental