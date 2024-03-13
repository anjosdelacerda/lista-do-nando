import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Home = () =>{

    return(
        <div className="home">
            <Link to="/login">
            <Button className="home__button">Sign in</Button>
            </Link>
            <Link to="/register">
            <Button className="home__button">Sign up</Button>
            </Link>
        </div>
    )
}

export default Home