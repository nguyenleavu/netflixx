import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '~/Context/AuthContext/AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault('');
        setError('');
        try {
            await signIn(email, password);
            navigate('/home');
        } catch (e) {
            setError(e.message);
            console.log(error);
        }
    };

    return (
        <div style={{ color: 'white' }}>
            <div>
                <h1>Sign In</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                    />
                </div>
                <button>Sign In</button>
            </form>
        </div>
    );
}

export default Login;
