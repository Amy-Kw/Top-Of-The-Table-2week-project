// info fetch requests
const baseUrl = 'http://localhost:8080';

export async function fetchAllInfo() {
    try {
        const response = await fetch(`${baseUrl}/api/info`);
        const returnVal = await response.json();
        return returnVal;
    } catch(err) {
        console.log(err);
        return err;
    }
}

//delete a info post
export async function deleteInfoPost(infoId) {
    try {
        const response = await fetch(`${baseUrl}/posts/${infoId}`, {
        method: "DELETE",
        });
          
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }

}









