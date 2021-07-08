import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {styles} from './styles';
import ProdutoService from './produtoService';

import IconBack from '../../assets/icons/backArrow.png';
import IconLogo from '../../assets/icons/logo.png';
import IconDark from '../../assets/icons/darkMode.png';
import IconSearch from '../../assets/icons/search.png';
import IconEdit from '../../assets/icons/edit.png';
import IconTrash from '../../assets/icons/trash.png';
import IconLabel from '../../assets/icons/label.png';

export const CrudProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const produtoService = new ProdutoService();

  useEffect(() => {
    produtoService.getProdutos().then(data => setProdutos(data));
  }, []);

  return (
    <View style={styles.container}>
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
        <TouchableOpacity>
          <Text style={styles.novoProduto}>Novo produto +</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <TextInput style={styles.inputSearch} />
        <Image source={IconSearch} style={styles.ImgSearch} />
      </View>

      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ScrollView style={styles.item}>
            <View style={styles.headerProduct}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.id}>{`(ID: ${item.id})`}</Text>
            </View>
            <View style={styles.bodyProduct}>
              <Image
                style={{width: 100, height: 100}}
                source={{uri: item.fotoLink}}
              />
              <View style={styles.bodyDescription}>
                <Text>{item.descricao}</Text>
                <Text> R$ {item.valor},00</Text>
                <View style={styles.categoryLabel}>
                  <Image source={IconLabel} />
                  <Text>{item.nomeCategoria}</Text>
                </View>
              </View>
              <View style={styles.editIcons}>
                <Image style={styles.crudButtons} source={IconEdit}></Image>
                <Image style={styles.crudButtons} source={IconTrash}></Image>
              </View>
            </View>
          </ScrollView>
        )}></FlatList>
    </View>
  );
};
