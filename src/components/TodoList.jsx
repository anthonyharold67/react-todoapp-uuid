import React from 'react'
import { ListGroup } from 'react-bootstrap'

const TodoList = ({todos, setTodos}) => {

    const deleteTodo = (id) =>{
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const toggleTodo = (id) => {
      const newTodos = todos.map(todo => todo.id === id ? {...todo,completed: !todo.completed} : todo)
      setTodos(newTodos)
    }

  return (
    <div>
      <h2 className="text-center text-secondary">Todos</h2>
      <ListGroup className="col col-12 col-md-6 d-flex mx-auto">
        {todos.map((todo) => (
          <ListGroup.Item
            variant={todo.completed ? "success" : "danger"}
            as={"li"}
            role="button"
            className="m-2 text-capitalize rounded-5 d-flex justify-content-between"
            onDoubleClick={() => toggleTodo(todo.id)}
          >
            <span
              className={
                todo.completed
                  ? "text-decoration-line-through"
                  : "text-decoration-none"
              }
            >
              {todo.text}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="red"
              role="button"
              onClick={() => deleteTodo(todo.id)}
              className="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoList
