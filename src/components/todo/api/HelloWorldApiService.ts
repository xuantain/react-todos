import { apiClient } from './ApiClient';

// export function retrieveHelloWorldBean(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

export const retrieveHelloWorldBean = () => apiClient.get('/hello-world-bean');

//Response to preflight request doesn't pass access control check => Authorization header
export const retrieveHelloWorldPathVariable = (username: string, token: string) =>
  apiClient.get(
    `/hello-world-bean/path-variable/${username}`
    // ,{
    //     headers: {
    //         Authorization: token
    //     }
    // }
  );
