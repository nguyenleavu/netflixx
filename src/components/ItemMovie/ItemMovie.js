import instance from '~/axios';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import styles from './ItemMovie.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
    faCirclePlay,
    faCirclePlus,
    faStar,
    faThumbsDown,
    faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ItemMovie(props) {
    const [movie, setMovie] = useState([]);
    const [slide, setSlide] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    useEffect(() => {
        async function fetchData() {
            const results = await instance.get(props.data);
            setMovie(results.data.results);
            return results;
        }
        fetchData();
    }, [props.data]);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 40;
        if (direction === 'left' && slide > 0) {
            setSlide(slide - 1);
            listRef.current.style.transform = `translateX(${
                230 * 4 + distance
            }px)`;
        }
        if (direction === 'right' && slide < 5) {
            setSlide(slide + 1);
            listRef.current.style.transform = `translateX(${
                -230 * 4.2 + distance
            }px)`;
        }
    };
    return (
        <div className={cx('container')}>
            <h1>{props.title}</h1>
            <div className={cx('left')} style={{ display: !isMoved && 'none' }}>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={() => handleClick('left')}
                />
            </div>
            <div className={cx('right')}>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={() => handleClick('right')}
                />
            </div>
            <div className={cx('poster-list')} ref={listRef}>
                {movie.map((movie, index) => {
                    return (
                        <div key={index} className={cx('list-item', 'hover')}>
                            <img
                                className={cx('poster')}
                                key={index}
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                alt='img'
                            />
                            <div key={index + 1} className={cx('poster-info')}>
                                <div className={cx('poster-icon')}>
                                    <span>
                                        <FontAwesomeIcon icon={faCirclePlay} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faCirclePlus} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faThumbsDown} />
                                    </span>
                                    <h3 className={cx('vote')}>
                                        Vote: {movie.vote_average}
                                        <FontAwesomeIcon icon={faStar} />
                                    </h3>
                                    <h2 className={cx('name-movie')}>
                                        {movie.overview}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ItemMovie;
