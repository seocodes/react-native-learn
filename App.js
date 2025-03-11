import { StyleSheet, Text, View } from 'react-native';
import Profile from './components/Profile';
import Test from './components/Test';
import { Gallery, Artists } from './components/Profile';


export default function App() {
  return (
    <View style={styles.container}> 
      <Test/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  }
})