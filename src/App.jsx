// App.jsx
import './styles/App.css'
import Nav from './components/nav'
import Hero from './components/hero'
import { useEffect, useState } from 'react'

function App() {
    const [isLightTheme, setIsLightTheme] = useState(!window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

        setIsLightTheme(!prefersDarkMode.matches);
        
        const handleChange = event => setIsLightTheme(!event.matches);
        prefersDarkMode.addEventListener('change', handleChange);
        
        return () => prefersDarkMode.removeEventListener('change', handleChange);
    }, [!window.matchMedia('(prefers-color-scheme: dark)').matches]);

    function updateTheme(theme) {
        setIsLightTheme(theme);
    }

    return (
        <div>
            <Nav updateTheme={updateTheme} isLightThemeDefault={isLightTheme} />
            <Hero isLightTheme={isLightTheme} />
        </div>
    )
}

export default App;
