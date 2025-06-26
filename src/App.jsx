import './App.css'
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import GeminiContextProvider from './context/GeminiProvider';


function App() {

  return (
      <div style={{display: 'flex'}}>
        <GeminiContextProvider>
          <Sidebar/>
          <Main/>
        </GeminiContextProvider>
      </div>
  )
}

export default App
