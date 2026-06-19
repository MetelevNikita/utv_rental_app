import React, {useState} from 'react'
import { motion } from "motion/react"

// css

import '../css/production.css'

// 

import {Container, Row, Col} from 'react-bootstrap'


// components

import ProductionCard from '../../../UI/ProductionCard'



const Production = () => {



    const [form, setForm] = useState({
        politic: false
    })

    console.log(form)


    const typeProductionArr = [
    {
        id: 1,
        label: 'Видеопроизводство',
        value: 'Video'
    },
    {
        id: 2,
        label: 'Рекламный ролик',
        value: 'Commercial'
    },
    {
        id: 3,
        label: 'Подкасты',
        value: 'Podcast'
    },
    {
        id: 4,
        label: 'Онлайн-трансляции',
        value: 'Live-streaming'
    },
    {
        id: 5,
        label: 'Монтаж и постпродакшен',
        value: 'Post-production'
    },

    ]

    const formProductionArr = [
        {
            id: 1,
            title: 'ЗАЯВКА НА СЪЁМКУ ПОДКАСТА',
            subtitle: 'Студийная запись подкастов в уютной атмосфере с лучшим оборудованием. Помогаем с дистрибуцией и продвижением.',
            listTitle: 'ЧТО МЫ ДЕЛАЕМ',
            list: [
                {
                    icon: '',
                    title: 'Студийная запись'
                },
                             {
                    icon: '',
                    title: 'Мультикамерная съёмка'
                },
                             {
                    icon: '',
                    title: 'Аудио-монтаж'
                },
                             {
                    icon: '',
                    title: 'Дистрибуция и продвижение'
                }
            ],
            field: [
                {
                    id: 1,
                    type: 'input',
                    name: 'fio',
                    title: 'Ваше имя',
                    placeholder: 'Имя Фамилия',
                },
                {
                    id: 2,
                    type: 'input',
                    name: 'phone',
                    title: 'Телефон',
                    placeholder: '8(000) 00-00-000',
                },
                {
                    id: 3,
                    type: 'input',
                    name: 'email',
                    title: 'Почта',
                    placeholder: 'example@mail.ru',
                },
                {
                    id: 4,
                    type: 'area',
                    name: 'message',
                    title: 'Сообщение',
                    placeholder: 'Текст',
                }
            ]


        },
        {
            id: 2,
            title: 'ЗАЯВКА НА ПРЯМОЙ ЭФИР',
            subtitle: 'Профессиональная организация прямых трансляций: от технической настройки до стриминга на все платформы. Работаем с несколькими камерами и обеспечиваем надёжный эфир.',
            listTitle: 'ЧТО МЫ ДЕЛАЕМ',
            list: [
                {
                    icon: '',
                    title: 'Прямая трансляция'
                },
                             {
                    icon: '',
                    title: 'Многокамерная съёмка'
                },
                             {
                    icon: '',
                    title: 'Онлайн-стриминг'
                },
                             {
                    icon: '',
                    title: 'Техническая поддержка'
                },
                             {
                    icon: '',
                    title: 'Запись и архивирование'
                }
            ],
            field: [
                {
                    id: 1,
                    type: 'input',
                    name: 'fio',
                    title: 'Ваше имя',
                    placeholder: 'Имя Фамилия',
                },
                {
                    id: 2,
                    type: 'input',
                    name: 'phone',
                    title: 'Телефон',
                    placeholder: '8(000) 00-00-000',
                },
                {
                    id: 3,
                    type: 'input',
                    name: 'email',
                    title: 'Почта',
                    placeholder: 'example@mail.ru',
                },
                {
                    id: 4,
                    type: 'area',
                    name: 'message',
                    title: 'Сообщение',
                    placeholder: 'Текст',
                }
            ]
        },
        {
            id: 3,
            title: 'ЗАЯВКА НА ВИДЕОПРОИЗВОДСТВО',
            subtitle: 'Полный цикл видеопроизводства: от идеи и съёмки до финального монтажа и постпродакшена. Работаем как с готовым материалом, так и создаём проекты с нуля.',
            listTitle: 'ЧТО МЫ ДЕЛАЕМ',
            list: [
                {
                    icon: '',
                    title: 'Видеопроизводство'
                },
                             {
                    icon: '',
                    title: 'Рекламный ролик под ключ'
                },
                             {
                    icon: '',
                    title: 'Монтаж готового материала'
                },
                             {
                    icon: '',
                    title: 'Постпродакшен с нуля'
                },
                             {
                    icon: '',
                    title: 'Цветокоррекция и VFX'
                }
            ],
            field: [
                {
                    id: 1,
                    type: 'input',
                    name: 'fio',
                    title: 'Ваше имя',
                    placeholder: 'Имя Фамилия',
                },
                {
                    id: 2,
                    type: 'input',
                    name: 'phone',
                    title: 'Телефон',
                    placeholder: '8(000) 00-00-000',
                },
                {
                    id: 3,
                    type: 'input',
                    name: 'email',
                    title: 'Почта',
                    placeholder: 'example@mail.ru',
                },
                {
                    id: 4,
                    type: 'area',
                    name: 'message',
                    title: 'Сообщение',
                    placeholder: 'Текст',
                }
            ]
        }
    ]


    async function formHandler (titleForm) {

        const { fio, subtitle, phone, email, message } = form

        if (!fio || !phone || !email || !message) {
            return alert('Заполните все поля')
        }

        const resData = {
            titleForm: titleForm,
            ...form
        }

        try {

            const response = await fetch('/api/v1/bid', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(resData)
            })

            if (!response.ok) {
                throw new Error(`Error API BID ${response.status} - ${response.statusText}`)
            }

            const data = await response.json()
            return data
            
        } catch (error) {
            console.error(error.message)
            return error
        }
    }


  return (
    <Container>
          
        <Row className='mb-3'>
          <Col>
          <div className="production-title">НАШИ УСЛУГИ</div>
          <div className="production-subtitle">UTV — это современная студия полного цикла. Мы создаем визуальный контент, который решает бизнес-задачи: от рекламных кампаний до записи топовых подкастов и технически сложных трансляций.</div>
          </Col>
        </Row>


        <Row className='mb-5'>
                {
                    typeProductionArr && typeProductionArr.map((item, index) => {
                        return (

                                <Col key={index} className='d-flex flex-md-row flex-column'>
                                    <motion.div
                                        className='production-list'
                                        initial={{opacity: 0}}
                                        whileInView={{opacity: 1}}
                                        transition={{
                                            delay: index * 0.5
                                        }}
                                    >
                                        {item.label}
                                    </motion.div>
                                </Col>

                        )
                    })
                }
        </Row>


        <Row>
            

            {
                formProductionArr && formProductionArr.map((item, index) => {

                    return (
                        <Col md={4} key={index}>
                            <motion.div
                                initial={{opacity: 0, y: 0}}
                                whileInView={{opacity: 1, y: 10}}
                                transition={{
                                    delay: index * 0.5,
                                }}
                                whileHover={{
                                    scale: 1.05
                                }}
                            >
                                <ProductionCard
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    listType={item.listType}
                                    list={item.list}
                                    field={item.field}
                                    formData={{form, setForm}}
                                    name={item.name}
                                    handler={formHandler}
                                />
                            </motion.div>
                        </Col>
                    )



                })
            }



        </Row>



    </Container>
  )
}

export default Production