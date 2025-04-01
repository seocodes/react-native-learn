import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';  //pra criar o navigator
import { NavigationContainer } from '@react-navigation/native';
import { TestNavigator, Home } from './screens/TestNavigator.js'  //screens/componentes que a gente vai navegar
import Profile from './components/Profile';
import Test from './components/Test';
import { Gallery, Artists } from './components/Profile';

const Stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Login"  //começa no componente 'Login'/TestNavigator
          screenOptions={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen //define uma screen
            name="Login"   
            component={TestNavigator} 
            options={{
              title: "JOJO LIXO"
            }}
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