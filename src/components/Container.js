import {useContext} from 'react';
import Button from './Button';
import Header from './Header';

import ThemeContext from '../context/ThemeContext';
function Container() {
    const {theme} = useContext(ThemeContext);

    console.log("Theme:", theme)
  return (
    <div className={`app ${theme === 'dark' ? theme : ""}`}>
      <Button></Button>
      <Header/>
    </div>
  )
}

export default Container
