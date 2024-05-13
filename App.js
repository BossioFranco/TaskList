import { SafeAreaView } from 'react-native';
import Index from './src/Index';
import { globalStyles } from './src/componentes/styles';
export default function App() {
  return (

    <SafeAreaView style={globalStyles.containerApp}>
      <Index />
    </SafeAreaView>
  );
}
