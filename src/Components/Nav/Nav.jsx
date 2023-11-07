import css from './css/nav.module.css';

function App() {
    return (
        <nav>
            <a data-aos="fade-left" href='/self-development' className={css.nav__link}>
                Саморазвитие
            </a>

            <a data-aos="fade-right" href='/psychology' className={css.nav__link}>
                Психология
            </a>

            <a data-aos="fade-left" href='/philosophy' className={css.nav__link}>
                Философия
            </a>
        </nav>
    )
}

export default App;