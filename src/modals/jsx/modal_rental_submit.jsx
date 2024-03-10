import './../css/modal_rental_submit.css'

//

import { Col, Row } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

// components

import MyButton from '../../UI/myButton'


const ModalRentalSubmit = ({modalRentalSubmitClose}) => {


  const {modalRentalSubmit, setModalRentalSubmit} = modalRentalSubmitClose

  const navigate = useNavigate()


  const goToTrash = () => {
    setModalRentalSubmit(false)
    navigate('/trash')
  }


  return(

    <Row>
      <Col md={6} className="modal-rental-submit-container d-flex flex-column justify-content-center">


              <Col className="modal-rental-submit-box">

              <button className='modal-rental-submit-icon'><svg className="modal-submit-icon" xmlns="http://www.w3.org/2000/svg" width="119" height="119" viewBox="0 0 119 119" fill="none">
              <path d="M63.9094 118.993H54.8451C54.6425 118.653 54.2954 118.781 54.0065 118.76C51.7365 118.545 49.4808 118.199 47.2508 117.723C32.8379 114.562 21.0575 107.153 12.1539 95.4163C2.28134 82.4027 -1.56007 67.6442 0.569134 51.4623C2.26737 38.5442 7.79072 27.3618 16.9085 18.0547C28.0321 6.70917 41.6017 0.677571 57.4775 0.0508874C69.0623 -0.415048 79.9459 2.31533 89.8395 8.37949C105.774 18.1408 115.322 32.2913 118.355 50.7796C118.588 52.2124 118.532 53.6847 119.001 55.0802V64.1544C118.558 65.2353 118.635 66.4002 118.472 67.5277C116.76 79.493 111.949 90.0557 103.882 99.0483C94.3371 109.676 82.4859 116.11 68.3285 118.35C66.8516 118.569 65.3374 118.508 63.9094 118.993ZM37.7882 54.5095C37.2914 54.5701 36.7989 54.6619 36.3136 54.7844C32.6912 55.9329 31.6708 60.3336 34.4267 63.113C39.5517 68.2802 44.6953 73.428 49.8576 78.5564C52.5901 81.2891 55.2575 81.2799 58.011 78.5239C68.3588 68.1786 78.7051 57.8309 89.0498 47.4809C89.3877 47.1621 89.7066 46.8237 90.0049 46.4675C90.5404 45.8016 90.8935 45.0079 91.0298 44.1643C91.1661 43.3207 91.0807 42.4563 90.7821 41.6557C90.4836 40.855 89.982 40.1457 89.3267 39.5974C88.6714 39.0491 87.8848 38.6805 87.0441 38.5279C85.1082 38.1598 83.5987 38.9076 82.2545 40.2565C73.0917 49.4385 63.9288 58.6167 54.7659 67.791C54.0857 68.4759 53.7479 68.4899 53.0677 67.791C49.2705 63.9237 45.4128 60.1171 41.59 56.2754C40.5371 55.2084 39.3327 54.5305 37.7882 54.5095Z" fill="#00B0E1"/>
              </svg></button>

              <div className="modal-rental-submit-title">Карточка добавлена в корзину</div>

              <Row md={12} className='d-flex flex-row justify-content-center'>
                <Col md={6} className='d-flex justify-content-center mt-3'><MyButton className={'myBtn'} onClick={() => {setModalRentalSubmit(false)}}>Продолжить</MyButton></Col>
                <Col md={6} className='d-flex justify-content-center mt-3'> <MyButton className={'myBtn'} onClick={() => {goToTrash()}}>Перейте в корзину</MyButton></Col>
              </Row>

              </Col>

      </Col>
    </Row>

  )
}


export default ModalRentalSubmit