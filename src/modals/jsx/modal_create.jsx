
import './../css/modal_create.css'

//

import { Col, Row } from 'react-bootstrap'

// components

import MyButton from '../../UI/myButton'
import MyInput from '../../UI/myInput'
import MyTextArea from '../../UI/myTextArea'
import MyCheckBox from '../../UI/myCheckBox'

//


import { useState } from 'react'

const ModalCreate = ({modalAnimation, modalSubmitAnimation}) => {


  const {modalOpen, api} = modalAnimation
  const {modalSubmit, apiSubmit} = modalSubmitAnimation

  const [message, setMessage] = useState({
    name: '',
    phone: '',
    email: '',
    text: '',
    agree: false
  })



  const createMessage = async (message) => {

    try {
      
      if (message.name === '' && message.email === '' && message.phone === '' && message.text === '' ) {
        alert('заполните все поля')
        return
      }

      if (message.agree === false) {
        alert('примите условия соглашения')
        return
      }


      const responce = await fetch('/api/v1/message', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(message)
      })

      if (!responce.ok) {
        alert(`Ошибка при отправке сообщения, попробуйте позже ${responce.status}`)
        return
      } 
      const data = await responce.json()

        
      api.start({
        from: {
          opacity: 1,
          transform: 'scale(1)'
        }, to: {
          opacity: 0,
          transform: 'scale(0)'
        }
      })

      apiSubmit.start({
        from: {
          opacity: 0,
          transform: 'scale(0)'
        }, to: {
          opacity: 1,
          transform: 'scale(1)'
        }
      })


    } catch (error) {
      console.error(`Ошибка отправки сообщения фидбэка ${error.message}`)
      alert(`Ошибка отправки сообщения фидбэка ${error.message}`)
      return `Ошибка отправки сообщения фидбэка ${error.message}`
    }

  }



  return(
    <Row>

      <Col md={4} className='d-flex flex-column justify-content-center' style={{height: "max-content", background: "#0F0F0F", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "1", paddingLeft: "50px", paddingRight: "50px", borderRadius: "10px"}}>

        <Row className='mt-5'>
            <Col style={{fontSize: 22 + 'px', textTransform: 'uppercase'}} md={10} className='d-flex justify-content-md-start md-3'>готовы создать проект вместе с нами?</Col>
            <Col md={2} className='d-flex justify-content-md-end align-items-md-start md-5'><button className="modal-create-close" onClick={() => {api.start({
              from: {
                opacity: 1,
                transform: 'scale(1)',
              },
              to: {
                opacity: 0,
                transform: 'scale(0)',
              },

            })}}>&#10006;</button></Col>
        </Row>


        <Row className='mt-2 mb-2'>
          <Col style={{fontSize: 12 + 'px', color: 'grey'}}>Оставьте информацию и наш специалист перезвонит вам.</Col>
        </Row>

          <Row className='mt-2'>
            <MyInput style={{marginBottom: 10 + 'px'}} type={'text'} placeholder='ФИО' value={message.name} onChange={(e) => {setMessage({...message, name: e.target.value})}}></MyInput>
            <MyInput style={{marginBottom: 10 + 'px'}} type={'phone'} placeholder='ТЕЛЕФОН' value={message.phone} onChange={(e) => {setMessage({...message, phone: e.target.value})}}></MyInput>
            <MyInput style={{marginBottom: 10 + 'px'}} type={'email'} placeholder='ПОЧТА' value={message.email} onChange={(e) => {setMessage({...message, email: e.target.value})}}></MyInput>
            <MyTextArea placeholder={'СООБЩЕНИЕ'} style={{marginBottom: 10 + 'px'}} value={message.text} onChange={(e) => {setMessage({...message, text: e.target.value})}}></MyTextArea>
          </Row>


          <Row className='mt-1 mb-5'>
            <Col md={6} sm={6} xs={12} className='d-flex justify-content-md-start mb-3'><MyCheckBox title={'Я согласен с политикой конфиденциальности'} onChange={(e) => {setMessage({...message, agree: e.target.checked})}}></MyCheckBox></Col>
            <Col md={6} sm={6} xs={12} className='d-flex justify-content-md-end mb-3'><MyButton className={'myBtn'} onClick={() => {createMessage(message)}}>Отправить</MyButton></Col>
          </Row>


      </Col>
    </Row>


  )
}

export default ModalCreate