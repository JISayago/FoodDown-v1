import React from 'react';
import { Image } from 'react-native';
import tw from 'twrnc';
function Logo() {
  return (
    <Image
    style={tw`flex w-70 h-70 bg-transparent`}
    source={
        require("../assets/images/logofooddown.png")
    } />
  )
}

export default Logo