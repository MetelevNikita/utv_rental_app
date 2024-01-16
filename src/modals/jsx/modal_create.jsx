
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

const ModalCreate = ({modalCreateOpen, modalSubmitOpen}) => {

  const {modalCreate, setModalCreate} = modalCreateOpen
  const {modalSubmit, setModalSubmit} = modalSubmitOpen


  const [modalCreateChk, setModalCreateChk] = useState(false)


  const [name, setName] = useState('')
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [text, setText] = useState('')



  const messageTG = ` ЗАЯВКА С САЙТА \n \n Имя ${name} \n Телефон ${phone} \n Email ${email} \n Сообщение ${text}`


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





  const modalCreateMessage = () => {

    if (name === '' && email === '' && phone === '' && text === '' ) {
      alert('заполните все поля')
      return
    }

    if (modalCreateChk === false) {
      alert('примите условия соглашения')
      return
    }


       const message = {
        name: name,
        phone: phone,
        email: email,
        text: text
      }

      console.log(message)


      sendToTelegram()


      setName('')
      setEmail('')
      setPhone('')
      setText('')
      setModalCreate(false)
      setModalSubmit(true)
      setModalCreateChk(false)

  }



  return(
    <Row className='d-flex justify-content-center'>
      <Col md={3} sm={12} xs={12}>
           <div className="modal-create-bg">

            <div className="modal-create-container">
                <div className="modal-create-box">


                  <Row className='mt-5'>

                      <Col md={9} className='d-flex justify-content-md-start md-3'><div className="modal-create-title">готовы создатьпроект вместе с нами?</div></Col>
                      <Col md={3} className='d-flex justify-content-md-end align-items-md-start md-5'><button className="modal-create-close" onClick={() => {setModalCreate(false)}}>&#10006;</button></Col>

                  </Row>


                  <Row>
                    <Col><div className="modal-create-subtitle">Оставьте информацию и наш специалист перезвонит Вам.</div></Col>
                  </Row>




                    <Row className='mt-5'>

                        <MyInput style={{marginBottom: 20 + 'px'}} type={'text'} placeholder='name' value={name} onChange={(e) => {setName(e.target.value)}}></MyInput>
                        <MyInput style={{marginBottom: 20 + 'px'}} type={'phone'} placeholder='phone' value={phone} onChange={(e) => {setPhone(e.target.value)}}></MyInput>
                        <MyInput style={{marginBottom: 20 + 'px'}} type={'email'} placeholder='email' value={email} onChange={(e) => {setEmail(e.target.value)}}></MyInput>
                        <MyTextArea style={{marginBottom: 20 + 'px'}} value={text} onChange={(e) => {setText(e.target.value)}}></MyTextArea>

                    </Row>



                    <Row className='mt-2 mb-5'>

                      <Col md={6} sm={6} xs={12} className='d-flex justify-content-md-start mb-3'><MyCheckBox title={'Я согласен с политикой конфиденциальности'} onChange={() => {setModalCreateChk(prev => !prev)}} checked={modalCreateChk}></MyCheckBox></Col>
                      <Col md={6} sm={6} xs={12} className='d-flex justify-content-md-end mb-3'><MyButton className={'myBtn'} onClick={() => {modalCreateMessage()}}>Отправить</MyButton></Col>

                    </Row>







                  </div>
              </div>

            </div>



      </Col>

    </Row>








  )
}

export default ModalCreate