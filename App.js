import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TestNavigator, Home } from './components/TestNavigator'
import Profile from './components/Profile';
import Test from './components/Test';
import { Gallery, Artists } from './components/Profile';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={{ 
            headerShown: false 
          }}
        >
          <Stack.Screen 
            name="Login" 
            component={TestNavigator} 
          />
          <Stack.Screen 
            name="Home" 
            component={Home} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  }
})