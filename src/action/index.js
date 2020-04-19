const url= "http://localhost:5000";

export function latestNews(){
    const output= fetch(`${url}/articles`, {
        method: "GET"
    })
    .then((data)=> data.json())

    return{
        type: 'GET_LATEST',
        payload: output
    }
}