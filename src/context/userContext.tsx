import { createContext, ReactNode, useContext, useState } from 'react';

interface User {
  name: string;
  token: string;
  state?: number;
  examTime?: string;
  firstLogin?: string;
  hasPredict?: number;
  sfrzh?: string;
  startTime?: string;
  endTime?: string;
}

const UserContext = createContext<
  | {
      user: User | null;
      setUser: React.Dispatch<React.SetStateAction<User | null>>;
    }
  | undefined
>(undefined);
UserContext.displayName = 'UserContext';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(JSON.parse(localStorage.getItem('info') as string));

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser必须在UserProvider中使用');
  }

  return context;
};
