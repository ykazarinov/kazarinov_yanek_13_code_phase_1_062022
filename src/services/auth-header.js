export default function authHeader() {
    const token = JSON.parse(localStorage.getItem('token'));
    // console.log(user)
    if (token) {
        return { 
           
                'Content-type': 'application/json',
                'authorization': 'Bearer ' + token,
                'X-Custom-Header': 'header value'
            
        }
    } else {
        return {};
    }
    // const token = localStorage.getItem('token')
    // const response = await fetch(apiURL, {
    //     method: 'POST',
    //     headers: {
    //         'Content-type': 'application/json',
    //         'Authorization': Bearer ${token}, // notice the Bearer before your token
    //     },
    //     body: JSON.stringify(yourNewData)
    // })

   
  }