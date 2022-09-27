import './App.css';
import { AppProvider } from './components/Context';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <AppProvider>
      <Home/>
      </AppProvider>
    </div>
  )
}

export default App;
