import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Banner.scss';
import instance from '~/axios';
import requests from '~/requests';

const cx = classNames.bind(styles);

function Banner() {
    const truncate = (string, n) => {
        return string.length > n ? string.substr(0, n - 1) + '...' : string;
    };

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await instance.get(requests.fetchActionMovies);
            setMovie(
                data.data.results[
                    Math.floor(Math.random() * data.data.results.length - 1)
                ]
            );
        }
        fetchData();
    }, []);
    return (
        <div>
            <div>
                <img
                    className={cx('banner')}
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.original_title}
                />
                <div className={cx('shadow')}></div>
                <div className={cx('info-banner')}>
                    <h1>{movie.original_title}</h1>
                    <h2>{truncate(`${movie.overview}`, 150)}</h2>
                    <div>
                        <button className={cx('play-btn')}>
                            <FontAwesomeIcon icon={faPlay} />
                            <span> Play</span>
                        </button>
                        <button className={cx('info-btn')}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            <span> More info </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
