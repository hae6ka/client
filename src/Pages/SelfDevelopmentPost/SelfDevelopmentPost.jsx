import Header from '../../Components/Header/Header';
import { useEffect, useCallback, useState } from "react";
import {
    Link, useParams
} from 'react-router-dom';
import axios from "../../utils/axios";
import css from './css/selfdevelopmentpost.module.css';



function SelfDevelopment() {
    const params = useParams()

    const [post, setPost] = useState(null)
    
    const fetchPost = useCallback(async () => {
        const { data } = await axios.get(`/selfdevelopment/${params.id}`);
        setPost(data);
    }, [params.id])

    useEffect(() => {
        fetchPost();
    }, [fetchPost]);

    if (!post) {
        return (
            <div>
                <Header/>

                <div className={css.post}>
                    <h1 className={css.post__error}>
                        Пост не найден :(
                    </h1>

                    <Link className={css.post__link} to={'/self-development'}>
                        Продолжить саморазвиваться
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Header />

            <div className={css.post}>
                <h1 className={css.post__title}>
                    {post?.title}
                </h1>

                <p className={css.post__text}>
                    {post?.text}
                </p>
            </div>
        </div>
    )
}

export default SelfDevelopment;