import React, { useState } from "react";
import { styles } from "./style";
import { Button, Text, View } from "react-native";
import AuthHeader from "../../../compoments/AuthHeader";
import Input from "../../../compoments/input";
import Checkbox from "../../../compoments/Checkbox";
import Seperator from "../../../compoments/seperator";
import Googlelogin from "../../../compoments/googlelogin";

const SignUp = () => {
    const [checked, setChecked] = useState(false);
    const onSignIn = () => {
        console.log("Sign in");
    };

    return (
        <View style = {styles.container}>
            <AuthHeader title = "Sign Up"/>
            <Input label = "Name" placeholder = "cuong"/>
            <Input label = "Email" placeholder = "cuong@gmail.com"/>
            <Input label = "Password" placeholder = "******"/>
            {/* <Input isPassword label = "Password" placeholder = "******"/> */}
            <View style = {styles.checkRow}>
                <Checkbox checked = {checked} onCheck = {setChecked}></Checkbox>
                <Text style = {styles.checkText}>I agree with Terms & Privacy</Text>
            </View>
            <Button style = {styles.button} title = "Sign Up"></Button>
            <Seperator text = "Or sign up with"></Seperator>
            <Googlelogin></Googlelogin>

            <Text style = {styles.footerText}>
                Already have an account?
                <Text 
                    onPress = {onSignIn}
                    style = {styles.footerLink}>
                    Sign In
                </Text>
            </Text>
        </View> 
    );
};

export default SignUp;