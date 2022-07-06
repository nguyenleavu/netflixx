import classNames from 'classnames/bind';
import Banner from '~/components/Banner/Banner';
import Header from '~/components/Header/Header';
import ItemMovie from '~/components/ItemMovie/ItemMovie';
import requests from '~/requests';
import styles from './Home.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <div className={cx('list')}>
                <ItemMovie
                    title='NetflixOriginals'
                    data={requests.fetchNetflixOriginals}
                />
                <ItemMovie title='Trending' data={requests.fetchTrending} />
                <ItemMovie title='TopRated' data={requests.fetchTopRated} />
                <ItemMovie
                    title='ActionMovies'
                    data={requests.fetchActionMovies}
                />
                <ItemMovie
                    title='ComedyMovies'
                    data={requests.fetchComedyMovies}
                />
                <ItemMovie
                    title='HorrorMovies'
                    data={requests.fetchHorrorMovies}
                />
                <ItemMovie
                    title='RomanceMovies'
                    data={requests.fetchRomanceMovies}
                />
                <ItemMovie
                    itle='Documantaries'
                    data={requests.fetchDocumantaries}
                />
            </div>
        </div>
    );
}

export default Home;
