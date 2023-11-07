import Header from '../../Components/Header/Header';
import New from '../../Components/New/New';
import Popularity from '../../Components/Popularity/Popularity';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getSelfDevelopmentPosts } from "../../redux/features/postSlice";
import css from './css/selfdevelopment.module.css';
import searchLogo from './../../i/search_image.png';
import {
    Link
} from 'react-router-dom';



function SelfDevelopment() {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post);
    const [search, setSearch] = useState('');

    let SortPosts = posts.posts;

    useEffect(() => {
        dispatch(getSelfDevelopmentPosts())
    }, [dispatch]);

    if (!posts.posts) {
        return (
            <div className={css.bug}>
                <Header />

                <h1 className={css.bug__title}>
                    Возникли технические неполадки
                </h1>

                <Link to={'https://t.me/xae6ka'} className={css.bug__subtitle}>
                    Техническая поддержка
                </Link>
            </div>
        )
    }

    return (
        <div>
            <Header />

            <div className={css.search} data-aos="fade-down">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className={css.search__input} placeholder='Поиск...' />

                <img src={searchLogo} alt="" width={'30px'} height={'30px'} className={css.search__logo} />
            </div>

            {
                !search && SortPosts.length ? <Link to={SortPosts[0]?._id} className={css.post}>
                <h4 className={css.link}>
                    {SortPosts[0]?.title}
                </h4>

                <New />
            </Link>  : null
            }

            {
                !search && SortPosts.length ? <hr /> : null
            }

            {/* <Link to={SortPosts[0]?._id} className={css.post}>
                <h4 className={css.link}>
                    {SortPosts[0]?.title}
                </h4>

                <New />
            </Link> */}

            {/* {SortPosts?.map((post) => 
                <Link key={post._id} to={post._id} className={css.post}>
                    <h4 className={css.link}>
                        {post.title}
                    </h4>

                    {
                        post.popularity ? <Popularity /> : null
                    }
                </Link>
            )} */}

            {SortPosts.filter((post) => post.title.toLowerCase().startsWith(search.toLowerCase())).map((post) => 
                <Link key={post._id} to={post._id} className={css.post}>
                    <h4 className={css.link}>
                        {post.title}
                    </h4>

                    {
                        post.popularity ? <Popularity /> : null
                    }
                </Link>
            )}
        </div>
    )
}

export default SelfDevelopment;