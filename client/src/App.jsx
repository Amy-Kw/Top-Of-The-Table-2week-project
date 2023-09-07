import './App.css';
import InfoList from './component/InfoList';
import Navbar from './component/Navbar';
import { Route, Routes } from "react-router-dom";
import SingleInfoPost from './component/SingleInfoPost';
import UsersList from './component/UserList';
import Home from './component/Home';
import SingleUser from './component/SingleUser';


function App() {
//orange is the name of the url naming and the emement is the file and do that same for navbar

  return (
    <>
    <Navbar/>

    <Routes>
      <Route path="/info" element={<InfoList/>}/>
      <Route path="/info/:id" element={<SingleInfoPost/>}/>
      <Route path="/users" element={<UsersList/>}/>
      <Route path="/users/:id" element={<SingleUser/>}/>
      <Route path="/" element={<Home/>}/>


    </Routes>
    </>
  )
}


export default App;