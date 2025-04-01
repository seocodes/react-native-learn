import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './screens/Login.js';  //screens/componentes que a gente vai navegar
import Home from './screens/Home.js'
import 'react-native-gesture-handler';

export default function BottomTab() {
  const BottomTab = createBottomTabNavigator();
  return (
      <NavigationContainer>
        <BottomTab.Navigator>
          <BottomTab.Screen name='Login' component={Login}/>
          <BottomTab.Screen name='Home' component={Home}/>
        </BottomTab.Navigator>
      </NavigationContainer>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  }
})