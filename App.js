import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { RootNavigator } from './src/navigator';

export default function App() {
  const [loaded] = useFonts({
    robotoBold: require('./src/fonts/Roboto-Bold.ttf'),
    robotoThin:require('./src/fonts/Roboto-Thin.ttf')
  });
  if (!loaded) {
    return null
  }
  else
    
  return (
   <RootNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
