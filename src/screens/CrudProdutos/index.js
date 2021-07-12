import React, { useEffect, useRef, useState, useContext } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { styles } from './styles';
import ProdutoService from '../../services/produtoService';
import { NewProductModal } from '../../components/Modals/NewProductModal';
import { UpdateProductModal } from '../../components/Modals/UpdateProductModal';
import { DeleteProductModal } from '../../components/Modals/DeleteProductModal';
import { ModeContext } from '../../contexts/ContextDarkLight';
import { Header } from '../../components/Header';

import IconBack from '../../assets/icons/backArrow.png';
import IconLogo from '../../assets/icons/logo.png';
import IconDark from '../../assets/icons/darkMode.png';
import IconLight from '../../assets/icons/lightMode.png';
import IconSearch from '../../assets/icons/search.png';
import IconEdit from '../../assets/icons/edit.png';
import IconTrash from '../../assets/icons/trash.png';
import IconLabel from '../../assets/icons/label.png';

export const CrudProdutos = ({ navigation }) => {
  const [produtos, setProdutos] = useState([]);
  const [produtoUpdate, setProdutoUpdate] = useState({
    descricao: '',
    idCategoria: 0,
    idFuncionario: 0,
    nome: '',
    qtdEstoque: 0,
    valor: 0,
  });
  const [produtoDelete, setProdutoDelete] = useState({
    nome: '',
  });
  const produtoService = new ProdutoService();

  const { modeBoolean, setModeBoolean } = useContext(ModeContext);

  const [reload, setReload] = useState(false);

  const modalizeRefNew = useRef(null);
  const modalizeRefUpdate = useRef(null);
  const modalizeRefDelete = useRef(null);
  const modalizeRefLogout = useRef(null);

  const openNewProductModal = () => {
    modalizeRefNew.current?.open();
  };

  const openUpdateProductModal = data => {
    setProdutoUpdate(data);
    modalizeRefUpdate.current?.open();
  };
  const openDeleteProductModal = data => {
    setProdutoDelete(data);
    modalizeRefDelete.current?.open();
  };

  const [search, setSearch] = useState('');
  const [filtredData, setFiltredData] = useState([]);

  useEffect(() => {
    produtoService.getProdutos().then(data => {
      setProdutos(data);
      setFiltredData(data);
    });
  }, [reload]);

  const searchBarFunction = input => {
    if (input) {
      const newProdutos = produtos.filter(function (item) {
        const produtoData = item.nome
          ? item.nome.toUpperCase()
          : ''.toUpperCase();
        const inputData = input.toUpperCase();

        return produtoData.indexOf(inputData) > -1;
      });
      setFiltredData(newProdutos);
      setSearch(input);
    } else {
      setFiltredData(produtos);
      setSearch(input);
    }
  };

  const item = ({ item }) => {
    return (
      <ScrollView style={styles.item}>
        <View style={styles.headerProduct}>
          <Text style={[styles.nome, { color: modeBoolean ? '#fff' : 'black' }]}>
            {item.nome}
          </Text>
          <Text style={styles.id}>{`(ID: ${item.id})`}</Text>
        </View>
        <View style={styles.bodyProduct}>
          <Image
            style={{ width: 75, height: 75 }}
            source={{ uri: item.fotoLink }}
          />
          <View style={styles.bodyDescription}>
            <Text
              style={{
                fontFamily: 'Montserrat-Regular',
                color: modeBoolean ? '#fff' : 'black',
              }}>
              {item.descricao}
            </Text>
            <Text
              style={[styles.valor, { color: modeBoolean ? '#fff' : 'black' }]}>
              R$ {item.valor.toFixed(2)}
            </Text>
            <View style={styles.categoryLabel}>
              <Image
                source={IconLabel}
                style={{ tintColor: modeBoolean ? '#fff' : 'black' }}
              />
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 12,
                  color: modeBoolean ? '#fff' : 'black',
                }}>
                {item.nomeCategoria.charAt(0).toUpperCase() +
                  item.nomeCategoria.slice(1).toLowerCase()}
              </Text>
            </View>
          </View>
          <View style={styles.editIcons}>
            <TouchableOpacity onPress={() => openUpdateProductModal(item)}>
              <Image
                style={[
                  styles.crudButtons,
                  {
                    marginBottom: 15,
                    tintColor: modeBoolean ? '#fff' : 'black',
                  },
                ]}
                source={IconEdit}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openDeleteProductModal(item)}>
              <Image
                style={[
                  styles.crudButtons,
                  { tintColor: modeBoolean ? '#fff' : 'black' },
                ]}
                source={IconTrash}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };

  return (
    <>
      <View
        style={[
          styles.container,
          { backgroundColor: modeBoolean ? 'black' : 'white' },
        ]}>
        <Header />
        <View>
          <TouchableOpacity>
            <Text
              onPress={() => openNewProductModal()}
              style={[
                styles.novoProduto,
                { color: modeBoolean ? '#fff' : 'black' },
              ]}>
              Novo produto +
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.searchBar,
            { backgroundColor: modeBoolean ? '#fff' : '#e9e9e9' },
          ]}>
          <TextInput
            style={styles.inputSearch}
            value={search}
            onChangeText={input => searchBarFunction(input)}
          />
          <TouchableOpacity>
            <Image
              source={IconSearch}
              style={[
                styles.ImgSearch,
                { backgroundColor: modeBoolean ? '#fff' : '#e9e9e9' },
              ]}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={filtredData}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingBottom: 200 }}
          renderItem={item}></FlatList>
        <NewProductModal
          modeBoolean={modeBoolean}
          modalizeRefNew={modalizeRefNew}
          reload={reload}
          setReload={setReload}
        />
        <UpdateProductModal
          modeBoolean={modeBoolean}
          modalizeRefUpdate={modalizeRefUpdate}
          reload={reload}
          setReload={setReload}
          produtoUpdate={produtoUpdate}
        />
        <DeleteProductModal
          modeBoolean={modeBoolean}
          modalizeRefDelete={modalizeRefDelete}
          reload={reload}
          setReload={setReload}
          produtoDelete={produtoDelete}
        />
      </View>
    </>
  );
};
