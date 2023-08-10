import React, { useState } from 'react';
import Logo from '../components/Logo';
import { ImageBackground, Pressable, View } from 'react-native';
import tw from 'twrnc';
import ButtonPresseable from '../components/ButtonPresseable';
import { useNavigation } from '@react-navigation/native';


export default function WelcomeScreen() {
  const [buttonValue, setButtonValue] = useState("");
  const navigation = useNavigation();
  
  const goTo = (value) => {
    if (value === "Ingresar") {
      setButtonValue("");
      return navigation.navigate('Login')
    };
    if (value === "Registrarse") {
      setButtonValue("");
      return navigation.navigate('Register')
    };
  }   
  const primary = "bg-primary-red text-primary-white";
  const secondary = "bg-primary-white text-primary-red"; 

  return (
    <View style={tw`flex w-full h-full`}>
    <ImageBackground source={require("../assets/images/fooddown_bg.jpg")} style={tw`flex w-full h-full`}>
      <View style={tw`flex flex-row justify-center`}>
      <Logo />
      </View>
      <View style={tw`h-3/5 justify-end p-5 `}>
        <View style={tw`flex justify-around items-center h-1/2 w-full` }>
          <ButtonPresseable classButton={primary} textButton={"Ingresar"}  goTo={goTo } />
          <ButtonPresseable classButton={secondary} textButton={"Registrarse"} goTo={goTo } />
        </View>
      </View>
    </ImageBackground>
    </View>
  )
}