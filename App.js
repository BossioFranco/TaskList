import { SafeAreaView } from 'react-native';
import Index from './src/Index';
import { globalStyles } from './src/componentes/styles';
import { ThemeProvider } from './src/componentes/contexto/ThemeContext';
export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={globalStyles.containerApp}>
        <Index />
      </SafeAreaView>
    </ThemeProvider>
  );
}