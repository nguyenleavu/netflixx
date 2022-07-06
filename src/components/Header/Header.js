import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images/logo';
import { useNavigate } from 'react-router-dom';
import styles from './Header.scss';
import { UserAuth } from '~/Context/AuthContext/AuthContext';

const cx = classNames.bind(styles);

function Header() {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await logout();
            navigate('/');
            console.log('u are log out');
        } catch (e) {
            console.log(e.message);
            console.log(user);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Link to='/'>
                <img
                    className={cx('logo')}
                    src={images.logo.default}
                    alt='netflix'
                />
            </Link>
            <button onClick={handleLogOut} className={cx('btn')}>
                Log Out
            </button>
        </div>
    );
}

export default Header;
