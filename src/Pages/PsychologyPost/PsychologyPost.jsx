import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useEffect, useCallback, useState } from "react";
import {
    Link, useParams
} from 'react-router-dom';
import axios from "../../utils/axios";
import css from '../../css/post.module.css';



function PsychologyPost() {
    const params = useParams()

    const [post, setPost] = useState(null)
    
    const fetchPost = useCallback(async () => {
        const { data } = await axios.get(`/psychology/${params.id}`);
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

                    <Link className={css.post__link} to={'/'}>
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
                <img data-aos="fade-right" src={`http://localhost:5050/${post?.imgUrl}`} className={css.post__image} alt="" />

                <h1 data-aos="fade-right" className={css.post__title}>
                    {post?.title}
                </h1>

                <p data-aos="fade-right" className={css.post__text}>
                    {post?.text}
                </p>
            </div>

            <Footer/>
        </div>
    )
}

export default PsychologyPost;