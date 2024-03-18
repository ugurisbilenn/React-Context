import {useContext} from 'react'

import ThemeContext from '../context/ThemeContext';
function Button() {
    
    const {theme,setTheme} = useContext(ThemeContext);

    const handleTheme = () =>{
        if(theme === 'dark'){
            setTheme('light');
        }else{
            setTheme('dark');
        }
    }
    console.log(theme);
  return (
    <div>
      Active Theme : {theme}

      <button onClick={handleTheme}>Change Theme</button>
    </div>
  )
}

export default Button
