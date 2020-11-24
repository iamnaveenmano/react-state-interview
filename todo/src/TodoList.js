import React, {useState} from 'react';
import Todo from './Todo'

const TodoList = () => {
    const [todos, setTodos] = useState([
            {
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
              },
              {
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
              },
              {
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": false
              },
              {
                "id": 4,
                "title": "et porro tempora",
                "completed": true
              },
              {
                "id": 5,
                "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                "completed": false
              }
        ])
    return (
        <div>
            {todos.map((todo) => (
                <Todo name={todo.title} key={todo.id}/>
            ))}
            
        </div> 
    )
}


export default TodoList;