import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    containerDesenvolvedor:{
        margin:10,
        // borderBottomWidth: 1
    },
    nome:{
        fontFamily:'Montserrat-Regular',
        fontSize:20,
        fontWeight:'bold',
        color:'black',
    },
    containerImageLink:{
        flexDirection:'row',
        marginVertical: 20
    },
    image:{
        width:80, 
        height:80,
        borderRadius: 50,
        marginRight:20 
    },
    containerText:{
        justifyContent:'center'
    },
    link:{
        fontFamily:'Montserrat-Regular',
        fontSize: 15,
        color: 'blue',
        textDecorationLine:'underline'
    }
})