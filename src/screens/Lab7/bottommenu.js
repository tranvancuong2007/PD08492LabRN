import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import User from "./UserScreen";
import Favor from "./FavorScreen";
import Home from "./homeScreen";
import { Image, View } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTap = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>   
                    <Tab.Screen name = "Home" component = {Home}
                                    options = {{
                                        tabBarIcon: ({focused}) => {
                                            return (
                                                <View>
                                                    <Image
                                                        source = {require('../../assests/icon/home.png')}
                                                        resizeMode = "contain"
                                                        style = {{width: 25}}
                                                    />
                                                </View>
                                            );
                                        },
                                    }}/>
                    <Tab.Screen name = "Favor" component = {Favor}
                                    options = {{
                                        tabBarIcon: ({focused}) => {
                                            return (
                                                <View>
                                                    <Image
                                                        source = {require('../../assests/icon/favor.png')}
                                                        resizeMode = "contain"
                                                        style = {{width: 25}}
                                                    />
                                                </View>
                                            );
                                        },
                                    }}/>
                    <Tab.Screen name = "User" component = {User}
                                    options = {{
                                        tabBarIcon: ({focused}) => {
                                            return(
                                                <View>
                                                    <Image
                                                        source = {require('../../assests/icon/user.jpg')}
                                                        resizeMode = "contain"
                                                        style = {{width: 25}}
                                                    />
                                                </View>
                                            );  
                                        },
                                    }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomTap;