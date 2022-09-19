import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { HashRouter } from 'react-router-dom';
import AppProviders from 'context';
import App from './App';
import 'normalize.css';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <QueryClientProvider client={queryClient}>
      <AppProviders>
        <App />
      </AppProviders>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </HashRouter>
);
