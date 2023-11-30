import './../css/modal_rental.css'

// components

import MyButton from '../../UI/myButton'
import MyCheckBox from '../../UI/myCheckBox'
import MyInput from '../../UI/myInput'
import MyTextArea from '../../UI/myTextArea'


//

import { Row, Col } from 'react-bootstrap'
import { useState } from 'react'

// redux

import { useDispatch, useSelector } from 'react-redux'


const ModalRental = ({modalRentalOpen}) => {

  const {modalRental, setModalRental} = modalRentalOpen

  const [modalName, setModalName] = useState('')
  const [modalPhone, setModalPhone] = useState('')
  const [modalText, setModalText] = useState('')
  const [modalRentalChk, setModalRentalChk] = useState(false)


  const trashStore = useSelector(state => state.addTrash.trash)




  const modalRentalMessage = () => {

    if(modalRentalChk === false) {
      alert ('примите условия соглашения')
      return
    }

    const message = {
      name: modalName,
      phone: modalPhone,
      text: modalText
    }


    console.log(message)
    setModalName('')
    setModalPhone('')
    setModalText('')

    setModalRental(false)


    return message
  }


  return(
    <div className="modal-rental-bg">
      <div className="modal-rental-container">
        <div className="modal-rental-box">


                  <Row className='mt-5'>

                    <Col md={6} sm={6} xs={12} className='d-flex justify-content-md-start md-3'><div className="modal-rental-title">Форма заказа</div></Col>
                    <Col md={6} sm={6} xs={12} className='d-flex justify-content-md-end align-items-md-start md-5'><button className="modal-rental-close" onClick={() => {setModalRental(false)}}>&#10006;</button></Col>

                  </Row>


                  <Row>

                    <Col><div className="modal-rental-subtitle">Оставьте информацию и наш специалист перезвонит Вам.</div></Col>

                  </Row>




                  <Row className='d-flex flex-column'>

                      <Col md={4} sm={4} xs={12}><MyInput style={{marginBottom: 20 + 'px', width: 900 + 'px'}} placeholder='name' value={modalName} onChange={(e) => {setModalName(e.target.value)}}></MyInput></Col>
                      <Col md={4} sm={4} xs={12}><MyInput style={{marginBottom: 20 + 'px', width: 900 + 'px'}} placeholder='phone' value={modalPhone} onChange={(e) => {setModalPhone(e.target.value)}}></MyInput></Col>
                      <Col md={4} sm={4} xs={12}><MyTextArea style={{marginBottom: 20 + 'px', width: 900 + 'px'}} placeholder='text' value={modalText} onChange={(e) => {setModalText(e.target.value)}}></MyTextArea></Col>

                  </Row>




                <ul className='trash-modal-list'>

                  <div className='trash-modal-title'>Ваш заказ</div>

                  {(trashStore.length < 1) ? <li>Список пуст</li> : trashStore.map((item) => { return <li className='trash-modal-list-item'>{item.title}</li>})}

                </ul>

                  <Row className='mb-5'>

                    <Col md={6} sm={6} xs={12} className='d-flex justify-content-md-start md-3'><MyCheckBox title={'Я согласен с политикой конфиденциальности'} checked={modalRentalChk} onChange={() => {setModalRentalChk(prev => !prev)}}></MyCheckBox></Col>
                    <Col md={6} sm={6} xs={12} className='d-flex justify-content-md-end align-items-md-start md-5'><MyButton style={{marginLeft: 150 + 'px'}} onClick={() => {modalRentalMessage()}}>Отправить</MyButton></Col>

                  </Row>






        </div>
      </div>
    </div>
  )
}


export default ModalRental