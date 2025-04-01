import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';  //pra criar o navigator
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login.js';  //screens/componentes que a gente vai navegar
import Home from './screens/Home.js'
import 'react-native-gesture-handler';
import Profile from './components/Profile';
import Test from './components/Test';
import { Gallery, Artists } from './components/Profile';

const Stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Login"  //começa no componente 'Login'/Login
          screenOptions={{   
            //vai se aplicar a todas as screens
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
            component={Login} 
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