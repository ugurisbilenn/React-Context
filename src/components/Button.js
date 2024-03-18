import  {useTheme } from '../context/ThemeContext';

function Button() {
    
    const {theme,setTheme} = useTheme();

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
