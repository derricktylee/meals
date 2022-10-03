import './App.css';
import { AppProvider } from './components/Context';
import Home from './pages/Home';

function App() {
  return (
    
    <AppProvider>
    <div>
      <Home/>
    </div>
    </AppProvider>
  )
}

export default App;
