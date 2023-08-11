import React, { useCallback } from 'react';
import tw from 'twrnc';
import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import AppLoading from 'expo-app-loading';
import { useFonts, Imprima_400Regular } from '@expo-google-fonts/imprima';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Imprima_400Regular,
  });

  if (!fontsLoaded) {
    return <View></View>
  } else {
    return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name="Welcome"
            component={WelcomeScreen}
            options={{
            headerShown:false,
          }}/>
          <Stack.Screen name="Register"
            component={RegisterScreen}
            options={{
            headerShown:false,
          }} />
          <Stack.Screen name="Login"
            component={LoginScreen}
            options={{
            headerShown:false,
          }} />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    );
  }

}


