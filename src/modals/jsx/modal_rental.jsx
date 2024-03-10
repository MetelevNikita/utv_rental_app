import './../css/modal_rental.css'

// components

import MyButton from '../../UI/myButton'
import MyCheckBox from '../../UI/myCheckBox'
import MyInput from '../../UI/myInput'
import MyTextArea from '../../UI/myTextArea'
import MyDate from '../../UI/myDate'


//

import { Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// redux

import { useDispatch, useSelector } from 'react-redux'
import { setFireStore } from '../../store/archiveSlice'
import { clearTrash } from '../../store/trash-slice'


const ModalRental = ({modalRentalOpen, trash}) => {

  const {modalRental, setModalRental} = modalRentalOpen
  const {counterTrash, setCounterTrash} = trash

  console.log(counterTrash)

  const [modalName, setModalName] = useState('')
  const [modalPhone, setModalPhone] = useState('')
  const [modalText, setModalText] = useState('')
  const [modalDateStart, setModalDateStart] = useState('')
  const [modalDateEnd, setModalDateEnd] = useState('')
  const [modalRentalChk, setModalRentalChk] = useState(false)

  const dispatch = useDispatch()


  const trashStore = useSelector(state => state.addTrash.trash)

  const selectedTrash = trashStore.map((item) => {return item.title})
  let sum = 0
  const selectedPrice = trashStore.map((item) => {return sum += Number(item.price)})


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
    dispatch(setFireStore(archive))


    setModalName('')
    setModalPhone('')
    setModalText('')
    setModalDateStart('')
    setModalDateEnd('')

    setModalRental(false)
    setCounterTrash(0)
    dispatch(clearTrash([]))
    navigate('/')

  }




  return(

    <Row className='d-flex justify-content-center modal-rental-bg'>

      <Col md={6} sm={12} xs={12} className="modal-rental-container">


        <div className="modal-rental-box">
          <Row className='mt-5'>
            <Col md={6} sm={6} xs={12} className='d-flex justify-content-md-start mb-2' style={{fontSize: 16 + 'px'}}>Форма заказа</Col>
            <Col md={6} sm={6} xs={12} className='d-flex justify-content-md-end align-items-md-start mb-2'><button className="modal-rental-close" onClick={() => {setModalRental(false)}}>&#10006;</button></Col>
          </Row>

          <Row md={12}>
            <Col className='mt-2 mb-2' style={{color: 'grey', width: 100 + '%'}}>Оставьте информацию и наш специалист перезвонит вам</Col>
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

          <Row md={12} className='mt-4'>

            <ul className='trash-modal-list'>

              <Col>Ваш заказ</Col>

            {(trashStore.length < 1) ? <li>Список пуст</li> : trashStore.map((item) => { return <li className='trash-modal-list-item'>{item.title}</li>})}

            </ul>

          </Row>



          <Row md={12}>

            <Col md={6} className='d-flex justify-content-center mb-4'><MyCheckBox title={'Я согласен с политикой конфиденциальности'} checked={modalRentalChk} onChange={() => {setModalRentalChk(prev => !prev)}}></MyCheckBox></Col>
            <Col md={6} className='d-flex justify-content-center mb-4'><MyButton className={'myBtn'} onClick={() => {modalRentalMessage()}}>Отправить</MyButton></Col>

          </Row>

        </div>

      </Col>
    </Row>

  )
}


export default ModalRental