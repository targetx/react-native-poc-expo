import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppContainer from './app/components/AppContainer';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex:1,
      justifyContent: "center",
      height: "50%"
    }
  });

  return (
    <SafeAreaProvider>
      <PaperProvider>
        {/*<View style={styles.container}><Text>hello text</Text></View>*/}
        <StatusBar />
        <AppContainer/>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
