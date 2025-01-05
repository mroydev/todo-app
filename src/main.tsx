import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import TodosContextProvider from './contexts/TodosContextProvider.tsx';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KindeProvider
      clientId="7540e6aab24c4f25919d6bee6f5358ce"
      domain="https://mroydev.kinde.com"
      redirectUri={
        process.env.NODE_ENV === 'production'
          ? 'https://todo-app-mroy.vercel.app/'
          : 'http://localhost:5173'
      }
      logoutUri={
        process.env.NODE_ENV === 'production'
          ? 'https://todo-app-mroy.vercel.app/'
          : 'http://localhost:5173'
      }
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </StrictMode>
);
