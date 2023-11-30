import './myInput.css'

const MyInput = (props) => {

  return(
    <input className="myInput" {...props} type="text" />
  )
}

export default MyInput