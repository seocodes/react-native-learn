import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './screens/Login.js';
import Home from './screens/Home.js'
import Feed from './screens/Feed.js'
import 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function BottomTab() {
  const BottomTab = createBottomTabNavigator();
  return (
      <NavigationContainer>
        <BottomTab.Navigator initialRouteName='Feed'
        screenOptions={{
          headerStyle: {backgroundColor: "#000"},
          headerTintColor: "white",
          tabBarActiveBackgroundColor: "#000",
          tabBarInactiveBackgroundColor: "#484d50"
        }}>
          <BottomTab.Screen name='Login' component={Login}
          options={{tabBarIcon: () => <AntDesign name="login" size={24} color="white" />}}/>
          <BottomTab.Screen name='Home' component={Home}
          options={{tabBarIcon: () => <AntDesign name="home" size={24} color="white" />}}/>
          <BottomTab.Screen name='Feed' component={Feed}
          options={{tabBarIcon: () => <AntDesign name="sharealt" size={24} color="white" />}}/>
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