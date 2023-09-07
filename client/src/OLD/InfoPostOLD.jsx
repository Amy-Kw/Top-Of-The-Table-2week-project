import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllInfo } from "../API/info";


export default function InfoPost() {
    const [infoPosts, setInfoPosts] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState("");
    const navigate = useNavigate();

      
        async function getAllInfo() {
          const APIResponse = await fetchAllInfo();
          console.log(APIResponse)
          if (APIResponse.success) {
            setInfoPosts(APIResponse.data.infoposts);
          } else {
            setError(APIResponse.message);
          }
        }
      
        async function handleDelete(infoId) {
          try {
            const result = await deleteInfoPost(infoId);
            console.log(result)
            if (result.success) {
              getAllInfo(); 
              console.log('show success')
              alert("Deleted Information Post!")
            } else {
              console.log('this is a fail')
              alert("Delete Information Post Failed!")
            }
          
          
          } catch (error) {
            console.error(error);
          }
        }
      
        useEffect(() => {
          getAllInfo();
        }, []);

    const visableInfoList = searchParam
  ? infoPosts.filter((info) =>
      info.gametitle.toLowerCase().includes(searchParam)
  )
  //the name infoPosts comes from line 17, even though it says infoposts - delcaring
  : infoPosts;


console.log(visableInfoList)
  return (
    <div className="AllInfoPostsHere">
      <div className="SearchSection">
        <label>
          Search:{" "}
          <input
          type="text"
          placeholder="search"
          onChange={(event) => setSearchParam(event.target.value.toLowerCase())}
          />
        </label>
      </div>


    
      {visableInfoList.map((info) => {
        return (
          <div  key={info._id}>
          <h3 id="post-component"> {info.gametitle} </h3>
            <p> {info.theme} </p>
            <p> {info.expansions} </p>
            <p> {info.ratelineid} </p>
            <p> {info.listlineid} </p>

      <button onClick={() => handleDelete(info._id)}>Delete Infomation Post</button>

          </div>
        );
      })}
    
    </div>
  )
  }