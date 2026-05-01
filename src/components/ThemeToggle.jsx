import useLocalStorage from '../Hooks/useLocalStorage'; 

function ThemeToggle() {
    const [theme, setTheme] = useLocalStorage('theme', 'light');

    return (
        <button 
            className="theme-toggle"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
    );
}

export default ThemeToggle;