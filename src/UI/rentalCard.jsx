import './../UI/rentalCard.css'

//

import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { rentalData } from '../servers/rentalData'
import { Col } from 'react-bootstrap'

// components

import MyButton from './myButton'

// redux

import { useDispatch, useSelector } from 'react-redux'
import { addTrash } from '../store/trash-slice'

//


const RentalCard = ({img, title, subtitleShort, quantity, price, id, addGetTrash}) => {

  const {counterTrash, setCounterTrash} = addGetTrash


  const dispatch = useDispatch()



  const addToTrash = () => {

    dispatch(addTrash(rentalData[id]))
    setCounterTrash(counterTrash + 1)

  }









  return(
    <div className="rental-card-container" id={id}>
      <img className="rental-card-img" src={img} alt="rentalCardImg" />

      <div className="rental-card-title">{title}</div>

      <hr className='rental-card-line-top'/>

      <div className="rental-card-subtitle">{subtitleShort}</div>
      <div className="rental-card-quantity">Количество: {quantity}шт.</div>

      <hr className='rental-card-line-bottom'/>

      <div className="rental-card-price">Цена: {price} руб</div>

      <Col md={6} sm={12} xs={12} className='mb-2'><Link style={{marginRight: 10 + 'px'}} to={`/rental/${id}`}><MyButton>Посмотреть</MyButton></Link></Col>
      <Col md={6} sm={12} xs={12} className='mb-2'><MyButton onClick={() => {addToTrash()}}>Добавить в корзину</MyButton></Col>






    </div>
  )
}

export default RentalCard