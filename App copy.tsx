/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 

import React from 'react';
import { faAdd, faCogs, faEdit, faSave, faTrash, faU, faUndo, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {  createTheme, ThemeProvider } from '@rneui/themed';
import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import MyButton from './src/common/MyButton';


const App : React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const myTheme = createTheme({
    Button: {
      titleStyle: {
        color: 'white',
      },
    },
  });
  function handlePress() {
    console.log("perrito")
  }
  return (
    <>
    <ThemeProvider theme={myTheme}>
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
         <MyButton action={()=>handlePress()} icon={faUser} disabled={false} />
      </ScrollView>
    </SafeAreaView>
    </ThemeProvider>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
