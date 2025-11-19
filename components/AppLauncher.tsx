import React from 'react';

interface AppLauncherProps {
  onAppSelect?: (appName: string) => void;
}

const AppLauncher: React.FC<AppLauncherProps> = ({ onAppSelect }) => {
  return (
    <div className="app-launcher">
      <h2>App Launcher</h2>
      <p>Componente de lançador de aplicativos</p>
    </div>
  );
};

export default AppLauncher;
