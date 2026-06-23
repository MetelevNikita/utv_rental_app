import './myDate.css'

//


import { Col, Row } from 'react-bootstrap'
import { useEffect, useRef, useState } from 'react'

const MyDate = ({ title, value, onChange, ...inputProps }) => {

  const inputRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    const input = inputRef.current
    const nextValue = value ?? ''

    if (!input || isFocused || input.value === nextValue) return

    input.value = nextValue
  }, [value, isFocused])


  return(

    <Row className='d-flex flex-column align-items-center justify-content-center mb-2'>
      <Col style={{height: 10 + 'px', width: 100 + '%'}} className='d-flex flex-column justify-content-center align-items-center mt-2' md={5}><span className='myDate-title'>{title}</span></Col>
      <Col style={{height: 45 + 'px', width: 100 + '%'}} className='d-flex flex-column justify-content-center align-items-center mt-2' md={5}>
        <input
          {...inputProps}
          ref={inputRef}
          className='myDate'
          type="date"
          defaultValue={value ?? ''}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </Col>
    </Row>


  )
}


export default MyDate
