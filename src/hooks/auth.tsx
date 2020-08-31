import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

interface User {
  id: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      // MultiGet: Retorna um array com as respectivas chaves buscadas, e cada item do array contém um array com duas posições sendo: [@Naverdex:nome_da_chave, valor]
      // Por isso foi feita essa desestruturação, para pegar somente o valor das chaves
      const [[, token], [, user]] = await AsyncStorage.multiGet([
        '@Naverdex:token',
        '@Naverdex:user',
      ]);

      if (token && user) {
        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({ token, user: JSON.parse(user) });
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/users/login', {
      email,
      password,
    });

    const { token } = response.data;
    const user = {
      id: response.data.id,
      email: response.data.email,
    };

    await AsyncStorage.multiSet([
      ['@Naverdex:token', response.data.token],
      ['@Naverdex:user', JSON.stringify(user)],
    ]);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@Naverdex:token', '@Naverdex:user']);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
}
// Componente utilizado no App.tsx, ao usar ele é possivel ter acesso as variáveis
const AppProvider: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export { AppProvider, AuthProvider, useAuth };
