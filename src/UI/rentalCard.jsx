import './../UI/rentalCard.css'

//

import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { rentalData } from '../servers/rentalData'

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

      <Link to={`/rental/${id}`}><MyButton>Посмотреть</MyButton></Link>
      <MyButton style={{marginLeft: 10 + 'px'}} onClick={() => {addToTrash()}}>Добавить в корзину</MyButton>





    </div>
  )
}

export default RentalCard