import './../css/modal_rental.css'

// components

import MyButton from '../../UI/myButton'

//

import { useState } from 'react'


const ModalRental = ({modalRentalOpen}) => {
  const {modalRental, setModalRental} = modalRentalOpen
  console.log(modalRental)


  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [text, setText] = useState('')
  const [modalRentalChk, setModalRentalChk] = useState(false)


  const modalRentalMessage = () => {

    if(modalRentalChk === false) {
      alert ('примите условия соглашения')
      return
    }

    const message = {
      name: name,
      phone: phone,
      text: text
    }


    console.log(message)
    setName('')
    setPhone('')
    setText('')


    return message
  }


  return(
    <div className="modal-rental-bg">
      <div className="modal-rental-container">
        <div className="modal-rental-box">


        <div className="modal-top-title-box">

                <div className="modal-rental-title">готовы создатьпроект вместе с нами?</div>
                <button className="close-modal-rental" onClick={() => {setModalRental(false)}}>&#10006;</button>

                </div>


                <div className="modal-rental-subtitle">Оставьте информацию и наш специалист перезвонит Вам.</div>


                <div className="modal-inputs-box">

                  <input className='modal-rental-input' type="text" name="name" id="" placeholder='name' value={name} onChange={(e) => {setName(e.target.value)}}/>

                  <input className='modal-rental-input' type="tel" name="phone" id="" placeholder='phone' value={phone} onChange={(e) => {setPhone(e.target.value)}}/>

                  <textarea className='modal-rental-area-input' name="text" id="" placeholder='text' value={text} onChange={(e) => {setText(e.target.value)}}></textarea>

                </div>


                <div className="modal-rental-submit-box">
                <input className='modal-rental-chk' type="checkbox" name="" id="" onChange={() => {setModalRentalChk(prev => !prev)}} checked={modalRentalChk}/>
                <div className='modal-rental-chk-text'>Я согласен с политикой конфиденциальности</div>

                <MyButton style={{marginLeft: 150 + 'px'}} onClick={() => {modalRentalMessage()}}>Отправить</MyButton>
                </div>




        </div>
      </div>
    </div>
  )
}


export default ModalRental