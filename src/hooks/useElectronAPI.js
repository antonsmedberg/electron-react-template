import { useEffect, useState } from 'react';

const useElectronAPI = () => {
  const [electronAPI, setElectronAPI] = useState(null);

  useEffect(() => {
    if (window.electronAPI) {
      setElectronAPI(window.electronAPI);
    }
  }, []);

  return electronAPI;
};

export default useElectronAPI;
