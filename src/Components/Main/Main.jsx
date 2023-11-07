import css from './css/main.module.css';
import main_logo from './../../i/main_logo.svg';

function App() {
    return (
        <main>
            <p className={css.main__text} data-aos="fade-right">
            Сжатые текста о саморазвитии и прочих интересных темах.
            </p>

            <img src={main_logo} alt="" data-aos="fade-left" />
        </main>
    )
}

export default App;