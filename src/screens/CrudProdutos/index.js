import React,{ useEffect, useState} from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from './styles';
import { produtoService} from './produtoService'

export const CrudProdutos = () => {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        produtoService.getProdutos().then((data) => setProdutos(data));
      }, []);


    return(
        <View>
            <View>
                <TextInput style={styles.inputSearch}></TextInput>
            </View>
            
            {/* <FlatList data={produtos} renderItem={ ({ item }) =>
                <View>
                    <View>
                        <Text>{item.id}</Text>
                        <Text>{item.nome}</Text> 
                    </View>
                    <View>
                        <Image source={require(item.fotoLink)} />
                        <View>
                            <Text>{item.descricao}</Text>
                            <Text>{item.nomeCategoria}</Text>
                            <Text>{item.valor}</Text>   
                        </View>
                        <View>
                            <Image source={caneta}></Image>
                            <Image source={lixeira}></Image>
                        </View>
                    </View>
                </View>
                } keyExtractor={ item => item.id }>
            </FlatList> */}
        </View>
    )
}