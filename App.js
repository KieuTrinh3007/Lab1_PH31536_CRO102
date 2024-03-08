import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React , {useEffect}from 'react'
import PH31536_bai12 from './screens/PH31536_bai12'
import PH31536_bai11 from './screens/PH31536_bai11'
import PH31536_bai13 from './screens/PH31536_bai13'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PH31536_home from './screens/PH31536_home'
import Splash from './screens/Splash'

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name='Home' component={PH31536_home} />
      <Stack.Screen name='Bai1' component={PH31536_bai11} />
      <Stack.Screen name='Bai2' component={PH31536_bai12} />
      <Stack.Screen name='Bai3' component={PH31536_bai13} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})