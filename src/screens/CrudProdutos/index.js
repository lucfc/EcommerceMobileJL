import React, {useEffect, useRef, useState} from 'react';
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
import { NewProductModal } from '../../components/Modals/NewProductModal';

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

  const [reload, setReload] = useState(false);
  
  const modalizeRef = useRef(null);
 
  console.log("Entrou");

  useEffect(() => {
    produtoService.getProdutos().then(data => setProdutos(data));
  }, [reload]);

  const deleteProduto = id => {
    produtoService.deleteProdutos(id).then(()=>{
      setReload(!reload)
    })
  };

  const openNewProductModal = () => {
    modalizeRef.current?.open();
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.containerHeaderBack}>
          <Image source={IconBack} style={styles.back} />
          <Text style={styles.headerText}>Entrar</Text>
        </View>
        <TouchableOpacity style={styles.containerHeaderImageLogo}>
          <Image source={IconLogo} style={styles.logo} />
        </TouchableOpacity>
        <View style={styles.containerHeaderImageMode}>
          <Image source={IconDark} style={styles.switchModeDarkLight} />
        </View>
      </View>

      <View>
        <TouchableOpacity>
          <Text onPress={() => openNewProductModal()} style={styles.novoProduto}>Novo produto +</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <TextInput style={styles.inputSearch} />
        <TouchableOpacity>
          <Image source={IconSearch} style={styles.ImgSearch} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 150}}
        renderItem={({item}) => (
          <ScrollView style={styles.item}>
            <View style={styles.headerProduct}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.id}>{`(ID: ${item.id})`}</Text>
            </View>
            <View style={styles.bodyProduct}>
              <Image
                style={{width: 75, height: 75}}
                source={{uri: item.fotoLink}}
              />
              <View style={styles.bodyDescription}>
                <Text style={{fontFamily: 'Montserrat-Regular'}}>
                  {item.descricao}
                </Text>
                <Text style={styles.valor}>R$ {item.valor.toFixed(2)}</Text>
                <View style={styles.categoryLabel}>
                  <Image source={IconLabel} />
                  <Text
                    style={{fontFamily: 'Montserrat-Regular', fontSize: 12}}>
                    {item.nomeCategoria.charAt(0).toUpperCase() +
                      item.nomeCategoria.slice(1).toLowerCase()}
                  </Text>
                </View>
              </View>
              <View style={styles.editIcons}>
                <TouchableOpacity>
                  <Image
                    style={[styles.crudButtons, {marginBottom: 15}]}
                    source={IconEdit}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteProduto(item.id)}>
                  <Image style={styles.crudButtons} source={IconTrash}></Image>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )}></FlatList>
    <NewProductModal modalizeRef={modalizeRef} reload={reload} setReload={setReload}/>
    </View>
  );
};
