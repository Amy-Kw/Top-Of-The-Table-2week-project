import { deleteInfoPost, fetchAllInfo } from "../API/info";
import { useNavigate } from "react-router-dom";



export default function DeleteThePost(props) { //why is the infoId not highlighted - took it out - try to give it more descriptive name like delete button
    const navigate = useNavigate();
console.log(props)
    async function handleDelete(info_id) {
        console.log("delete function starting");
        console.log(info_id)
        // info_id.preventDefault();

    try {
      const result = await deleteInfoPost(info_id);

      console.log(result)
      console.log(info_id)
      navigate("/info");
      fetchAllInfo(); 
      console.log('show success')
      alert("Deleted Information Post!")
    
    
    } catch (error) {
      console.error(error);
      console.log('this is a fail')
      alert("Delete Information Post Failed!")
    }
  }
  return (
    <div className="deletebutton">
         <button onClick={() => handleDelete(props.info_id)}>Delete Infomation Post</button>
    </div>
);
}

//changing the info.info_id to info_id
