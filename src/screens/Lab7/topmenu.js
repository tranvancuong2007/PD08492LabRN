import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./homeScreen";
import Favor from "./FavorScreen";
import User from "./User";

const Tab = createMaterialTopTabNavigator();

const TopTap = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name = "Home" component = {Home}/>
                <Tab.Screen name = "Favor" component = {Favor}/>
                <Tab.Screen name = "User" component = {User}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TopTap;