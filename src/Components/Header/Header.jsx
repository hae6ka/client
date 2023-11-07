import css from './css/header.module.css';

function Header() {
    return (
        <header className={css.header}>
            <a href='/' className={css.header__title} data-aos="fade-down-right">
                Четко. Кратко. Понятно.
            </a>
        </header>
    )
}

export default Header;