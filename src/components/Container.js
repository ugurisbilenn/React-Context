
import Button from './Button';
import Header from './Header';

import {useTheme} from '../context/ThemeContext';
import Profile from './Profile';
function Container() {
    const {theme} = useTheme();

    console.log("Theme:", theme)
  return (
    <div className={`app ${theme === 'dark' ? theme : ""}`}>
      <Button></Button>
       <Header/>

      <Profile/> 
    </div>
  )
}

export default Container
