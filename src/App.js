import React from 'react';
import Button from './components/ui/Button';
import useElectronAPI from './hooks/useElectronAPI';

function App() {
  const electronAPI = useElectronAPI();

  const handleClick = () => {
    if (electronAPI) {
      electronAPI.sendMessage('Hello from React!');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">
          Welcome to Electron React
        </h1>
        <Button onClick={handleClick}>
          Send Message to Electron
        </Button>
      </header>
    </div>
  );
}

export default App;
