import React from 'react'
import { default as BoostrapCard } from 'react-bootstrap/Card'
import Footer from '../components/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import './Card.sass'

const Card = () =>
    <BoostrapCard className='bootstrapCard'>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </BoostrapCard>

export default Card