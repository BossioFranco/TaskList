import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Index from './src/Index';

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <Index />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    backgroundColor: '#B69EF4',
  },
});
