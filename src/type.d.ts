interface Todo {
    id: string
    title: string
    description: string
    completed: boolean
    createdAt?: Date
}

type TodoProps = {
    todo: Todo
}

type ApiDataType = {
    data: Todo[]
}
