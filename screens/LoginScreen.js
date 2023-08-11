import { useFormik } from "formik";
import { ImageBackground, Text, TextInput, View } from "react-native";
import Checkbox from 'expo-checkbox';
import { SafeAreaView } from "react-native-safe-area-context";
import tw,{create} from 'twrnc';
import Logo from "../components/Logo.js";
import ButtonPresseable from "../components/ButtonPresseable.js";
import { StatusBar } from "expo-status-bar";
import { useFonts, Imprima_400Regular } from '@expo-google-fonts/imprima';
import { useState } from "react";


export default function LoginScren() {
    const twl = create(require(`../tailwind.config.js`));
    const [isChecked, setChecked] = useState(false);
    const textButton = "Ingresar";
    const classButton = ""
    const formik = useFormik({
        initialValues: {
            user: '',
            password: ''
        },
        onSubmit: values => {
            
        },
    });
    let [fontsLoaded] = useFonts({
        Imprima_400Regular,
    });
    
    if (!fontsLoaded) {
        return <View></View>
    } else {
        return (
            <>

                <View style={tw`flex w-full h-full`}>
                    <ImageBackground source={require("../assets/images/fooddown_bg.jpg")} style={tw`flex w-full h-full`}>
                        <View style={tw`flex flex-row justify-center h-1/3 w-full`}>
                            <Logo />
                        </View>
                        <View style={tw`h-2/3 w-full justify-end`}>
                            <View style={[tw`flex bg-white p-6 pt-11 h-3/5 items-center `,twl`rounded-t-4xl`]}>
                                <TextInput placeholder="Usuario ..." placeholderTextColor="#cdb4b0" style={[tw`p-2 w-11/12 border-solid border-b text-xl` , twl`border-primary-red text-primary-red`]}></TextInput>
                                <TextInput placeholder="Contraseña ..." placeholderTextColor="#cdb4b0" style={[tw`p-2 w-11/12 border-solid border-b text-xl` , twl`border-primary-red text-primary-red`]}></TextInput>
                                <View style={tw`flex flex-row justify-around mt-10 w-11/12 items-center`}>
                                    <Text style={tw`text-xl`}>Mantener sesión iniciada</Text> 
                                    <Checkbox
                                        style={tw``}
                                        value={isChecked}
                                        onValueChange={setChecked}
                                        color={isChecked ? '#BD0003' : '#cdb4b0'}
                                    />
                                </View>
                                <ButtonPresseable classButton={classButton} textButton={textButton} goTo={goTo} />
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <StatusBar style="light" />
            </>
        )
    }
}