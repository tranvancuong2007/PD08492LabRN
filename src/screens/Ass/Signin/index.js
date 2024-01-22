import React, { useState } from "react";
import { styles } from "./style";
import { Button, Text, View } from "react-native";
import AuthHeader from "../../../compoments/AuthHeader";
import Input from "../../../compoments/input";
import Seperator from "../../../compoments/seperator";
import Googlelogin from "../../../compoments/googlelogin";

const SignIn = () => {
    const onSignIn = () => {
        console.log("Sign in");
    };

    return (
        <View style = {styles.container}>
            <AuthHeader title = "Sign In"/>
            <Input label = "Email" placeholder = "cuong@gmail.com"/>
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

export default SignIn;