import { useState, useEffect } from 'react'
import { retrieveAllTodosForUsernameApi, deleteTodoApi, updateTodoApi } from "./api/TodoApiService"
import { useAuth } from './security/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function ListTodoComponents() {

    const authContext = useAuth()
    const username = authContext.username
    const token = authContext.token

    const navigate = useNavigate()

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)

    function refreshTodos() {
        retrieveAllTodosForUsernameApi(username, token)
            .then(res => {
                setTodos(res.data)
            })
            .catch(err => console.log(err))
            .finally(() => console.log('cleanup'))
    }

    useEffect( () => refreshTodos(), [] )

    function deleteTodo(id) {
        deleteTodoApi(username, id, token)
            .then(() => {
                setMessage(`Delete ${id} Successfull`)
                refreshTodos()
            })
            .catch(err => console.log(err))
    }

    function updateTodo(id) {
        navigate(`/todo/${id}`)
    }

    function addNewTodo() {
        navigate(`/todo/-1`)
    }

    return (
        <div className="ListTodoComponents container">
            <h1>Things you want to do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>Is done?</th>
                            <th>targetDate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                            <td><span className={todo.done ? 'btn-close' : ''}></span></td>
                            <td>{todo.targetDate.toString()}</td>
                            <td><button className="btn btn-danger" 
                                    onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                            <td><button className="btn btn-success" 
                                    onClick={() => updateTodo(todo.id)}>Update</button></td>
                        </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-5" onClick={() => addNewTodo()}>Add New Todo</div>
        </div>
    )
}