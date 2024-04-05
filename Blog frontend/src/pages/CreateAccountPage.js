import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccountPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const createAccount = async () =>{
        try{
            if(password !== confirmPassword){
                setError('Password and Confirm Password do not match');
                return;
            }
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        }
        catch(e){
            setError(e.message);
        }
    }

    return(
        <>
        <h1 style={{textAlign: 'center'}}>Create Account</h1>
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
        <div className="repassword">
            <input type="password" 
            className="em"
            placeholder="ReEnter Your Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}/>
            </div>
        <button className="submit" onClick={createAccount}>Create Account</button>
        <Link to="/login">Already Have a account? Login here</Link>
        </>
    )
}
export default CreateAccountPage;