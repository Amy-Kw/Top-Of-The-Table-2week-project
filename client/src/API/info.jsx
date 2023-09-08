


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
// const body= {gametitle, theme, year, expansions, ratelineid, listlineid}
    try {

        const response = await fetch(`${baseUrl}/api/info`, {  //updated it to have ${info_id} (`${baseUrl}/api/info/${info_id}` why is this wrong
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            //object = key : values - key values pair
            body: JSON.stringify({
                gametitle: newGametitle,
                theme: newTheme,
                year: newYear,
                expansions: newExpansions,
                
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }

      const result = await response.json();
      console.log(result);
      return result;
  } catch (error) {
    throw error;
    //   console.error(error); //why this is wrong
  }

}


//delete a info post
// export async function deleteInfoPost(info_id) {
//     try {
//         const response = await fetch(`${baseUrl}/api/info${info_id}`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         });
          
//         const result = await response.json();
//         console.log(result);
//         return result;
//     } catch (error) {
//         console.error(error);
//     }

// }


export async function deleteInfoPost(info_id) {
    try {
      const response = await fetch(`${baseUrl}/api/info/${info_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }
  
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }




