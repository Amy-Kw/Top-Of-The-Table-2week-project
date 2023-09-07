// users fetch requests

const baseUrl = 'http://localhost:8080';

export async function fetchAllUsers() {
    try {
        const response = await fetch(`${baseUrl}/api/users`);
        const returnVal = await response.json();
        return returnVal;
    } catch(err) {
        console.log(err);
        return err;
    }
}


// making a log in api?
export async function createLogin(username, password) {
    try {
        const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
      });
      const result = await response.json();
      console.log("result", result);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
