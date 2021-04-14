import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
          <Main />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
