/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import App from './App';
import ThemeContext from './context/Theme';
import TrackerContext from './context/Tracker';
import Home from './mainmenu/Home';

const AppRouter = () => {
  const [tracking, setTracking] = useState([]);
  const [themeMode, setThemeMode] = useState('Light');
  // sync component did mount
  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemTheme) {
      setThemeMode('Dark');
      document.body.classList.add('bg-darker');
      document.body.classList.remove('bg-lighter');
    } else {
      setThemeMode('Light');
      document.body.classList.remove('bg-darker');
      document.body.classList.add('bg-lighter');
    }
  }, []);
  // on theme change
  useEffect(() => {
    if (themeMode === 'Light') {
      document.body.classList.remove('bg-darker');
      document.body.classList.add('bg-lighter');
    } else {
      document.body.classList.add('bg-darker');
      document.body.classList.remove('bg-lighter');
    }
  }, [themeMode]);
  return (
    <Router>
      <TrackerContext.Provider value={{ tracking, setTracking }}>
        <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
          <NavigationBar />
          <Switch>
            <Route path="/products/:id">
              <App />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ThemeContext.Provider>
      </TrackerContext.Provider>
    </Router>

  );
};

export default AppRouter;
