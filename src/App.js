import { useState } from 'react';

import Button from './components/ui/Button';
import useElectronAPI from './hooks/useElectronAPI';

function App() {
  const electronAPI = useElectronAPI();
  const [message, setMessage] = useState('');

  const handleClick = () => {
    if (electronAPI) {
      electronAPI.sendMessage('Hello from React!');
      setMessage('Message sent to Electron!');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Welcome to Electron React</h1>
        <Button onClick={handleClick}>Send Message to Electron</Button>
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
