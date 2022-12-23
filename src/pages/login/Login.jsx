import "./login.scss"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import Home from "../home/Home";

const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = ()=>{
        login();
    }
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Fake Twitter.</h1>
                    <p>
                    The phrase “it's just a game” is such a weak mindset. 
                    You are ok with what happened, losing, imperfection of a craft. When you stop getting angry after losing, you've lost twice. 
                    There's always something to learn, and always room for improvement, never settle.
                    </p>
                    <span>No account? Sucks to be you.</span>
                    <Link to="/register">
                    <button>Register</button>
                    </Link>
                    
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login