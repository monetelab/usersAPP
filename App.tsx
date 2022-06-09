/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */


import { createTheme, ThemeProvider } from '@rneui/themed';
import React from 'react';
import MyNavigation from './src/core/MyNavigation';
import { QueryClient, QueryClientProvider } from 'react-query'
import { UserProvider } from './src/pods/userDetail/UserContext';


const myTheme = createTheme({
  Button: {
    titleStyle: {
      color: 'white',
    },
  },
});
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      retry: 5,
      refetchOnWindowFocus: true,
      refetchIntervalInBackground: true,
      refetchOnReconnect: true,
      refetchInterval: 100
    }
  }
});
const App: React.FC = () => {

  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={myTheme}>
          <MyNavigation />
        </ThemeProvider>
      </QueryClientProvider>
      </UserProvider>

  );
};


export default App;
