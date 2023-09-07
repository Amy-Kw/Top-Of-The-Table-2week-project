import { useNavigate } from "react-router-dom";
import { deleteInfoPost } from "../API/info";


export default function DeleteInfoPost(infoId) { //why is the infoId not highlighted
    const navigate = useNavigate();

    async function handleDelete(infoId) {
        console.log("delete function starting");
        infoId.preventDefault();

    try {
      const result = await DeleteInfoPost(infoId);
      console.log(result)
      navigate("/InfoPosts");
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
    <div>
         <button onClick={() => handleDelete(info._id)}>Delete Infomation Post</button>
    </div>
);
}
 