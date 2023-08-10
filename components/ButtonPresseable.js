import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import tw, { create } from 'twrnc';



export default function ButtonPresseable(props) {
  
  const { classButton, textButton, goTo} = props;
  const twl = create(require(`../tailwind.config.js`));

  const [value, setValue] = useState(textButton);
 

  return (
    <Pressable onPress={() => goTo(value)} style={[tw`flex flex-row p-2 w-3/5 h-1/4 rounded-full justify-center items-center rounded-full`,twl`${classButton}`]}>
      <Text style={[styles.text,twl`${classButton}`]}>{textButton}</Text>
      </Pressable>
  )
}
const styles = StyleSheet.create({
  text: {
    fontFamily: 'Imprima_400Regular',
    fontSize:22
  }
})
