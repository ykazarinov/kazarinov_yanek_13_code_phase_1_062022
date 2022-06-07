export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('token'));
    if (user) {
        return { Authorization: 'Bearer ' + user.token };
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