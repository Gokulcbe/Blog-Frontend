import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const login = async() => {
        try{
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        }
        catch (e) {
            setError(e.message);
        }
    }

    return(
        <>
        <h1 style={{textAlign: 'center'}}>Login</h1>
        {error && <p className="error">{error}</p>}
        <div className="email">
        <input 
            className="em"
            placeholder="Your Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}/>
            </div>
        <div className="password">
            <input type="password" 
            className="em"
            placeholder="Your Password"
            value={password}
            onChange={e => setPassword(e.target.value)}/>
            </div>
        <button className="submit" onClick={login}>Login</button>
        <Link to="/createaccount">Don't have a account? Create one here</Link>
        </>
    )
}
export default LoginPage;