import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            
            <Form
                onSubmit={e => {
                    e.preventDefault()

                    if (!input.value.trim())
                        return

                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <InputGroup>
                    <Form.Control
                        type='text'
                        ref={ref => input = ref}
                        placeholder='Input new to do...'
                    />
                    <InputGroup.Append>
                        <Button
                            type='submit'
                            variant='secondary'>
                            Add to do
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        </div>
    )
}

export default connect()(AddTodo)