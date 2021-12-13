import axios from 'axios'

const baseUrl: string = 'https://619a6e572782760017445234.mockapi.io/'

export const getTodos = async () => {
  try {
    return await axios.get(
        baseUrl + '/todos'
    )
  } catch (error) {
    throw new Error(error)
  }
}

export const addTodo = async (formData: Todo) => {
  try {
    const todo: Omit<Todo, 'id'> = {
      title: formData.title,
      description: formData.description,
      completed: false,
    }
    return await axios.post(
        baseUrl + '/todos',
        todo
    )
  } catch (error) {
    throw new Error(error)
  }
}

export const updateTodo = async (todo: Todo) => {
  try {
    const todoUpdate: Pick<Todo, 'completed'> = {
      completed: true,
    }
    return await axios.put(
        `${baseUrl}/todos/${todo.id}`,
        todoUpdate
    )
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteTodo = async (id: string)=> {
  try {
    return await axios.delete(
        `${baseUrl}/todos/${id}`
    )
  } catch (error) {
    throw new Error(error)
  }
}
