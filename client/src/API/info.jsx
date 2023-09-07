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

//get a single info
export async function fetchSingleInfo(info_id) {
    try {
        const response = await fetch(`${baseUrl}/api/info/${info_id}`);
        const returnVal = await response.json();
        return returnVal;
    } catch(err) {
        console.log(err);
        return err;
    }
}

//edit/create a infoPost
export async function createInfoPost(newGametitle, newTheme, newYear, newExpansions) {
    try {
        const response = await fetch(`${baseUrl}/api/info`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                post: {
                newGametitle: newGametitle,
                newTheme: newTheme,
                newYear: newYear,
                newExpansions: newExpansions,
            },
        }),
      });
        
      const result = await response.json();
      console.log(result);
      return result;
  } catch (error) {
      console.error(error);
  }

}

//delete a info post
export async function deleteInfoPost(infoId) {
    try {
        const response = await fetch(`${baseUrl}/api/info${infoId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        });
          
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }

}







