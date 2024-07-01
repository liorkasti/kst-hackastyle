import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRoutes from './routes';
import { THEME } from './constants/theme';

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: { main: THEME.primary },
    secondary: { main: THEME.secondary },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
