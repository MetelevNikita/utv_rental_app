import './../css/modal_rental.css'

// components

import MyButton from '../../UI/myButton'
import MyCheckBox from '../../UI/myCheckBox'
import MyInput from '../../UI/myInput'
import MyTextArea from '../../UI/myTextArea'
import MyDate from '../../UI/myDate'


//

import { Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// redux

import { useDispatch, useSelector } from 'react-redux'
import { getTrashAsync, postTrashAsync } from '../../store/trashSlice'


const ModalRental = ({trash, modalRentalAnimation, modalSubmitAnimation}) => {

  useEffect(() => {
    dispatch(getTrashAsync())
  }, [])

  const dispatch = useDispatch()
  const trashCard = useSelector(state => state.trash.trash)


  const {modalRentalOpen, apiRental} = modalRentalAnimation
  const {modalSubmit, apiSubmit} = modalSubmitAnimation
  const {counterTrash, setCounterTrash} = trash



  const [modalName, setModalName] = useState('')
  const [modalPhone, setModalPhone] = useState('')
  const [modalText, setModalText] = useState('')
  const [modalDateStart, setModalDateStart] = useState('')
  const [modalDateEnd, setModalDateEnd] = useState('')
  const [modalRentalChk, setModalRentalChk] = useState(false)



  const selectedTrash = trashCard.map((item) => {return item.title})
  let sum = 0
  const selectedPrice = trashCard.map((item) => {return sum += Number(item.price)})


  const navigate= useNavigate()

  const messageTG = ` ЗАЯВКА НА ОБОРУДОВАНИЕ \n \n Имя ${modalName} \n Телефон ${modalPhone} \n Сообщение ${modalText} \n Дата бронирования ${modalDateStart} - ${modalDateEnd} \n Оборудование ${selectedTrash.join(', ')} на сумму ${selectedPrice}$`

  const archive = {
    modalName,
    modalPhone,
    modalText,
    modalDateStart,
    modalDateEnd,
    selectedTrash
  }





  const sendToTelegram = () => {

    const TOKEN_API = '6300640727:AAEfkGCzf4alOlm7vRDiFkgvYixyUeggxz0'
    const CHAT_ID = '-4033081603'
    const URL = `https://api.telegram.org/bot${TOKEN_API}/sendMessage`


    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({chat_id: CHAT_ID, text: messageTG})

    }).then(responce => responce.json())
      .then(data => console.log(data))
  }




  const modalRentalMessage = () => {

    if(modalName === '' && modalPhone === '' && modalText === '' && modalDateStart === '' && modalDateEnd === '') {
      return alert('Заполните все поля')
    }

    if(modalRentalChk === false) {
      alert ('примите условия соглашения')
      return
    }

    sendToTelegram()


    setModalName('')
    setModalPhone('')
    setModalText('')
    setModalDateStart('')
    setModalDateEnd('')


    setCounterTrash(0)
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

              <Col><MyInput style={{marginBottom: 20 + 'px', width: 100 + '%'}} placeholder='name' value={modalName} onChange={(e) => {setModalName(e.target.value)}}></MyInput></Col>
              <Col><MyInput style={{marginBottom: 20 + 'px', width: 100 + '%'}} placeholder='phone' value={modalPhone} onChange={(e) => {setModalPhone(e.target.value)}}></MyInput></Col>
              <Col><MyTextArea style={{marginBottom: 10 + 'px', width: 100 + '%'}} placeholder='text' value={modalText} onChange={(e) => {setModalText(e.target.value)}}></MyTextArea></Col>

              <Col md={12} sm={12} className='d-flex justify-content-around align-items-center'>
                  <Col md={4}><MyDate title={'Дата начала'} style={{width: 100 + '%'}} value={modalDateStart} onChange={(e) => {setModalDateStart(e.target.value)}}></MyDate></Col>
                  <Col md={4}><MyDate title={'Дата конца'} style={{width: 100 + '%'}} value={modalDateEnd} onChange={(e) => {setModalDateEnd(e.target.value)}}></MyDate></Col>
              </Col>
          </Row>

          <Row md={12} className='mt-2'>
            <ul className='trash-modal-list'>
            <Col>Ваш заказ</Col>
            {(trashCard.length < 1) ? <li style={{fontSize: "10px"}}>Список пуст</li> : trashCard.map((item) => { return <li key={item.id} style={{fontSize: "10px"}} className='trash-modal-list-item'>{item.title}</li>})}
            </ul>
          </Row>



          <Row md={12}>
            <Col md={6} className='d-flex justify-content-center mb-4'><MyCheckBox title={'Я согласен с политикой конфиденциальности'} checked={modalRentalChk} onChange={() => {setModalRentalChk(prev => !prev)}}></MyCheckBox></Col>
            <Col md={6} className='d-flex justify-content-center mb-4'><MyButton className={'myBtn'} onClick={() => {modalRentalMessage()}}>Отправить</MyButton></Col>
          </Row>




        </Col>





    </Row>

  )
}


export default ModalRental