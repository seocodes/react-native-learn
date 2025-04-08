import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './screens/Login.js';  //screens/componentes que a gente vai navegar
import Home from './screens/Home.js'
import Feed from './screens/Feed.js'
import Count from './screens/Count.js'
import 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';
// import Profile from './components/Profile';
// import Test from './components/Test';
// import { Gallery, Artists } from './components/Profile';

export default function App() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
          <Stack.Navigator 
          screenOptions={{
            headerShown: false}}>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Home' component={BottomTabs}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
  };

  function BottomTabs(){
    const BottomTab = createBottomTabNavigator();
    return (
      //NÃO BOTA O NAVIGATION CONTAINER, SÓ PODE TER UM, E JÁ TÁ LÁ NO APP
      <BottomTab.Navigator initialRouteName='Home'
          screenOptions={{
            headerStyle: {
              backgroundColor: "#000"
            },
            headerTintColor: "white",
            tabBarActiveBackgroundColor: "#000",
            tabBarInactiveBackgroundColor: "#484d50"
          }}>
            <BottomTab.Screen name='Home' component={Home}
            options={{tabBarIcon: () => <AntDesign name="home" size={24} color="white" />}}/>
            <BottomTab.Screen name='Feed' component={Feed}
            options={{tabBarIcon: () => <AntDesign name="sharealt" size={24} color="white" />}}/>
            <BottomTab.Screen name='Count' component={Count}
            options={{tabBarIcon: () => <AntDesign name="plus" size={24} color="white" />}}/>
          </BottomTab.Navigator>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  }
})