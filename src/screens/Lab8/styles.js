import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'blue',
        borderRadius: 4,
        padding: 16,
        margin: 10,
    },

    containerText: {
        flexDirection: 'row',
        backgroundColor: 'lightblue',
        borderRadius: 4,
        padding: 16,
        margin: 10,
    },

    containerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        backgroundColor: 'lightblue',
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginHorizontal: 8,
        borderRadius: 8,
    },

    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },

    buttonNew: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        paddingVertical: 6,
        marginHorizontal: 11,
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'lightblue',
        marginBottom: 12,
        marginTop: 12,
    },

    name: {
        color: 'black',
        textAlign: 'left',
        marginRight: 'auto',
        fontSize: 16,
        fontWeight: 'bold',
    },

    birthday: {
        color: 'black',
        textAlign: 'right',
        marginLeft: 'auto',
        fontSize: 16,
        fontWeight: 'bold',
    },

    modelContent: {
        backgroundColor: 'white',
        padding: 16,
        marginTop: 100,
        borderRadius: 8,
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 16, 
    },
    
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    
});