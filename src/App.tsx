import React, { useEffect, useState } from 'react'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import { getTodos, addTodo, updateTodo, deleteTodo } from './API'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
      try {
          const {data} = await getTodos()
          setTodos(data)
      }
      catch (err) {
          console.log(err)
      }
  }

 const handleSaveTodo = async (e: React.FormEvent, formData: Todo) => {
   e.preventDefault()
   try {
      await addTodo(formData)
      await fetchTodos()
   }
   catch(err) {
      console.log(err)
   }
 }

  const handleUpdateTodo = async (todo: Todo) => {
      try {
          await updateTodo(todo)
          await fetchTodos()
      }
      catch (err) {
          console.log(err)
      }
  }

  const handleDeleteTodo = async (id: string) => {
      try {
          await deleteTodo(id)
          await fetchTodos()
      }
      catch (err) {
          console.log(err)
      }
  }

  return (
    <main className='App'>
      <h1>My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {todos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          todo={todo}
        />
      ))}
    </main>
  )
}

export default App
