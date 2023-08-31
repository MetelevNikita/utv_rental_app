import './../UI/rentalCard.css'

// components

import MyButton from './myButton'


const RentalCard = ({img, title, subtitle, quantity, price, id}) => {

  return(
    <div className="rental-card-container" id={id}>
      <img className="rental-card-img" src={img} alt="rentalCardImg" />

      <div className="rental-card-title">{title}</div>

      <hr className='rental-card-line-top'/>

      <div className="rental-card-subtitle">{subtitle}</div>
      <div className="rental-card-quantity">Количество: {quantity}шт.</div>

      <hr className='rental-card-line-bottom'/>

      <div className="rental-card-price">Цена: {price} руб</div>

      <MyButton>Арендовать</MyButton>




    </div>
  )
}

export default RentalCard