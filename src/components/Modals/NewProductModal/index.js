import React, { useEffect, useState } from 'react';
import { TextInput, Text, View, Image, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';

import { styles } from './styles'
import ProdutoService from '../../../screens/CrudProdutos/produtoService';

import iconExit from '../../../assets/icons/exit.png';
import iconConfirm from '../../../assets/icons/confirm.png';

export const NewProductModal = ({ modeBoolean, modalizeRefNew, reload, setReload }) => {

    const [nome, setName] = useState('')
    const [descricao, setDescricao] = useState('')
    const [idCategoria, setCategoria] = useState(0)
    const [idFuncionario, setFuncionario] = useState(0)
    const [qtdEstoque, setQtdEstoque] = useState(0)
    const [valor, setValor] = useState(0)
    const [colorBoolean, setColorBoolean] = useState(true)

    const produtoService = new ProdutoService();

    useEffect(() => {
        if (nome !== '' && descricao !== '' && idCategoria !== 0 && idFuncionario !== 0 && qtdEstoque !== 0 && valor !== 0) {
            setColorBoolean(false)
        } else {
            setColorBoolean(true)
        }
    }, [nome, descricao, idCategoria, idFuncionario, qtdEstoque, valor])

    const produto = {
        descricao: descricao,
        idCategoria: idCategoria,
        idFuncionario: idFuncionario,
        nome: nome,
        qtdEstoque: qtdEstoque,
        valor: valor
    }

    const handleCloseModal = () => {
        setName('')
        setDescricao('')
        setCategoria(0)
        setFuncionario(0)
        setQtdEstoque(0)
        setValor(0)
        setColorBoolean(true)
        modalizeRefNew.current.close();
    }

    const saveProductsAndClose = () => {
        produtoService.postProdutos(produto).then(res => {
            handleCloseModal()
            setReload(!reload)
        }).catch(e => { console.log(e) })
    }

    return (
        <Modalize ref={modalizeRefNew}
            closeOnOverlayTap={true}
            modalHeight={800}
            handlePosition='inside'
            handleStyle={{ backgroundColor: 'transparent' }}
            modalStyle={{
                backgroundColor: !modeBoolean ? '#fff': 'black',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,

            }}>
            <View style={styles.containerGeral}>
                <TouchableOpacity style={styles.containerExit} onPress={() => handleCloseModal()}>
                    <Image style={[styles.exitImage,{tintColor: modeBoolean ? '#fff': 'black'}]} source={iconExit} />
                </TouchableOpacity>
                <View style={styles.containerName}>
                    <Text style={[styles.text,{color: modeBoolean ? '#fff': 'black'}]}>Nome</Text>
                    <TextInput style={[styles.inputName, {backgroundColor: modeBoolean ? '#fff': '#e9e9e9'}]} onChangeText={(value) => setName(value)}></TextInput>
                </View>
                <View style={styles.containerDescription}>
                    <Text style={[styles.text,{color: modeBoolean ? '#fff': 'black'}]}>Descrição</Text>
                    <TextInput style={[styles.inputDescription, {backgroundColor: modeBoolean ? '#fff': '#e9e9e9'}]} onChangeText={(value) => setDescricao(value)}></TextInput>
                </View>
                <View style={styles.containerTwoItems}>
                    <View style={styles.containerItem}>
                        <Text style={[styles.text,{color: modeBoolean ? '#fff': 'black'}]}>Qtd. de estoque</Text>
                        <TextInput style={[styles.inputItems, {backgroundColor: modeBoolean ? '#fff': '#e9e9e9'}]} keyboardType={'numeric'} onChangeText={(value) => setQtdEstoque(value)}></TextInput>
                    </View>
                    <View style={styles.containerItem}>
                        <Text style={[styles.text,{color: modeBoolean ? '#fff': 'black'}]}>IdCategoria</Text>
                        <TextInput style={[styles.inputItems, {backgroundColor: modeBoolean ? '#fff': '#e9e9e9'}]} keyboardType={'numeric'} onChangeText={(value) => setCategoria(value)}></TextInput>
                    </View>
                </View>
                <View style={styles.containerTwoItems}>
                    <View style={styles.containerItem}>
                        <Text style={[styles.text,{color: modeBoolean ? '#fff': 'black'}]}>Valor</Text>
                        <TextInput style={[styles.inputItems, {backgroundColor: modeBoolean ? '#fff': '#e9e9e9'}]} keyboardType={'numeric'} onChangeText={(value) => setValor(value)}></TextInput>
                    </View>
                    <View style={styles.containerItem}>
                        <Text style={[styles.text,{color: modeBoolean ? '#fff': 'black'}]}>IdFuncionário</Text>
                        <TextInput style={[styles.inputItems, {backgroundColor: modeBoolean ? '#fff': '#e9e9e9'}]} keyboardType={'numeric'} onChangeText={(value) => setFuncionario(value)}></TextInput>
                    </View>
                </View>
                <TouchableOpacity disabled={colorBoolean} onPress={() => saveProductsAndClose()} style={[styles.containerConfirm, {borderColor: !colorBoolean ? '#4BBE23' : '#535353'}]}>
                    <Text style={[styles.text,{color: !colorBoolean ? '#4BBE23' : '#636363'}]}>Salvar</Text>
                    <Image source={iconConfirm} style={{width: 30,height:30, tintColor: !colorBoolean ? '#4BBE23' : '#636363' }} />
                </TouchableOpacity>
            </View>
        </Modalize>
    )
}

