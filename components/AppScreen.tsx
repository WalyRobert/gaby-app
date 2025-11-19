import React from 'react';

interface AppScreenProps {
  appName?: string;
  onClose?: () => void;
}

const AppScreen: React.FC<AppScreenProps> = ({ appName, onClose }) => {
  return (
    <div className="app-screen">
      <h3>{appName || 'Aplicativo'}</h3>
      <p>Tela do aplicativo</p>
      {onClose && <button onClick={onClose}>Fechar</button>}
    </div>
  );
};

export default AppScreen;
