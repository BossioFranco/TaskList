import { SafeAreaView } from 'react-native';
import Index from './src/Index';
import { globalStyles } from './src/components/styles';
import { ThemeProvider } from './src/components/contexts/ThemeContext';
export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={globalStyles.containerApp}>
        <Index />
      </SafeAreaView>
    </ThemeProvider>
  );
}