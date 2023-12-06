import './myDate.css'

const MyDate = (props) => {


  return(
    <>

    <span className='myDate-title'>{props.title}</span>
    <input className='myDate' type="date" name="" id="" {...props}/>

    </>

  )
}


export default MyDate