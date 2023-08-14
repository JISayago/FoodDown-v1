import React, { useState } from 'react';
import Logo from '../components/Logo';
import { Button, ImageBackground, Pressable, View } from 'react-native';
import tw from 'twrnc';
import ButtonPresseable from '../components/ButtonPresseable';
import { useNavigation } from '@react-navigation/native';
import  ButtonClasses  from "../config/ButttonStyles.js";


export default function WelcomeScreen() {
  const [buttonValue, setButtonValue] = useState("");
  const navigation = useNavigation();
  const action = "redirect";
  
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

  return (
    <View style={tw`flex w-full h-full`}>
    <ImageBackground source={require("../assets/images/fooddown_bg.jpg")} style={tw`flex w-full h-full`}>
      <View style={tw`flex flex-row justify-center`}>
      <Logo />
      </View>
      <View style={tw`h-3/5 justify-end p-5 `}>
        <View style={tw`flex justify-around items-center h-1/2 w-full` }>
            <ButtonPresseable
              action={action }
              sizeH={"1/4"}
              sizeW={"3/5"}
              classButton={ButtonClasses.Primary}
              textButton={"Ingresar"}
              goTo={goTo}/>
            <ButtonPresseable
              action={action }
              sizeH={"1/4"}
              sizeW={"3/5"}
              classButton={ButtonClasses.Secondary}
              textButton={"Registrarse"}
              goTo={goTo} />
        </View>
      </View>
    </ImageBackground>
    </View>
  )
}
