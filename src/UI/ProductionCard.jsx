import React from 'react'
import { motion } from "motion/react"

// css

import './ProductionCard.css'

// 

import { Container, Row, Col } from 'react-bootstrap'

// 

import checkImg from './../asset/Production_card/check.png'

// components

import MyButtonMotion from './MyButtonMotion'
import MyInput from './myInput'
import MyTextArea from './myTextArea'
import MyCheckBox from './myCheckBox'


const ProductionCard = ({title, subtitle, listType, list, field, formData, name, handler}) => {

    const {form, setForm} = formData

  return (
    <Container>


            <div className='production-card-container'>

                <div className='production-card-wrappper'>

                    {/*  */}
                    <Row className='d-flex flex-column align-items-center justify-content-between'>
                        <Col className='mb-3'>

                        <div className='production-card-info-wrapper'>
                            <div className='production-card-title'>{title}</div>
                            <span className='production-card-subtitle'>{subtitle}</span>
                        </div>


                    {/*  */}

                        <span className='production-card-list-type'>{listType}</span>
                        <ul className='production-list-container'>
                            {
                                Array.from(list).map((item) => {
                                    return (
                                        <motion.div
                                            className='production-list-type-li-wrapper'
                                            whileHover={{x: 10}}
                                        >
                                            <img className='production-list-type-li-icon' src={checkImg} alt='icon'/>
                                            <li className='production-list-type-li-item'>{item.title}</li>
                                        </motion.div>
                                        
                                    )
                                })
                            }
                        </ul>


                    {/*  */}


                        {
                            field && field.map((item) => {
                                if (item.type === 'input') {
                                    return (
                                        <Col><MyInput
                                            style={{
                                                width: '100%',
                                                borderRadius: '8px',
                                                borderWidth: '1px',
                                                borderColor: '#27272A',
                                                marginTop: '10px',
                                                marginBottom: '10px',
                                                backgroud: 'black'
                                            }}
                                            type={item.type}
                                            placeholder={item.placeholder}
                                            value={form.name}
                                            onChange={(e) => setForm(
                                                {...form, [item.name]: e.target.value}
                                            )}
                                        /></Col>
                                    )
                                } else {
                                    return (
                                        <Col>
                                            <MyTextArea 
                                                style={{
                                                    width: '100%',
                                                    borderRadius: '8px',
                                                    borderWidth: '1px',
                                                    borderColor: '#27272A',
                                                    marginTop: '10px',
                                                    marginBottom: '10px',
                                                    backgroud: 'black'
                                                }}
                                                type={item.type}
                                                placeholder={item.placeholder}
                                                value={form.name}
                                                onChange={(e) => setForm(
                                                    {...form, [item.name]: e.target.value}
                                                )}
                                            />
                                        </Col>
                                    )
                                }



                            })
                        }


                        <MyCheckBox
                            title={'Я согласен с политикой конфиденциальности'}
                            value={form.politic}
                            onChange={(e) => {
                                setForm({...form, ['politic']: e.target.checked})
                            }}
                        />

                        </Col>


                    {/*  */}

                    <Col className='d-flex justify-content-end vh-100'>
                        <MyButtonMotion
                            text={'Отправить'}
                            onClick={() => {
                                handler(title)
                            }}
                        />
                    </Col>
                    </Row>

         





                </div>

            </div>



    </Container>
  )
}

export default ProductionCard