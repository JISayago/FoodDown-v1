import { Formik } from 'formik';
import { ImageBackground, Text, TextInput, View,StyleSheet, Pressable } from "react-native";
import Checkbox from 'expo-checkbox';
import tw,{create} from 'twrnc';
import Logo from "../components/Logo.js";
import ButtonPresseable from "../components/ButtonPresseable.js";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import  ButtonClasses  from "../config/ButttonStyles.js";
import Data from "../config/data.json";
import { useNavigation } from "@react-navigation/native";

export default function LoginScren() {
    
    const twl = create(require(`../tailwind.config.js`));
    const navigation = useNavigation();
    
    const [isChecked, setChecked] = useState(false);
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
       setUsuarios(Data.users)
    }, [])

    const login = (values) => { 
        usuarios.map(usu => {
            if (usu.username === values.usuario && usu.password === values.password) return navigation.navigate('Main');
    })
}    
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
                            <View style={[tw`flex bg-white p-6 pt-11 h-4/5 items-center `, twl`rounded-t-4xl`]}>
                                <View style={tw`mt-5 w-full` }>
                                        <TextInput
                                            placeholder="Usuario ..."
                                            placeholderTextColor="#cdb4b0"
                                            onChangeText={handleChange('usuario')}
                                            onBlur={handleBlur('usuario')}
                                            value={values.usuario}
                                            style={[styles.text, tw`p-2 my-2 w-11/12 border-solid border-b text-xl`, twl`border-primary-red text-primary-red`]}
                                        ></TextInput>
                                        <TextInput
                                            placeholder="Contraseña ..."
                                            placeholderTextColor="#cdb4b0"
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                            style={[styles.text, tw`p-2 my-2 w-11/12 border-solid border-b text-xl`, twl`border-primary-red text-primary-red`]}
                                        ></TextInput>
                                </View>
                                <View style={tw`flex flex-row justify-around mt-10 w-11/12 items-center`}>
                                    <Text style={[styles.text,tw`text-xl`]}>Mantener sesión iniciada</Text> 
                                    <Checkbox
                                        style={tw``}
                                        value={isChecked}
                                        onValueChange={() => {
                                            setChecked(!isChecked)
                                            setFieldValue('recuerdame', !isChecked)
                                        }
                                        }
                                        color={isChecked ? '#BD0003' : '#cdb4b0'}
                                    />
                                    </View>
                                <ButtonPresseable
                                    handleSubmit={handleSubmit}
                                    extraTWClass={"mt-15"}
                                    sizeH={"1/6"}
                                    sizeW={"3/5"}
                                    classButton={ButtonClasses.Primary}
                                    textButton={"Ingresar"}
                                    />
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