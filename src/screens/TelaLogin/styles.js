import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        height: '100%',
        alignItems: 'center',
        
    },
   
    ImgLogo: {
      
        height:  223,
        width: 185,
        paddingTop: 40
        
    },
    BotaoEntrar: {
        height: 35,
        width: 322,
        borderRadius: 4,
        backgroundColor: "grey",
        marginTop: 140
    },
    BotaoCadastro: {
        height: 35,
        width: 322,
        borderRadius: 4,
        backgroundColor: "grey",
        marginTop: 40

    },
    TextoBotaoEntrar: {
        fontSize: 18,
        textAlign: 'center'
       
    },

    TextoBotaoCadastro: {
        fontSize: 18,
        textAlign: 'center'
    },

    IconDarkMode: {
        height: 30,
        width: 30,
        transform: [{rotate: '32.43deg'}],
        marginLeft: 310,
        marginTop: 15
        
    }
    }

)