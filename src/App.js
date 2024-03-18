
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import {ThemeProvider} from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <Button></Button>
      <Header/>
      </ThemeProvider>
    </div>
  );
}

export default App;
