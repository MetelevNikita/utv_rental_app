import './../UI/myButton.css'

const MyButton = ({children, ...props}) => {


  return(
  <button className="myBtn" {...props}>{children}</button>
  )
}

export default MyButton