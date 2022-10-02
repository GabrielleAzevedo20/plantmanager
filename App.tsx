import React from 'react';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Plant01 } from './src/pages/Plant01';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Plant02 } from './src/pages/Plant02';
import { Plant03 } from './src/pages/Plant03';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_700Bold
  });
  if(!fontsLoaded) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>Carregando</Text>
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
        <Plant01 /> 
        { /* <Plant02 /> */ }
        { /* <Plant03 /> */ }
    </ThemeProvider>
  )

}