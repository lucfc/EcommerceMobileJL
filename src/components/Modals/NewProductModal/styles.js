import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    containerGeral:{
        alignItems:'center',
        height:800,
    },
    containerExit:{
        alignSelf: 'flex-end',
        marginRight:15
    },
    containerName:{
        height: 70,
        justifyContent: 'space-between',
        marginVertical: 10,
        width:380
    },
    containerDescription:{
        height: 129,
        justifyContent: 'space-between',
        marginVertical: 10,
        width:380
    },
    containerTwoItems:{
        flexDirection:'row',
        height: 70,
        justifyContent: 'space-between',
        marginVertical: 10,
        width:380
    },
    containerItem:{
        height: 70,
        justifyContent: 'space-between',
        marginVertical: 10,
        width: 170
    },
    containerConfirm:{
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor: '#626262',
        borderRadius:5,
        padding:10
    },
    inputName:{
        width: '100%',
        backgroundColor: '#e9e9e9',
        height: 39,
        paddingLeft: 10
    },
    inputDescription:{
        width: '100%',
        backgroundColor: '#e9e9e9',
        height: 86.67,
        textAlignVertical:'top',
        paddingLeft: 10
    },
    inputItems:{
        width: 168,
        backgroundColor: '#e9e9e9',
        height: 39,
        paddingLeft: 10
    },
    text:{
        fontFamily: 'Montserrat-Regular'
    },
    textError:{
        fontFamily: 'Montserrat-Regular',
        fontSize:10,
        color: 'red'
    },
    exitImage:{
        width:30,
        resizeMode:'contain'
    },

})