import React from 'react';

interface PhoneShellProps {
  children?: React.ReactNode;
}

const PhoneShell: React.FC<PhoneShellProps> = ({ children }) => {
  return (
    <div className="phone-shell">
      <div className="phone-notch"></div>
      <div className="phone-screen">
        {children}
      </div>
      <div className="phone-home"></div>
    </div>
  );
};

export { PhoneShell };
