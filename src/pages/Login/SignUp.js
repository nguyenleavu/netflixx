// import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '~/Context/AuthContext/AuthContext';
// import styles from './SignUp.scss';

// const cx = classNames.bind(styles);


function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault('');
        setError('');
        try {
            await createUser(email, password);
            navigate('/home');
        } catch (e) {
            setError(e.message);
            console.log(error);
        }
    };
    return (
        <div>
            <div>
                <h1>Sign Up</h1>
                <p>
                    Có nick thì vào cmm đi ? <Link to='/'>Sign In</Link>
                </p>
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
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
