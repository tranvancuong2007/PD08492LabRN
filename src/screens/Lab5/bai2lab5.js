import React from "react";
import { TouchableOpacity, ImageBackground, StatusBar, Text, View } from "react-native";
import { styles } from "./style";

const Bai2 = () => {
    return (
        <View style = {styles.container}>
            <StatusBar translucent backgroundColor = "rgba(0,0,0,0)"/>
            <ImageBackground
                source = {require('../../assests/images/travel.png')}
                style = {styles.img}>
                <View style = {styles.detail}>
                    <Text style = {styles.text}>Discover</Text>
                    <Text style = {styles.text}>world with us</Text>
                    <Text style = {styles.smlText}>Discover around the world with us!</Text>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttonText}>Get Statrted</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Bai2;