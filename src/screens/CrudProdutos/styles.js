import { StyleSheet} from 'react-native';
import { RotationGestureHandler } from 'react-native-gesture-handler';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    inputSearch:{
        borderRadius:5,
        color:'black',
        width: '96%',
        marginHorizontal:'2%',
        height: 40,
        fontSize: 15,
        backgroundColor: '#e9e9e9'
    },
    containerHeader:{
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:5,
        borderBottomWidth:1,
        width:'100%'
    },
    containerHeaderBack:{
        flexDirection:'row',
        alignItems: 'center',
        width:'33%'
    },
    containerHeaderImageMode:{
        flexDirection:'row',
        justifyContent:'flex-end',
        width:'33%'
    },
    containerHeaderImageLogo:{
        flexDirection:'row',
        justifyContent:'center',
        width:'33%'
    },
    back:{
        width:30,
        height:30
    },
    logo:{
        width:40,
        height:31,
    },
    switchModeDarkLight:{
        width:30,
        height:30,
        transform:[{rotate:'32.43deg'}],
    },
    headerText:{
        fontSize:15
    },
    novoProduto:{
        fontSize:20,
        width: '100%',
        textAlign:'right',
        paddingHorizontal:10,
        marginBottom: 10,
        fontWeight:'bold'
    },
    item: {
        marginLeft: 12
    },
    headerProduct: {
        flexDirection: 'row'
    },
    bodyProduct: {
        flexDirection: 'row'
    },
    bodyDescription: {
        flex: 1,
        marginLeft: 10
    },
    crudButtons: {
        width: 25,
        height: 25,
        marginTop: 8,
        marginRight: 15
    },
    nome: {
        fontSize: 19.04, 
        fontWeight: 'bold'
    },
    id: {
        alignSelf: 'center', 
        marginLeft: 10
    }
})