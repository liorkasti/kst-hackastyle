import { ChakraProvider } from '@chakra-ui/react';
import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRoutes from './routes';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
