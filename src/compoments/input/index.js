import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./style";

const Input = ({label, placeholder, isPassword}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style = {styles.container}>
            <Text style = {styles.label}>{label}</Text>
            <View style = {styles.inputContainer}>
                <TextInput 
                    secureTextEntry = {isPassword && !isPasswordVisible}
                    placeholder = {placeholder}
                    style = {styles.input}/>
                {isPassword ? (
                    <Pressable onPress = {onEyePress}>
                        <image
                            style = {styles.eye}
                            source = {
                                isPasswordVisible
                                ? require('../../assests/eye.png')
                                : require('../../assests/eye_closed.png')
                            }/>
                    </Pressable>
                ): null}
            </View>
        </View>
    );
};

export default Input;