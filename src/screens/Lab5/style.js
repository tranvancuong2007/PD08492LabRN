import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    container2: {
        flex: 1,
        flexDirection: 'column',
    },

    img: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    detail: {
        marginLeft: 55,
    },

    text: {
        fontSize: 50,
        color: 'white',
    },

    textHA: {
        fontSize: 27,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 350,
        marginBottom: 20,
        marginLeft: 20,
    },

    textGia: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 25,
        marginTop: 25,
    },

    smlText: {
        fontSize: 20,
        color: 'white',
    },

    button: {
        width: 100,
        height: 50,
        backgroundColor: 'white',
        marginTop: 30,
        justifyContent: 'center',
        borderRadius: 10,
    },

    buttonGia: {
        width: 100,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: 250,
        marginTop: 15,
        position: 'absolute',
    },

    buttonHeart: {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        position: 'absolute',
        marginTop: 380,
        marginLeft: 310,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
},

    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        padding: 9,
    },

    buttonText2: {
        color: 'blue',
        fontWeight: 'bold',
        padding: 10,
        fontSize: 20,
    },

    textQN: {
        fontSize: 30,
        color: 'blue',
        fontWeight: 'bold',
        margin: 10,
        padding: 10
    },

    textTT: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 17,
        padding: 10,
    },

    textTTS: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 17,
        padding: 10,
    },

    f1: {
        flex: 7,
        position: 'absolute',
        width: '100%',
    },
    
    f2: {
        flex: 3,
        backgroundColor: 'white',
        height: 180,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    
    f3: {
        flex: 1,
        position: 'absolute',
        marginTop: 750,
        width: '100%',
        minHeight: 100,
        backgroundColor: 'blue',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});