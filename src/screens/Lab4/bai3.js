import React, { useState } from "react";
import { styles } from "./style";
import { Button, Text, View, Image } from "react-native";
import Input from "../../compoments/input";
import Seperator from "../../compoments/seperator";
import Googlelogin from "../../compoments/googlelogin";

const MyB3L4 = () => {
    const onSignIn = () => {
        console.log("Sign in");
    };

    return (
        <View style = {styles.container}>
            <Text style = {styles.textWelcom}>Hello! Welcome back</Text>
            <Image
                resizeMode = "contain"
                style = {styles.img}
                source = {require('../../assests/welcomeback.jpg')}/>
            <Input label = "Email" placeholder = "khai@gmail.com"/>
            <Input label = "Password" placeholder = "******"/>
            {/* <Input isPassword label = "Password" placeholder = "******"/> */}
            
            <Button style = {styles.button} title = "Sign In"></Button>
            <Seperator text = "Or sign up with"></Seperator>
            <Googlelogin></Googlelogin>

            <Text style = {styles.footerText}>
                Don't have an account?
                <Text 
                    onPress = {onSignIn}
                    style = {styles.footerLink}>
                    Sign Up
                </Text>
            </Text>
        </View> 
    );
};

export default MyB3L4;