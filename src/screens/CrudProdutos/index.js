import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Image, ScrollView, FlatList } from 'react-native';

import { styles } from './styles';
import ProdutoService from './produtoService';

import IconBack from '../../assets/icons/backArrow.png';
import IconLogo from '../../assets/icons/logo.png';
import IconDark from '../../assets/icons/darkMode.png';

export const CrudProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const produtoService = new ProdutoService();

  useEffect(() => {
    produtoService.getProdutos().then(data => setProdutos(data));
  }, []);



  return (
    <View>
      <View style={styles.containerHeader}>
        <View style={styles.containerHeaderBack}>
          <Image source={IconBack} style={styles.back} />
          <Text style={styles.headerText}>Entrar</Text>
        </View>
        <View style={styles.containerHeaderImageLogo}>
          <Image source={IconLogo} style={styles.logo} />
        </View>
        <View style={styles.containerHeaderImageMode}>
          <Image source={IconDark} style={styles.switchModeDarkLight} />
        </View>
      </View>
      <View>
        <Text style={styles.novoProduto}>Novo produto +</Text>
      </View>
      <View>
        <TextInput style={styles.inputSearch}></TextInput>
      </View>
      <FlatList data={produtos} keyExtractor={item => item.id} renderItem={({ item }) => (
          <ScrollView>
            <View>
              <Text>{item.id}</Text>
              <Text>{item.nome}</Text>
            </View>
            <View>
              <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: item.fotoLink }}
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
        ></FlatList>
    </View>
  );
};
