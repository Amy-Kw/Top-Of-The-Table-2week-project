import { Link } from "react-router-dom";

export default function Home() {

    return (
        <div className="home">
            <h1>Top Of The Table</h1><br></br>
                <h2 className="link"><Link to="/login">Login</Link></h2>
        </div>
    )
}