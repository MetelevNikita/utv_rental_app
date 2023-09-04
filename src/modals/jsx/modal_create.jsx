
import './../css/modal_create.css'

// components

import MyButton from '../../UI/myButton'

//


import { useState } from 'react'

const ModalCreate = ({modalCreateOpen}) => {

  const {modalCreate, setModalCreate} = modalCreateOpen


  const [name, setName] = useState('')
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')


  const modalCreateMessage = () => {

      const message = {
        name: name,
        phone: phone,
        email: email,
        text: text
      }

      console.log(message)
      return message

  }





  return(

      <div className="modal-create-bg">

            <div className="modal-create-container">
                <div className="modal-create-box">



                  <div className="modal-top-title-box">

                      <div className="modal-create-title">готовы создатьпроект вместе с нами?</div>
                      <button className="clase-modal-create" onClick={() => {setModalCreate(false)}}>&#10006;</button>

                  </div>


                  <div className="modal-create-subtitle">Оставьте информацию и наш специалист перезвонит Вам.</div>


                  <div className="modal-inputs-box">

                        <input className='modal-create-input' type="text" name="name" id="" placeholder='name' value={name} onChange={(e) => {setName(e.target.value)}}/>

                        <input className='modal-create-input' type="tel" name="phone" id="" placeholder='phone' value={phone} onChange={(e) => {setPhone(e.target.value)}}/>

                        <input className='modal-create-input' type="email" name="email" id="" placeholder='email' value={email} onChange={(e) => {setEmail(e.target.value())}}/>

                        <textarea className='modal-create-area-input' name="text" id="" placeholder='text' value={text} onChange={(e) => {setText(e.target.value)}}></textarea>

                  </div>


                  <div className="modal-create-submit-box">
                    <input className='modal-create-chk' type="checkbox" name="" id="" />
                    <div className='modal-create-chk-text'>Я согласен с политикой конфиденциальности</div>

                    <MyButton style={{marginLeft: 150 + 'px'}} onClick={() => {modalCreateMessage()}}>Отправить</MyButton>
                  </div>


                </div>
            </div>

      </div>






  )
}

export default ModalCreate