import "./register.scss"
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Why Did you come here?</h1>
                    <p>
                    I only need two buttons, Ctrl + C and Ctrl + V.
                    </p>
                    <span>Wait you have an account? Make up your mind.</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                    
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                    <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Name" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register