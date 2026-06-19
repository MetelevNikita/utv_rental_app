import './myCheckBox.css'

const MyCheckBox = (props) => {


  async function getDocs () {
    try {

      const response = await fetch('/api/v1/docs/politic', {
        method: 'GET',
      })

      const data = await response.text()
      console.log(data)
      
    } catch (error) {
      console.error(error)
      return error
    }
  }


  return(
    <div className="chk-box">

        <input className='chk-checkbox' type="checkbox" {...props}/>
        <a target='_blank' href='/api/v1/docs/politic' className="chk-title">{props.title}</a>

    </div>
  )
}

export default MyCheckBox