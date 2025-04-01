import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './screens/Login.js';  //screens/componentes que a gente vai navegar
import Home from './screens/Home.js'
import 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';
// import Profile from './components/Profile';
// import Test from './components/Test';
// import { Gallery, Artists } from './components/Profile';

export default function App() {
    const BottomTab = createBottomTabNavigator();
    return (
        <NavigationContainer>
          <BottomTab.Navigator>
            <BottomTab.Screen name='Login' component={Login}
            options={{tabBarIcon: () => <AntDesign name="login" size={24} color="black" />}}/>
            <BottomTab.Screen name='Home' component={Home}
            options={{tabBarIcon: ()=> <AntDesign name="home" size={24} color="black" />}}/>
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