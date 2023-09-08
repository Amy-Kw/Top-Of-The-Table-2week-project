import { deleteInfoPost } from "../API/info";
import { useNavigate } from "react-router-dom";

export default function DeleteThePost() { //why is the infoId not highlighted - took it out
    const navigate = useNavigate();

    async function handleDelete(info_id) {
        console.log("delete function starting");
        info_id.preventDefault();

    try {
      const result = await deleteInfoPost(info_id);

      console.log(result)
      console.log(info_id)
      navigate("/info");
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
  return (
    <div className="deletebutton">
         <button onClick={() => handleDelete(info_id)}>Delete Infomation Post</button>
    </div>
);
}

//changing the info.info_id to info_id