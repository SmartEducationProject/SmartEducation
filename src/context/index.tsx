import React, { ReactNode } from 'react';
import { UserProvider } from './userContext';

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <UserProvider>{children}</UserProvider>
    </div>
  );
};

export default AppProviders;
