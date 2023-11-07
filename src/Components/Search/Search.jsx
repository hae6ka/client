import css from './css/search.module.css';
import searchLogo from './../../i/search_image.png';

function Search() {
    return (
        <div className={css.search} data-aos="fade-down">
            <input type="text" className={css.search__input} placeholder='Поиск...' />

            <img src={searchLogo} alt="" width={'30px'} height={'30px'} className={css.search__logo} />
        </div>
    )
}

export default Search;