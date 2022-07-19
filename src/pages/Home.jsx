import { Container, List } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import TodoItem from '../components/TodoItem'

export const Home = () => {
  const [todos, setTodos] = useState(window.localStorage.getItem('todos') ? JSON.parse(window.localStorage.getItem('todos')) : [])


  const todoHandler = (todo) => {
    console.log(todo)
    localStorage.setItem('todos', JSON.stringify([...todos, todo]))
    setTodos([...todos, todo])
    
  }

  const deleteItem = (id) => {
    console.log(id)
    localStorage.setItem('todos', JSON.stringify(todos.filter(todo => todo.id !== id)))
    const filtered = todos.filter((todo) => todo.id !== id)
    console.log(filtered)
    setTodos(filtered)
    
  }


  const editItem = (id, editText) => {
    let todosArray = [...todos]

    for(let i in todosArray) {
      if(todosArray[i].id == id){
        todosArray[i].text = editText
        localStorage.setItem('todos', JSON.stringify(todosArray))
      }
    }
    // todosArray.splice(id, 1, {text: editText, id: id})
    // setTodos(todosArray)

    

  }
  return (
    <Container  style={{ marginTop: '1rem'}}>
      <h1>Todo List</h1>
      <Form todoHandler={todoHandler} />
      <List sx={{ width: '100%', marginTop: '1rem' }}>
        {todos.map( (todo) => (
          <div key={todo.id} style={{ marginTop: '1rem' }}>
             <TodoItem editItem={editItem} todo={todo} deleteItem={deleteItem} />
          </div>
        ))}
     
      </List>

    </Container >
  )
}
