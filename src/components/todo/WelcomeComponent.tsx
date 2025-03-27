import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { retrieveHelloWorldPathVariable } from './api/HelloWorldApiService'
import { useAuth } from './security/AuthContext'

export default function WelcomeComponent() {

    const authContext = useAuth()
    const username = authContext.username
    const token = authContext.token
    // const params = useParams()
    // const username = params.username
    // const { username } = useParams();
    const [ message, setMessage ] = useState(null);

    function callRestApi() {
        // retrieveHelloWorldBean()
        //     .then((res) => successfulResponse(res))
        //     .catch((err) => errorResponse(err))
        //     .finally(() => console.log('cleanup'))
        
        retrieveHelloWorldPathVariable(username, token)
            .then((res) => successfulResponse(res))
            .catch((err) => errorResponse(err))
            .finally(() => console.log('cleanup'))
    }

    function successfulResponse(response) {
        console.log(response);
        setMessage(response.data.message);
    }
    
    function errorResponse(error) {
        console.log(error);
    }
    
    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}!</h1>
            <div>Manage your Todos <Link to="/todos">Go here!</Link></div>
            <div>
                <button className="btn btn-success mt-3" onClick={callRestApi}>Call Hello World</button>
            </div>
            <div className="text-info mt-3">{message}</div>
        </div>
    )
}