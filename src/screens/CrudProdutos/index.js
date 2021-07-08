import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, Image, ScrollView, FlatList} from 'react-native';

import {styles} from './styles';
import ProdutoService from './produtoService';

import IconBack from '../../assets/icons/backArrow.png';

export const CrudProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const produtoService = new ProdutoService();


  
  useEffect(() => {
    produtoService.getProdutos().then(data => setProdutos(data));
  }, []);

  return (
    <View>
      <View>
        <Image source={IconBack} /> 
        <Text>Login</Text>
      </View>
      <View>
        <Text>Novo produto</Text>
        {/* <Image/> */}
      </View>
      <View>
        <TextInput style={styles.inputSearch}></TextInput>
      </View>
      <FlatList
        data={produtos}
        renderItem={({item}) => (
          <ScrollView>
            <View>
              <Text>{item.id}</Text>
              <Text>{item.nome}</Text>
            </View>
            <View>
              <Image
                style={{width: 50, height: 50}}
                source={{uri: item.fotoLink}}
              />
              <View>
                <Text>{item.descricao}</Text>
                <Text>{item.nomeCategoria}</Text>
                <Text>{item.valor}</Text>
              </View>
              <View>
                {/* <Image source={caneta}></Image>
                            <Image source={lixeira}></Image> */}
              </View>
            </View>
          </ScrollView>
        )}
        keyExtractor={item => item.id}></FlatList>
    </View>
  );
};
