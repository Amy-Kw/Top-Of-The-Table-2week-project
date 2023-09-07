import { Link } from "react-router-dom";

export default function Home() {

    return (
        <div className="home">
            <h1>Please <Link to="/login">Login</Link></h1>
        </div>
    )
}