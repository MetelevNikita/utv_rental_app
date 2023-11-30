import './myCheckBox.css'

const MyCheckBox = (props) => {


  return(
    <div className="chk-box">

        <input className='chk-checkbox' type="checkbox" {...props}/>
        <div className="chk-title">{props.title}</div>

    </div>
  )
}

export default MyCheckBox