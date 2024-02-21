import { NavigationContainer } from "@react-navigation/native";
import ListUser from "./ListUser";
import AddUser from "./addUser";
const { createNativeStackNavigator } = require("@react-navigation/native-stack")

const Crud =()=>{
    const stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="ListUser" component={ListUser}/>
                <stack.Screen name="AddUser" component={AddUser}/>
            </stack.Navigator>
        </NavigationContainer>
    );
}
export default Crud;