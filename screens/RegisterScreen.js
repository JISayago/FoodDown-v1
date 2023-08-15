import { Formik } from 'formik';
import { ImageBackground, Text, TextInput, View,StyleSheet } from "react-native";
import tw,{create} from 'twrnc';
import Logo from "../components/Logo.js";
import ButtonPresseable from "../components/ButtonPresseable.js";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import  ButtonClasses  from "../config/ButttonStyles.js";

export default function Register() {
    const twl = create(require(`../tailwind.config.js`));

        return (
            <Formik
                initialValues={{ usuario: '' ,password:'',recuerdame:false}}
                onSubmit={values => login(values)}>
                   {({ handleChange, handleBlur, handleSubmit,setFieldValue, values }) => (
                <View style={tw`flex w-full h-full`}>
                    <ImageBackground source={require("../assets/images/fooddown_bg.jpg")} style={tw`flex w-full h-full`}>
                        <View style={tw`flex flex-row justify-center h-1/3 w-full`}>
                            <Logo />
                        </View>
                        <View style={tw`h-2/3 w-full justify-end`}>
                            <View style={[tw`flex bg-white p-6 pt-8 h-4/5 items-center `, twl`rounded-t-4xl`]}>
                                <View style={tw`mt-5 w-full` }>
                                    <TextInput
                                        placeholder="Usuario ..."
                                        placeholderTextColor="#cdb4b0"
                                        style={[styles.text, tw`p-2 my-2 w-11/12 border-solid border-b text-xl`, twl`border-primary-red text-primary-red`]}></TextInput>
                                    <TextInput
                                        placeholder="Email ..."
                                        placeholderTextColor="#cdb4b0"
                                        style={[styles.text, tw`p-2 my-2 w-11/12 border-solid border-b text-xl`, twl`border-primary-red text-primary-red`]}></TextInput>
                                    <TextInput
                                        placeholder="Contraseña ..."
                                        placeholderTextColor="#cdb4b0"
                                        style={[styles.text, tw`p-2 my-2 w-11/12 border-solid border-b text-xl`, twl`border-primary-red text-primary-red`]}></TextInput>
                                    <TextInput
                                        placeholder="Confirmar contraseña ..."
                                        placeholderTextColor="#cdb4b0"
                                        style={[styles.text, tw`p-2 my-2 w-11/12 border-solid border-b text-xl`, twl`border-primary-red text-primary-red`]}></TextInput>
                                </View>
                                <ButtonPresseable
                                    extraTWClass={"mt-12"}
                                    sizeH={"1/6"}
                                    sizeW={"3/5"}
                                    classButton={ButtonClasses.Primary}
                                    textButton={"Registrarse"}
                                    goTo={goTo} />
                            </View>
                        </View>
                    </ImageBackground>
                <StatusBar style="light" />
                </View>
                )}
                </Formik>
        )
    }

const styles = StyleSheet.create({
    text: {
      fontFamily: 'Imprima_400Regular',
      fontSize:22
    }
  })