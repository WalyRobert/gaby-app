import React from 'react';

interface GabyInterfaceProps {
  isListening?: boolean;
  message?: string;
}

const GabyInterface: React.FC<GabyInterfaceProps> = ({ isListening, message }) => {
  return (
    <div className="gaby-interface">
      <h2>Gaby - Assistente de IA</h2>
      {isListening && <div className="listening-indicator">Escutando...</div>}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default GabyInterface;
