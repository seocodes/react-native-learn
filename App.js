import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  //pra criar o navigator
import { NavigationContainer } from '@react-navigation/native';
import { TestNavigator, Home } from './components/TestNavigator'  //screens/componentes que a gente vai navegar
import Profile from './components/Profile';
import Test from './components/Test';
import { Gallery, Artists } from './components/Profile';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Login"  //começa no componente 'Login'/TestNavigator
          screenOptions={{ 
            headerShown: false 
          }}
        >
          <Stack.Screen //define uma screen
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